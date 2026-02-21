import { useLocation, useNavigate } from 'react-router-dom';
import useRole from './useRole';

export default function useNavigateCreateProject() {
  const role = useRole();
  const navigate = useNavigate();
  return (payload) => navigate(`/${role}/create-project`, { state: payload });
}
