import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { getOneCategoryApi } from '../../services/categoryService';
import { useParams } from 'react-router-dom';

export default function useCategory() {
  const { id } = useParams();

  const { data, isLoading: isLoadingCategory } = useQuery({
    queryKey: ['category', id],
    queryFn: () => getOneCategoryApi(id),
    retry: false,
  });

  const { category } = data || {};

  return { isLoadingCategory, category };
}
