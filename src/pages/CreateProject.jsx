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
function CreateProject() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);
  const tagifyRef = useRef(null);

  const [date, setDate] = useState(new Date());

  const { categories } = useCategories();

  const onTagChange = (e) => {
    const parsed = JSON.parse(e.detail.value);
    setTags(parsed.map((t) => t.value));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div className="flex flex-col mb-5 gap-3 w-full justify-center items-center">
        <div className="flex justify-center items-center gap-x-1 text-green-700 font-semibold text-md px-2 py-1 bg-green-100 border border-green-500/50 rounded-xl">
          <LuRocket />
          <span>New Project</span>
        </div>
        <p className="text-title font-bold text-3xl sm:text-5xl mb-2">
          Create Project
        </p>
        <span className="text-subtitle font-medium">
          Describe your project and find the perfect freelancer
        </span>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-color max-w-3xl rounded-xl shadow-lg scroll-auto"
        action=""
      >
        <div className="text-title text-2xl font-bold border-b p-6 border-gray-300 pb-2">
          Project Details
        </div>

        <div className="w-full flex flex-col justify-center gap-y-8 px-6 mt-4">
          <TextFieldCreateProject
            name="title"
            label="Project Title"
            placeholder="e.g., Build a React Dashboard"
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
            name="description"
            label="Description"
            placeholder="Describe your project in detail..."
            classname="h-24"
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
            name="cateogry"
            label="Cateogry"
            placeholder="Select a category"
            register={register}
            required={true}
            options={categories}
          />

          <div>
            <label className="mb-2 flex items-center text-sm font-medium gap-x-2">
              Tags
            </label>
            <Tags
              className="w-full input-form flex"
              tagifyRef={tagifyRef}
              settings={{
                maxTags: 10,
                placeholder: 'Add a tag',
              }}
              onChange={onTagChange}
            />
          </div>

          <div className="flex flex-wrap sm:flex-nowrap w-full justify-between items-center gap-x-6">
            <TextFieldCreateProject
              name="title"
              label="Budget ($)"
              placeholder="e.g., 5000"
              classname="flex-1 h-12 "
              type="number"
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
              label="Deadline"
              className="flex-1 w-full h-12"
            />
          </div>
        </div>

        <div className="flex w-full flex-col-reverse sm:flex-row px-6 gap-y-2 py-6 justify-center items-center gap-x-5">
          <button
            onClick={console.log(tags)}
            className="secondary-btn flex-1 w-full py-2 font-medium text-lg"
          >
            Cancel
          </button>
          <button
            type=""
            className="primary-btn flex-1 w-full py-2 font-medium text-lg"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;
