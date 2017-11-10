//@flow
import gql from 'graphql-tag'

export const getLuke = gql`
  query luke($id: ID) {
    person(id: $id) { name }
  }
`
