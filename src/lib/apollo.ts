import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8cymr17fx01xm9n6fh8r3/master',
    cache: new InMemoryCache()
})