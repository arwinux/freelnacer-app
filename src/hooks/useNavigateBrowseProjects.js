import { useNavigate } from 'react-router-dom';

export default function useNavigateBrowseProjects() {
  const navigate = useNavigate();
  return () => navigate('/freelancer/projects');
}
