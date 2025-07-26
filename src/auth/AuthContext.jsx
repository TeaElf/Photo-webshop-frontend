import { createContext, useState, useEffect, useCallback } from "react";
import { useGetCurrentUserQuery } from "../templates/services/apiService";

export const AuthContext = createContext({
  user: null,
  ready: false,
  refresh: () => {},
});

export const AuthProvider = ({ children }) => {
  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
    refetch: refetchUser,
  } = useGetCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!userLoading) {
      if (userError) {
        setUser(null);
      } else {
        setUser(userData ?? null);
      }
      setReady(true);
    }
  }, [userData, userError, userLoading]);

  const refresh = useCallback(() => {
    setReady(false);
    refetchUser();
  }, [refetchUser]);

  return (
    <AuthContext.Provider value={{ user, ready, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};
