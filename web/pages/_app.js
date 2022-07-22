import '../styles/globals.css'
import client from "../lib/apollo-client.js"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    
    )
}

export default MyApp
