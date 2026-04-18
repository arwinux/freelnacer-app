import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addCategoryApi } from '../../services/categoryService';

export default function useAddCategory() {
  const queryClient = useQueryClient();

  const { mutate: addCategory, isPending: isAddingCategory } = useMutation({
    mutationFn: addCategoryApi,
    
    onSuccess: () => {
      toast.success('Category successfully added');
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
  });

  return { addCategory, isAddingCategory };
}
