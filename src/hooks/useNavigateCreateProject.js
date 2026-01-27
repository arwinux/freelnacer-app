import { useNavigate } from 'react-router-dom';

export default function useNavigateCreateProject() {
  const navigate = useNavigate();
  return (payload) => navigate('/client/create-project', { state: payload });
}
