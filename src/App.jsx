import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopsPage from './pages/ShopsPage';
import AddShopPage from './pages/AddShopPage';
import './App.css';
import Header from './components/header/Header';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <ProtectedRoute path="/add-shop">
          <AddShopPage />
        </ProtectedRoute>
        <ProtectedRoute path="/shops">
          <ShopsPage />
        </ProtectedRoute>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <Toaster
        containerStyle={{
          top: 25,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
    </div>
  );
}

export default App;
