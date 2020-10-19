const { useQuery } = require("@apollo/react-hooks");
const { useState, useEffect } = require("react");
const { AUTHORIZED_USER } = require("../graphql/queries");

const useAuthorize = () => {
  const [authObj, setAuthObj] = useState();
  const { data, loading } = useQuery(AUTHORIZED_USER);

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

  return {authObj, loading, refetch: getAuthObj};
};
export default useAuthorize;