import { Route } from 'react-router-dom';
import NotAuthorisedPage from '../pages/NotAuthorisedPage';
import { useAuthCtx } from '../store/AuthContext';

function ProtectedRoute({ children, ...rest }) {
  const { userLoggedIn } = useAuthCtx();
  return (
    <Route {...rest}>{userLoggedIn ? children : <NotAuthorisedPage />}</Route>
  );
}
export default ProtectedRoute;
