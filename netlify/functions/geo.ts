import type {Config, Context} from '@netlify/functions'

export default async function(_ : Request, c : Context) {
  return Response.json(c.geo)
}

export const config : Config = {
  path: '/api/geo'
}
