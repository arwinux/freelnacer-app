import { useQuery } from '@tanstack/react-query';
import { getAllProjectsApi } from '../../services/projectService';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export default function useAllProjects() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const { data, isLoading } = useQuery({
    queryKey: ['all-projects', queryObject],
    queryFn: () => getAllProjectsApi(search),
  });

  const { projects } = data || {};
  return { isLoading, projects };
}
