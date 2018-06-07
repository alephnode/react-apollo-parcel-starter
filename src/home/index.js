import React from 'react'
import { COLORS } from '../theme'
import { Query } from 'react-apollo'
import { client } from '../graphql.config'
import gql from 'graphql-tag'

const styles = {
  color: COLORS.PRIMARY,
}

export default () => (
  <Query
    style={{ ...styles }}
    query={gql`
      {
        homeGreeting
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return <h1>{data.homeGreeting}</h1>
    }}
  </Query>
)
