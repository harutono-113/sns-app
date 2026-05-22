import { createContext, useState } from "react";

const SessionCotext = createContext();
const SessionProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  return (
    <SessionCotext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </SessionCotext.Provider>
  );
};

export { SessionCotext, SessionProvider };
