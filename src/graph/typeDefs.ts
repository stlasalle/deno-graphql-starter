import { gql } from 'https://deno.land/x/graphql_tag/mod.ts'

export const typeDefs = gql`
  type Query {
    foo: String
  }
`