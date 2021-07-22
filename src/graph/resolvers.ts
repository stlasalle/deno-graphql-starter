import { foo } from '../core/index.ts'

export const resolvers = {
  Query: {
    foo: () => foo(),
  }
}
