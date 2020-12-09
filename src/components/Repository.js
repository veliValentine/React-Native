import React from 'react';

import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';

import RepositoryItem from './RepositoryList/RepositoryItem';


const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  if(!repository){
    return null;
  }
  return <RepositoryItem repository={repository} link={true} />;
};

export default Repository;