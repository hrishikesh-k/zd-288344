import type {Config} from '@netlify/edge-functions'

export default async function(req : Request) {
  const res = await fetch('https://zd-288344.netlify.app/api/geo')
  const json = await res.json()
  return Response.json(json)
}

export const config : Config = {
  path: '/geo'
}
