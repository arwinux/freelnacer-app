import { IoIosAdd } from 'react-icons/io';
import AddCategory from '../features/categories/AddCategory';
import { useEffect, useState } from 'react';
import Category from '../ui/Category';
import useCategories from '../features/categories/useCategories';
import LoadingPage from '../ui/LoadingPage';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

function ManageCategories() {
  const [showCategoryForm, setShowCategory] = useState(false);
  const { categories, isLoading: categoryIsLoading } = useCategories();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're in edit mode from URL
  const categoryIdFromUrl = location.pathname.split('/')[3]; // Gets the ID from URL
  const isEditMode = Boolean(categoryIdFromUrl);

  // Find the category to edit if in edit mode
  const categoryToEdit = isEditMode
    ? categories?.find((cat) => cat.value === categoryIdFromUrl)
    : null;

  console.log('Category to edit:', categoryToEdit); // Check what this returns

  console.log(categories)

  // Show form automatically if in edit mode
  useEffect(() => {
    if (isEditMode && categoryToEdit) {
      setShowCategory(true);
    }
  }, [isEditMode, categoryToEdit]);

  const onSubmitShowCategory = () => {
    setShowCategory(!showCategoryForm);
    // Clear URL param when closing form
    if (!showCategoryForm) {
      navigate('/admin/manage-categories');
    }
  };

  return (
    <div className='flex page-set flex-col gap-y-8 mt-12'>
      <div className='flex flex-col gap-y-4 sm:flex-row justify-between items-center'>
        <div className='flex gap-y-2 flex-col justify-center items-center sm:items-start'>
          <p className='text-title font-bold text-3xl '>Manage Categories</p>
          <p className='text-subtitle'>Organize your marketplace</p>
        </div>

        <button
          onClick={onSubmitShowCategory}
          className='flex justify-center items-center gap-x-2 bg-radial-back rounded-xl text-color font-bold py-2 px-6'
          type='button'
        >
          <IoIosAdd className='size-6 font-bold' />
          <span>{isEditMode ? 'Edit Category' : 'Add Category'}</span>
        </button>
      </div>

      <AnimatePresence mode='wait'>
        {showCategoryForm && (
          <AddCategory
            showCategoryForm={showCategoryForm}
            setShowCategory={setShowCategory}
            isEditMode={isEditMode}
            categoryToEdit={categoryToEdit} // Pass the category to edit
            key={isEditMode ? 'edit-category' : 'add-category'}
          />
        )}
      </AnimatePresence>

      {categoryIsLoading ? (
        <LoadingPage />
      ) : (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4 gap-x-8 gap-y-12'>
          {categories?.map((item, index) => (
            <Category
              index={index}
              key={item.value}
              value={item.value}
              title={item.label}
              type={item.type}
              titleEnglish={item.englishTitle}
              description={item.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageCategories;
