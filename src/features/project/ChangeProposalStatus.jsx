import RHFSelect from '../../ui/RHFSelect';
import { useForm } from 'react-hook-form';
import useChangeProposalStatus from './useChangeProposalStatus';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../ui/Loading';

function ChangeProposalStatus({
  proposalId,
  proposalClient,
  onClose,
  disabled,
}) {
  const { projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();

  const options = [
    { label: 'Accept', value: 2 },
    { label: 'Pending', value: 1 },
    { label: 'Decline', value: 0 },
  ];

  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    console.log(data);
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ['project'], projectId });
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-y-6">
      {/* Title + Message */}
      <div className="flex flex-col gap-y-2">
        <p className="text-base font-medium">
          Change proposal status for client{' '}
          <span className="font-semibold text-blue-600">{proposalClient}</span>
        </p>

        <p className="text-sm bg-gray-100 text-subtitle px-3 py-2 rounded-lg">
          # Select the new status below.
        </p>
      </div>

      {/* Form Select */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
        <RHFSelect
          name="status"
          label="Set status"
          register={register}
          required
          options={options}
        />

        {/* Buttons */}
        <div className="flex justify-end gap-x-3">
          <button
            type="button"
            onClick={onClose}
            disabled={disabled}
            className="px-4 py-2 rounded-lg border text-subtitle hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-color hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isUpdating ? <Loading /> : 'Confirm'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
