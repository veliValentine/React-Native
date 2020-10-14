import { gql } from 'apollo-boost';

export const REPOSITORY_DETAIL = gql`
  fragment RepositoryDetails on Repository{
    id
    description
    forksCount
    fullName
    language
    ratingAverage
    reviewCount
    stargazersCount
    ownerAvatarUrl
  }
`;