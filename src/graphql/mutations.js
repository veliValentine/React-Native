import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
mutation singIn($username: String!,$password: String!) {
  authorize(
    credentials: { 
      username: $username, 
      password: $password 
    }
  ) {
    accessToken
  }
}
`;
