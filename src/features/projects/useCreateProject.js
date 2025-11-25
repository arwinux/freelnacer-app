import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProjectApi } from '../../services/projectService';
import toast from 'react-hot-toast';

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { mutate: createProject, isPending: isCreating } = useMutation({
    mutationFn: createProjectApi,

    onSuccess: () => {
      toast.success('Project successfully deleted.');
      queryClient.invalidateQueries({
        queryKey: ['client-projects'],
      });
    },
  });

  return { isCreating, createProject };
}
