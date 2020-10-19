import { gql } from 'apollo-boost';

import { REPOSITORY_DETAIL } from './fragments';

export const GET_REPOSITORIES = gql`
{
  repositories{
    edges{
      node{
        ...RepositoryDetails
      }
    }
  }
}
${REPOSITORY_DETAIL}
`;

export const AUTHORIZED_USER = gql`
{
  authorizedUser {
    id
    username
  }
}
`;