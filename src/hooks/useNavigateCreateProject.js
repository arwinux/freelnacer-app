import { useNavigate } from 'react-router-dom';

export default function useNavigateCreateProject() {
  const navigate = useNavigate();
  return () => navigate('/client/create-project');
}
