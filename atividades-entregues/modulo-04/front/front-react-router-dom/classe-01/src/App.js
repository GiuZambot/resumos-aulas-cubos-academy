import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';

function ProtectedRoutes(props) {
  const { token } = useAuth();
  return (
    <Route
      render={() => token ?
        (props.children) :
        (<Redirect to='/login' />)}
    />
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoutes>
            <Route path="/profile" component={Profile} />
          </ProtectedRoutes>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
