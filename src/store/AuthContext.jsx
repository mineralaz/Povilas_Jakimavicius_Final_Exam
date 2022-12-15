import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext({
  login(token) {},
  logout() {},
  userLoggedIn: false,
});

AuthContext.displayName = 'Auth-context';

function AuthContextProvider(props) {
  const history = useHistory();
  const tokenFromLocalStorage = localStorage.getItem('token');

  const [tokenFromLogin, setTokenFromLogin] = useState(tokenFromLocalStorage);

  const userLoggedIn = !!tokenFromLogin;

  const login = (idToken) => {
    setTokenFromLogin(idToken);
    localStorage.setItem('token', idToken);
  };
  const logout = () => {
    localStorage.removeItem('token');
    setTokenFromLogin('');
    history.push('/');
  };
  const contextValue = {
    login,
    logout,
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
