//@flow
import gql from 'graphql-tag'

export const getPeople = gql`
  query people {
    allPeople {
      people {
        name
      }
    }
  }
`
