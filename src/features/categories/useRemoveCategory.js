import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCategoryApi } from '../../services/categoryService';
import toast from 'react-hot-toast';

export default function useRemoveCategory() {
  const queryClient = useQueryClient();

  const { mutate: removeCategory, isPending: isRemoveCategory } = useMutation({
    mutationFn: deleteCategoryApi,
    onSuccess: () => {
      toast.success('Category successfully deleted');

      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { removeCategory, isRemoveCategory };
}
