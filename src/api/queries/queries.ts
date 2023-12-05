import { gql } from '@apollo/client';

export const GET_PROJECT = gql`
  query projects($filter: String) {
    projects(filter: $filter) {
      _id
      directory {
        _id
      }
      properties {
        name
        description
        client
        startDate
        endDate
        address
        zipcode
        town
        state
        country
        phone
        mobile
        email
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation ($projects: [ID!]!) {
    deleteProjects(projects: $projects)
  }
`;

export const LOGIN = gql`
  mutation ($email: EmailAddress!, $password: String!) {
    login(email: $email, password: $password) {
      token
      account {
        _id
        properties {
          email
          firstname
          lastname
        }
      }
    }
  }
`;
