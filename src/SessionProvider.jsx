import { createContext, useEffect, useState } from "react";
import { authRepository } from "./repositories/authRepository";

const SessionContext = createContext();
const SessionProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      const currentUser = await authRepository.getCurrentUser();
      setCurrentUser(currentUser);
      setIsLoading(false);
    }

    loadSession();
  }, []);

  if (isLoading) return <div />;

  return (
    <SessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
