import useUser from './useUser';
import useRole from '../../hooks/useRole';

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const role = useRole();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;
  let isAuthorized = false;

  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  const ROLES = {
    admin: 'ADMIN',
    freelancer: 'FREELANCER',
    client: 'OWNER',
  };

  if (Object.keys(ROLES).includes(role)) {
    if (user && user.role === ROLES[role]) isAuthorized = true;
  }

  return { isLoading, isAuthenticated, isAuthorized, user, isVerified };
}
