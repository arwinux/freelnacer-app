import { useQuery } from '@tanstack/react-query';
import { getAllProjectsApi } from '../../services/projectService';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import projectCounts from '../../utils/projectCounts';

export default function useAllProjectsCounts() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  delete queryObject.status;
  const cleanedSearch = queryString.stringify(queryObject);

  const { data, isLoading } = useQuery({
    queryKey: ['all-projects-counts', queryObject],
    queryFn: () => getAllProjectsApi(cleanedSearch ? `?${cleanedSearch}` : ''),
  });

  const { projects } = data || {};
  const projectsCounts = projectCounts(projects);
  return { isLoading, projectsCounts };
}
