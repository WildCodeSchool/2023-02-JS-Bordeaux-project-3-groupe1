import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const ButtonStateConnectionContext = createContext();

export function ButtonStateConnectionProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const contextValueButtonStateConnection = useMemo(
    () => ({ isLoggedIn, setIsLoggedIn }),
    [isLoggedIn, setIsLoggedIn]
  );

  return (
    <ButtonStateConnectionContext.Provider
      value={contextValueButtonStateConnection}
    >
      {children}
    </ButtonStateConnectionContext.Provider>
  );
}
ButtonStateConnectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
