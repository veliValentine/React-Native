import { gql } from 'apollo-boost';

import { REPOSITORY_DETAIL, REVIEWS_DETAIL } from './fragments';

export const GET_REPOSITORY = gql`
query repository($id: ID!){
  repository(id: $id){
    ...RepositoryDetails,
    ...ReviewDetails
    url
  }
}
${REPOSITORY_DETAIL}
${REVIEWS_DETAIL}
`;

export const GET_REPOSITORIES = gql`
query repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection){
  repositories(orderBy: $orderBy, orderDirection: $orderDirection){
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
