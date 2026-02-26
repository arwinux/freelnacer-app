import {
  TextAreaCreateProject,
  TextFieldCreateProject,
} from '../../ui/TextFieldCreateProject';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import useAddCategory from './useAddCategory';

function AddCategory({ showCategoryForm, setShowCategory }) {
  const { addCategory: onAddCategory, isAddingCategory } = useAddCategory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('FORM DATA:', data);
    const categoryData = {
      title: data.title,
      englishTitle: data.englishTitle,
      type: 'project',
      description: data.description,
    };
    onAddCategory(categoryData, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
        className='w-full bg-component rounded-xl shadow-xl shadow-black/15 scroll-auto'
      >
        <div className='text-title text-xl font-bold border-b p-6 border-gray-300 pb-2'>
          Add Category
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
                required: 'title is required',
                minLength: {
                  value: 10,
                  message: 'Title must be at least 10 characters',
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
          </div>

          <TextAreaCreateProject
            name='description'
            label='Description'
            placeholder='Describe your category in detail...'
            classname='h-24'
            register={register}
            required={true}
            validationSchema={{
              required: 'description is required',
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
        </div>

        <div className='inline-flex px-6 flex-col-reverse sm:flex-row gap-y-2 py-6 justify-center gap-x-5'>
          <button
            type='button'
            onClick={() => setShowCategory(false)}
            className='inline secondary-btn py-2 font-medium text-md'
          >
            Cancel
          </button>

          <button
            type='submit'
            className='inline primary-btn py-2 font-bold text-md'
          >
            Create Category
          </button>
        </div>
      </motion.div>
    </form>
  );
}

export default AddCategory;
