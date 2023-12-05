import { gql } from '@apollo/client';

const LOGIN = gql`
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

export default LOGIN;
