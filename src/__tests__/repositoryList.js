import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList';

import formatInThousands from '../utils/formatInThousands';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      // Add your test code here
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      //debug();
      const names = getAllByTestId('fullName');
      const descriptions = getAllByTestId('description');
      const language = getAllByTestId('language');
      const stars = getAllByTestId('starsCount');
      const forks = getAllByTestId('forksCount');
      const ratings = getAllByTestId('ratingCount');
      const reviews = getAllByTestId('reviewsCount');

      expect(names.length + descriptions.length + language.length + stars.length + forks.length + ratings.length + reviews.length).toBe(14);
      for (let i = 0; i < names.length; i++) {
        expect(names[i]).toHaveTextContent(repositories.edges[i].node.fullName);
        expect(descriptions[i]).toHaveTextContent(repositories.edges[i].node.description);
        expect(language[i]).toHaveTextContent(repositories.edges[i].node.language);
        expect(stars[i]).toHaveTextContent(formatInThousands(repositories.edges[i].node.stargazersCount));
        expect(forks[i]).toHaveTextContent(formatInThousands(repositories.edges[i].node.forksCount));
        expect(ratings[i]).toHaveTextContent(formatInThousands(repositories.edges[i].node.ratingAverage));
        expect(reviews[i]).toHaveTextContent(formatInThousands(repositories.edges[i].node.reviewCount));
      }
    });
  });
});