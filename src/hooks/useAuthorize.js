import { useQuery } from '@apollo/react-hooks';
import { useState, useEffect } from 'react';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorize = (variables) => {
  const [authObj, setAuthObj] = useState();
  const { data, loading } = useQuery(AUTHORIZED_USER, { variables });

  const getAuthObj = () => {
    if (data) {
      setAuthObj(data.authorizedUser);
    } else {
      setAuthObj(null);
    }
  };

  useEffect(() => {
    getAuthObj();
  }, [loading, data]);

  return { authObj, loading, refetch: getAuthObj };
};
export default useAuthorize;
