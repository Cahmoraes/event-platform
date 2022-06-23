import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oo9ldo0hsn01ywfil19ysw/master',
  cache: new InMemoryCache()
})