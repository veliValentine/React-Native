import { gql } from 'apollo-boost';

import { REPOSITORY_DETAIL, REVIEWS_DETAIL } from './fragments';

export const GET_REPOSITORY = gql`
query repository(
  $id: ID!
  $first: Int
  $after: String
){
  repository(id: $id){
    ...RepositoryDetails,
    url
    reviews(first: $first, after: $after){
      edges {
        node {
          ...ReviewDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
}
${REPOSITORY_DETAIL}
${REVIEWS_DETAIL}
`;


export const GET_REPOSITORIES = gql`
query repositories(
  $orderBy: AllRepositoriesOrderBy,
  $orderDirection: OrderDirection,
  $searchKeyword: String,
  $after: String,
  $first: Int
){
  repositories(
    orderBy: $orderBy,
    orderDirection: $orderDirection,
    searchKeyword: $searchKeyword,
    after: $after,
    first: $first
  ){
    edges{
      node{
        ...RepositoryDetails
      }
    }
    pageInfo{
      hasNextPage,
      endCursor
    }
  }
}
${REPOSITORY_DETAIL}
`;

export const AUTHORIZED_USER = gql`
query GET_AUTHORIZED_USER ($includeReviews: Boolean = false){
  authorizedUser {
    id
    username
    reviews @include(if: $includeReviews){
      edges{
        node{
          ...ReviewDetails
        }
      }
    }
  }
}
${REVIEWS_DETAIL}
`;
