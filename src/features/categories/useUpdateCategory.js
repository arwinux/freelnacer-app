import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCategoryApi } from '../../services/categoryService';
import toast from 'react-hot-toast';

export default function useUpdateCategory() {
  const queryClient = useQueryClient();

  const { mutate: updateCategory, isPending: isUpdateCategory } = useMutation({
    mutationFn: ({ categoryId, categoryData }) => {
      console.log('📥 Mutation received:', { categoryId, categoryData });

      const validTypes = ['project', 'comment', 'post', 'ticket'];
      if (!validTypes.includes(categoryData.type)) {
        console.error('Invalid type:', categoryData.type);
        throw new Error(`Type must be one of: ${validTypes.join(', ')}`);
      }

      const cleanId = String(categoryId).trim();

      return updateCategoryApi(cleanId, categoryData);
    },
    onSuccess: (data) => {
      console.log('✅ Update success:', data);
      toast.success('Category updated successfully');
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
  });

  return { updateCategory, isUpdateCategory };
}
