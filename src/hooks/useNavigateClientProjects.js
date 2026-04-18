import { useLocation, useNavigate } from 'react-router-dom';
import useRole from './useRole';

export default function useNavigateClientProject() {
  const role = useRole();
  const navigate = useNavigate();
  return () => navigate(`/${role}/${role}-projects`);
}
