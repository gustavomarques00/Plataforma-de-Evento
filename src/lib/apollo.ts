import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl65dfc678o7301uk0bfo5ho6/master',
  cache: new InMemoryCache()
})