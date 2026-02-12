import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createProposalApi } from '../../services/proposalService';

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { mutate: createProposal, isPending: isCreating } = useMutation({
    mutationFn: createProposalApi,

    onSuccess: () => {
      toast.success('Proposal successfully added');
      queryClient.invalidateQueries({
        queryKey: ['proposals'],
      });
      queryClient.invalidateQueries({
        queryKey: ['project'],
      });
    },
  });

  return { isCreating, createProposal };
}
