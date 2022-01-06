import React from "react";
import useFindUser from "../hooks/useFindUser";

// Initialized Context
export const UserContext = React.createContext(null);

export function UserProvider(props) {
  const { user, setUser, isLoading } = useFindUser();
  return (
    // Provider for state
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {props.children}
    </UserContext.Provider>
  );
}