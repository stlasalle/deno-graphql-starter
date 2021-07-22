import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { serve } from 'https://deno.land/std@0.90.0/http/server.ts'
import { graph } from './graph/graph.ts'

const env = config()
const s = serve({ port: Number(env.PORT) })

if (env.PLAYGROUND === 'true') {
  console.log(`Deno GraphQL playground running at http://localhost:${env.PORT}/${env.ENDPOINT}`)
}

for await (const req of s) {
  if (!req.url.startsWith(`/${env.ENDPOINT}`)) {
    req.respond({
      status: 404
    })
  }

  await graph(req)
}
