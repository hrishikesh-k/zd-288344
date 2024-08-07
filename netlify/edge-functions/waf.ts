import type {Config} from '@netlify/edge-functions'

export default async function(req : Request) {
  console.log(req.headers.get('x-nf-waf-bypass-token'))
  const res = await fetch('https://zd-288344.netlify.app/api/geo', {
    headers: {
      'x-nf-waf-bypass-token': req.headers.get('x-nf-waf-bypass-token')
    }
  })
  const json = await res.json()
  return Response.json(json)
}

export const config : Config = {
  path: '/geo'
}
