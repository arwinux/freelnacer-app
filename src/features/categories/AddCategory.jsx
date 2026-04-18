import {
  TextAreaCreateProject,
  TextFieldCreateProject,
} from '../../ui/TextFieldCreateProject';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import useAddCategory from './useAddCategory';
import useUpdateCategory from './useUpdateCategory';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RHFSelect from '../../ui/RHFSelect';

function AddCategory({
  showCategoryForm,
  setShowCategory,
  isEditMode,
  categoryToEdit,
}) {
  const { addCategory: onAddCategory, isAddingCategory } = useAddCategory();
  const { updateCategory, isUpdateCategory } = useUpdateCategory();
  const navigate = useNavigate();

  const typeOptions = isEditMode
    ? [
        { value: 'comment', label: 'Comment' },
        { value: 'post', label: 'Post' },
        { value: 'ticket', label: 'Ticket' },
      ]
    : [
        { value: 'project', label: 'Project' },
        { value: 'comment', label: 'Comment' },
        { value: 'post', label: 'Post' },
        { value: 'ticket', label: 'Ticket' },
      ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      title: '',
      englishTitle: '',
      description: '',
      type: 'project',
    },
  });

  // Populate form when editing
  useEffect(() => {
    if (isEditMode && categoryToEdit) {
      setValue('title', categoryToEdit.label || '');
      setValue('englishTitle', categoryToEdit.englishTitle || '');
      setValue('description', categoryToEdit.description || '');
      setValue('type', categoryToEdit.type || '');
    }
  }, [isEditMode, categoryToEdit, setValue]);

  const onSubmit = (data) => {
    const categoryData = {
      title: data.title,
      englishTitle: data.englishTitle,
      type: data.type,
      description: data.description,
    };

    if (isEditMode && categoryToEdit) {
      updateCategory(
        {
          categoryId: categoryToEdit.value,
          categoryData,
        },
        {
          onSuccess: () => {
            reset();
            setShowCategory(false);
            navigate('/admin/manage-categories');
          },
        },
      );
    } else {
      onAddCategory(categoryData, {
        onSuccess: () => {
          reset();
          setShowCategory(false);
        },
      });
    }
  };

  const handleCancel = () => {
    reset();
    setShowCategory(false);
    if (isEditMode) {
      navigate('/admin/manage-categories');
    }
  };

  const isProcessing = isAddingCategory || isUpdateCategory;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
        className='w-full bg-component rounded-xl shadow-xl shadow-black/15 scroll-auto'
      >
        <div className='text-title text-xl font-bold border-b p-6 border-gray-300 pb-2'>
          {isEditMode ? 'Edit Category' : 'Add Category'}
        </div>

        <div className='w-full flex flex-col justify-center gap-y-8 px-6 mt-4'>
          <div className='flex gap-y-4 flex-wrap sm:flex-nowrap w-full justify-between items-center gap-x-6'>
            <TextFieldCreateProject
              name='title'
              label='Title'
              placeholder='e.g., Web Development'
              register={register}
              required={true}
              validationSchema={{
                required: 'Title is required',
                minLength: {
                  value: 3, // Changed from 10 to 3 (more reasonable)
                  message: 'Title must be at least 3 characters',
                },
                maxLength: {
                  value: 60,
                  message: 'Keep it under 60 characters',
                },
              }}
              errors={errors}
            />

            <TextFieldCreateProject
              name='englishTitle'
              label='English Title'
              placeholder='e.g., web-development'
              register={register}
              required={true}
              validationSchema={{
                required: 'English title is required',
                minLength: {
                  value: 3,
                  message: 'Title must be at least 3 characters',
                },
                maxLength: {
                  value: 60,
                  message: 'Keep it under 60 characters',
                },
              }}
              errors={errors}
            />

            <RHFSelect
              name='type'
              label='Type'
              placeholder='Select a Type'
              register={register}
              required={true}
              options={typeOptions}
            />
          </div>

          <TextAreaCreateProject
            name='description'
            label='Description'
            placeholder='Describe your category in detail...'
            classname='h-24'
            register={register}
            required={true}
            validationSchema={{
              required: 'Description is required',
              minLength: {
                value: 10, // Changed from 30 to 10
                message: 'At least 10 characters',
              },
              maxLength: {
                value: 500, // Increased from 200
                message: 'Max 500 characters',
              },
            }}
            errors={errors}
          />
        </div>

        <div className='inline-flex px-6 flex-col-reverse sm:flex-row gap-y-2 py-6 justify-center gap-x-5'>
          <button
            type='button'
            onClick={handleCancel}
            disabled={isProcessing}
            className='inline secondary-btn py-2 font-medium text-md disabled:opacity-50'
          >
            Cancel
          </button>

          <button
            type='submit'
            disabled={isProcessing}
            className='inline primary-btn py-2 font-bold text-md disabled:opacity-50'
          >
            {isProcessing
              ? isEditMode
                ? 'Updating...'
                : 'Creating...'
              : isEditMode
                ? 'Update Category'
                : 'Create Category'}
          </button>
        </div>
      </motion.div>
    </form>
  );
}

export default AddCategory;
