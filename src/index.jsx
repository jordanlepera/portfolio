import React from "react"
import ReactDOM from "react-dom"
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import "./index.css"
import App from "./components/App/App"
import * as serviceWorker from "./serviceWorker"
import "./i18n"

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.REACT_APP_GITHUB_API_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
