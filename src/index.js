import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './home'
import './index.css'
import { ApolloProvider } from 'react-apollo'
import { client } from './graphql.config'

const target = document.getElementById('root')

ReactDOM.render(
  <ApolloProvider client={client}>
    <Hello />
  </ApolloProvider>,
  target
)
