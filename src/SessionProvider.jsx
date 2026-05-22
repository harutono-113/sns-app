import { createContext, useEffect, useState } from "react";
import { authRepository } from "./repositories/auth";

const SessionCotext = createContext();
const SessionProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setSession();
  }, []);

  const setSession = async () => {
    const currentUser = await authRepository.getCurrentUser();
    setCurrentUser(currentUser);
    setIsLoading(false);
  };

  if (isLoading) return <div />;

  return (
    <SessionCotext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </SessionCotext.Provider>
  );
};

export { SessionCotext, SessionProvider };
