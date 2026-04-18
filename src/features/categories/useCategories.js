import { useQuery } from '@tanstack/react-query';
import { getCategoryApi } from '../../services/categoryService';

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategoryApi,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item,index) => ({
    label: item.title,
    englishTitle:item.englishTitle,
    description:item.description,
    type:item.type,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    description:item.description,
    type:item.type,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}
