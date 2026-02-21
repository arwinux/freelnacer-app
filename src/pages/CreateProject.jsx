import { LuRocket } from 'react-icons/lu';
import { useForm } from 'react-hook-form';
import {
  TextAreaCreateProject,
  TextFieldCreateProject,
} from '../ui/TextFieldCreateProject';
import RHFSelect from '../ui/RHFSelect';
import Tags from '@yaireo/tagify/react'; // React-wrapper file
import { useRef, useState } from 'react';
import DatePickerField from '../ui/DatePickerField';
import useCategories from '../features/categories/useCategories';
import useCreateProject from '../features/projects/useCreateProject';
import useNavigateClientProject from '../hooks/useNavigateClientProjects';
import Loading from '../ui/Loading';
import { useLocation } from 'react-router-dom';
import useEditProject from '../features/projects/useEditProject ';
import PageHeader from '../ui/PageHeader';
import queryString from 'query-string';

function CreateProject() {
  const navigateClientProjects = useNavigateClientProject();

  const projectToEdit = useLocation().state?.projctToEdit || {};
  const { _id: editId } = projectToEdit;
  const isEditMode = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};

  if (isEditMode) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ''));
  const { categories } = useCategories();
  const { createProject, isCreating } = useCreateProject();
  const { editProject, isEditing } = useEditProject();
  const tagifyRef = useRef(null);

  const onTagChange = (e) => {
    const parsed = JSON.parse(e.detail.value);
    setTags(parsed.map((t) => t.value));
  };

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditMode) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            navigateClientProjects();
            reset();
          },
        },
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          navigateClientProjects();
          reset();
        },
      });
    }
  };

  return (
    <div className='flex mt-12 justify-center items-center flex-col w-full page-set'>
      <PageHeader
        badge={isEditMode ? 'Edit Project' : 'New Project'}
        title={isEditMode ? 'Update Project' : 'Create Project'}
        description={'Describe your project and find the perfect freelancer'}
        color='orange'
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full bg-color max-w-3xl rounded-xl shadow-lg scroll-auto'
        action=''
      >
        <div className='text-title text-2xl font-bold border-b p-6 border-gray-300 pb-2'>
          Project Details
        </div>

        <div className='w-full flex flex-col justify-center gap-y-8 px-6 mt-4'>
          <TextFieldCreateProject
            name='title'
            label='Project Title'
            placeholder='e.g., Build a React Dashboard'
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

          <TextAreaCreateProject
            name='description'
            label='Description'
            placeholder='Describe your project in detail...'
            classname='h-24'
            register={register}
            required={true}
            validationSchema={{
              required: 'title is required',
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
          ></TextAreaCreateProject>

          <RHFSelect
            name='category'
            label='Cateogry'
            placeholder='Select a category'
            register={register}
            required={true}
            options={categories}
          />

          <div>
            <label className='mb-2 text-title flex items-center text-sm font-medium gap-x-2'>
              Tags
            </label>
            <Tags
              className='w-full input-form flex bg-inputs! text-title placeholder-subtitle!'
              tagifyRef={tagifyRef}
              settings={{
                maxTags: 10,
              }}
              onChange={onTagChange}
              value={tags.map((tag) => ({ value: tag }))}
            />
          </div>

          <div className='flex flex-wrap sm:flex-nowrap w-full justify-between items-center gap-x-6'>
            <TextFieldCreateProject
              name='budget'
              label='Budget ($)'
              placeholder='e.g., 5000'
              classname='flex-1 h-12 '
              type='number'
              register={register}
              required={true}
              validationSchema={{
                required: 'Budget is required',
              }}
              errors={errors}
            />
            <DatePickerField
              date={date}
              setDate={setDate}
              required={true}
              label='Deadline'
              className='flex-1 w-full h-12'
            />
          </div>
        </div>

        <div className='flex w-full flex-col-reverse sm:flex-row px-6 gap-y-2 py-6 justify-center items-center gap-x-5'>
          <button
            type='button'
            onClick={useNavigateClientProject()}
            className='secondary-btn flex-1 w-full py-2 font-medium text-lg'
          >
            Cancel
          </button>

          <button
            type='submit'
            className='primary-btn flex-1 w-full py-2 font-medium text-lg'
          >
            {isEditMode ? 'Update Project' : 'Create Project'}
            {isEditMode ? (
              isEditing ? (
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
  );
}

export default CreateProject;
