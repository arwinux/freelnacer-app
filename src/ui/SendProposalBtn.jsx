import { LuClock2, LuSend } from 'react-icons/lu';
import useUser from '../features/authentication/useUser';
import { Link } from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';
import {
  TextAreaCreateProposal,
  TextFieldCreateProposal,
} from './TextFieldCreateProposal';
import { useForm } from 'react-hook-form';
import Loading from './Loading';
import useNavigateClientProject from '../hooks/useNavigateClientProjects';
import { useState } from 'react';
import useCreateProposal from '../features/proposals/useCreateProposal';

function SendProposalBtn({ projectId, project, isProposalSubmited }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitting, setSubmitting] = useState(false);

  const handleSubmitting = () => {
    setSubmitting(!submitting);
  };

  const { createProposal, isCreating } = useCreateProposal();

  const onSubmitForm = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onclose(),
      },
    );
  };

  // Check if project is OPEN first
  if (project.status === 'OPEN') {
    return (
      <div>
        {isProposalSubmited ? (
          <div className='items-center bg-blue-500/10 border border-blue-200 rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3'>
            <LuClock2 className='w-6 h-6  text-blue-700' />
            <span className='text-blue-700 font-medium  sm:text-sm md:text-base'>
              You have already submitted a proposal for this project
            </span>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSubmitting}
              className={`${
                submitting ? 'hidden' : 'inline-flex'
              } hover:scale-105 transition-all duration-300 items-center gap-x-3 bg-radial-back px-4 py-3 rounded-xl text-component font-bold text-lg`}
            >
              <LuSend />
              <span>Submit Proposal</span>
            </button>

            <div
              className={`${submitting === true ? 'flex flex-col' : 'hidden'} p-5 mt-2 orange-container-proposal overflow-hidden bg-component shadow-lg shadow-title-400/45`}
            >
              <p className='text-title font-bold text-xl md:text-2xl xl:text-3xl mb-7'>
                Submit your Proposal
              </p>
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <TextAreaCreateProposal
                  name='description'
                  label='Proposal Description'
                  placeholder="Describe how you'll complete this project"
                  classname='h-24'
                  register={register}
                  required={true}
                  validationSchema={{
                    required: 'proposal description is required',
                    minLength: {
                      value: 30,
                      message: 'At least 30 characters',
                    },
                    maxLength: {
                      value: 200,
                      message: 'Max 200 characters',
                    },
                  }}
                  errors={errors}
                />

                <div className='flex flex-wrap sm:flex-nowrap mt-5 w-full justify-between items-center gap-x-6'>
                  <TextFieldCreateProposal
                    name='price'
                    label='Your Price ($)'
                    placeholder='e.g., 3000'
                    classname='flex-1 h-12 '
                    type='number'
                    register={register}
                    required={true}
                    validationSchema={{
                      required: 'Budget is required',
                    }}
                    errors={errors}
                  />

                  <TextFieldCreateProposal
                    name='duration'
                    label='Duration (days)'
                    placeholder='e.g., 30'
                    classname='flex-1 h-12 '
                    type='number'
                    register={register}
                    required={true}
                    validationSchema={{
                      required: 'Budget is required',
                    }}
                    errors={errors}
                  />
                </div>

                <div className='inline-flex flex-col-reverse sm:flex-row gap-y-2 py-6 justify-center  gap-x-5'>
                  <button
                    type='button'
                    onClick={handleSubmitting}
                    className='inline secondary-btn py-2 font-semibold text-lg'
                  >
                    Cancel
                  </button>

                  <button
                    type='submit'
                    className='inline primary-btn py-2 font-bold text-lg'
                  >
                    Create Proposal
                    {isCreating ? (
                      isCreating ? (
                        <Loading />
                      ) : (
                        ''
                      )
                    ) : isCreating ? (
                      <Loading />
                    ) : (
                      ''
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Project is NOT OPEN (CLOSED, IN_PROGRESS, etc.)
  if (isProposalSubmited) {
    // Closed + proposal submitted
    return (
      <div className='items-center bg-primary-500/10 border border-primary-200 rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3'>
        <MdLockOutline className='w-6 h-6  text-primary-700' />
        <span className='text-primary-700 font-medium  sm:text-sm md:text-base'>
          Project is no longer open. Your proposal has been submitted and is on
          file
        </span>
      </div>
    );
  }

  // Closed + no proposal submitted
  return (
    <div className='items-center bg-red-500/10 border border-red-200 rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3'>
      <MdLockOutline className='w-6 h-6  text-red-700' />
      <span className='text-red-700 font-medium  sm:text-sm md:text-base'>
        This project is closed and not accepting new proposals
      </span>
    </div>
  );
}
export default SendProposalBtn;
