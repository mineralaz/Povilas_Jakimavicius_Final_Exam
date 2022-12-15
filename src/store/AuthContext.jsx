import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext({
  login(token) {},
  userLoggedIn: false,
});

AuthContext.displayName = 'Auth-context';

function AuthContextProvider(props) {
  const tokenFromLocalStorage = localStorage.getItem('token');

  const [tokenFromLogin, setTokenFromLogin] = useState(tokenFromLocalStorage);

  const userLoggedIn = !!tokenFromLogin;

  const login = (idToken) => {
    setTokenFromLogin(idToken);
    localStorage.setItem('token', idToken);
  };
  const contextValue = {
    login,
    userLoggedIn,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
