import { useNavigate } from 'react-router-dom';

export default function useNavigateClientProject() {
  const navigate = useNavigate();
  return () => navigate('/client/client-projects');
}
