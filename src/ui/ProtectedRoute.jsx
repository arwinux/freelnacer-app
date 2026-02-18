import { useEffect } from 'react';
import useAuthorize from '../features/authentication/useAuthorize';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isLoading, user, isAuthenticated, isAuthorized } = useAuthorize();

  // 2. check if is Authorized or not, check is Authenticated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/auth');
    if (!isAuthorized && !isLoading) navigate('/not-access');
  }, [isLoading, isAuthenticated, isAuthorized, navigate]);

  // 3. while loading => show a loading
  if (isLoading)
    return (
      <div className='flex items-center justify-center w-full h-screen bg-component'>
        <Loading />
      </div>
    );

  // 4. if user isAuthenticated and isAuthorized => render the app
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;

// authectication : who is he/she : name ...
// authorized : persmission, access to route or file
