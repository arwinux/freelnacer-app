import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useChangeProposalStatus from '../features/project/useChangeProposalStatus';
import Loading from './Loading';
import RHFSelect from './RHFSelect';
import useChangeUserStatus from '../features/users/useChangeUserStatus';

const options = [
  { label: 'Accept', value: 2 },
  { label: 'Pending', value: 1 },
  { label: 'Decline', value: 0 },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeUserStatus } = useChangeUserStatus();

  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data }, // {userId, data: {status:0, 1, 2}}
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ['users'] });
        },
      },
    );
  };

  return (
    <div className='flex flex-col gap-y-6'>
      {/* Form Select */}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-6'>
        <RHFSelect
          name='status'
          label='Set status'
          register={register}
          required
          options={options}
        />

        {/* Buttons */}
        <div className='flex justify-end gap-x-3'>
          <button
            type='submit'
            className='px-4 py-2 rounded-lg bg-blue-600 text-color hover:bg-blue-700 transition disabled:opacity-50'
          >
            {isUpdating ? <Loading /> : 'Confirm'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangeUserStatus;
