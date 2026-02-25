import { IoIosAdd } from 'react-icons/io';
import AddCategory from '../ui/AddCategory';
import { useState } from 'react';
import Category from '../ui/Category';
import useCategories from '../features/categories/useCategories';
import LoadingPage from '../ui/LoadingPage';
import { AnimatePresence } from 'framer-motion';

function ManageCategories() {
  const [showCategoryForm, setShowCategory] = useState(false);
  const {
    categories,
    isLoading: categoryIsLoading,
    transformedCategories,
  } = useCategories();
  console.log(categories);

  const onSubmitSowCateogry = () => {
    setShowCategory(!showCategoryForm);
  };

  return (
    <div className='flex page-set flex-col gap-y-8 mt-12'>
      <div className='flex flex-col gap-y-4 sm:flex-row justify-between items-center'>
        <div className='flex gap-y-2 flex-col justify-center items-center sm:items-start'>
          <p className='text-title font-bold text-3xl '>Manage Categories</p>
          <p className='text-subtitle'>Organize your marketplace</p>
        </div>

        <button
          onClick={onSubmitSowCateogry}
          className='flex justify-center items-center gap-x-2 bg-radial-back rounded-xl text-color font-bold py-2 px-6'
          type='button'
        >
          <IoIosAdd className='size-6 font-bold' />
          <span>Add Category</span>
        </button>
      </div>

      <AnimatePresence mode='wait'>
        {showCategoryForm && (
          <AddCategory
            showCategoryForm={showCategoryForm}
            setShowCategory={setShowCategory}
            key='category-form'
          />
        )}
      </AnimatePresence>

      {categoryIsLoading ? (
        <LoadingPage />
      ) : (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4 gap-x-8 gap-y-12'>
          {categories.map((item, index) => (
            <Category
              title={item.label}
              titleEnglish={item.englishTitle}
              description={item.description}
              type={item.type}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageCategories;
