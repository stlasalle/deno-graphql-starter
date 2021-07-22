import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { ServerRequest } from 'https://deno.land/std@0.90.0/http/server.ts'
import { GraphQLHTTP } from 'https://deno.land/x/gql/mod.ts'
import { makeExecutableSchema } from 'https://deno.land/x/graphql_tools/mod.ts'

import { typeDefs } from './typedefs.ts'
import { resolvers } from './resolvers.ts'

const env = config()

export const graph = async (req: ServerRequest) => await GraphQLHTTP<ServerRequest>({
  schema: makeExecutableSchema({ resolvers, typeDefs }),
  graphiql: env.PLAYGROUND === 'true'
})(req)