import { useQuery } from '@tanstack/react-query';
import { getClientProjectsApi } from '../../services/projectService';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import projectCounts from '../../utils/projectCounts';

export default function useClientProjectsCounts() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  queryObject.category === 'ALL' ? delete queryObject.category : ''
  const cleanedSearch = queryString.stringify(queryObject);

  const { data, isLoading } = useQuery({
    queryKey: ['client-projects-counts', queryObject],
    queryFn: () =>
      getClientProjectsApi(cleanedSearch ? `?${cleanedSearch}` : ''),
  });

  const { projects } = data || {};
  const projectsCounts = projectCounts(projects);
  return { isLoading, projectsCounts };
}
