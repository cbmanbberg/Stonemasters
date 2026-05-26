import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CLIENT_ID     = Deno.env.get('STRAVA_CLIENT_ID') ?? ''
const CLIENT_SECRET = Deno.env.get('STRAVA_CLIENT_SECRET') ?? ''
const SUPABASE_URL  = Deno.env.get('SUPABASE_URL') ?? ''
const SERVICE_KEY   = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
const APP_URL       = Deno.env.get('APP_URL') ?? 'https://cbmanbberg.github.io/Stonemasters'

Deno.serve(async (req) => {
  const url   = new URL(req.url)
  const code  = url.searchParams.get('code')
  const state = url.searchParams.get('state')   // Supabase user_id
  const error = url.searchParams.get('error')

  if (error) {
    return Response.redirect(`${APP_URL}?strava=error&msg=${encodeURIComponent(error)}`)
  }

  if (!code || !state) {
    return new Response('Missing code or state', { status: 400 })
  }

  // Exchange auth code for Strava tokens
  const tokenRes = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    }),
  })

  if (!tokenRes.ok) {
    return Response.redirect(`${APP_URL}?strava=error`)
  }

  const { access_token, refresh_token, expires_at, athlete } = await tokenRes.json()

  // Save tokens to Supabase profiles table
  const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

  const { data: row } = await supabase
    .from('profiles')
    .select('data')
    .eq('user_id', state)
    .single()

  if (row) {
    await supabase
      .from('profiles')
      .update({
        data: {
          ...row.data,
          strava: {
            access_token,
            refresh_token,
            expires_at,
            athlete_id:   athlete?.id,
            athlete_name: `${athlete?.firstname ?? ''} ${athlete?.lastname ?? ''}`.trim(),
          },
        },
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', state)
  }

  return Response.redirect(`${APP_URL}?strava=connected`)
})
