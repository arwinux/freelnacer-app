import { LuCircleCheckBig, LuLayers3, LuLock } from 'react-icons/lu';
import { motion } from 'framer-motion';
import FilterDropDown from './FilterDropDown';
import { FiFilter } from 'react-icons/fi';
import useCategories from '../features/categories/useCategories';
import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo } from 'react';

const TABS = [
  { id: 'All_Project', label: 'All Projects', icon: LuLayers3 },
  { id: 'Open', label: 'Open', icon: LuCircleCheckBig },
  { id: 'Closed', label: 'Closed', icon: LuLock },
];

function FilterProjects({ status, setStatus, counts }) {
  const { transformedCategories } = useCategories();

  const [searchParams, setSearchParams] = useSearchParams();

  const urlStatus = searchParams.get('status') || 'All_Project';
  const urlCategory = searchParams.get('category') || 'All';


  useEffect(() => {
    if (urlStatus !== status) {
      setStatus(urlStatus);
    }
  }, [urlStatus]);

  const updateParams = useCallback(
    (key, value) => {
      const newParams = new URLSearchParams(searchParams);

      newParams.set(key, value);

      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  /* ---------- CLICK HANDLER ---------- */

  const handleStatusClick = useCallback(
    (newStatus) => {
      setStatus(newStatus);

      updateParams('status', newStatus);
    },
    [setStatus, updateParams],
  );

  const categoryOptions = useMemo(
    () => [{ value: 'All', label: 'All categories' }, ...transformedCategories],
    [transformedCategories],
  );

  return (
    <div className='flex flex-col gap-y-6 mb-7'>
      <ul className='relative w-full flex flex-col sm:flex-row gap-5 p-2 rounded-xl items-center justify-center bg-component shadow-md shadow-component-400/40'>
        {TABS.map(({ id, label, icon: Icon }) => {
          const isActive = status === id;

          return (
            <button
              key={id}
              onClick={() => handleStatusClick(id)}
              className='relative flex-1 text-xl flex justify-center items-center gap-x-2 py-4 font-semibold w-full rounded-xl z-10'
            >
              {isActive && (
                <motion.div
                  layoutId='active-filter'
                  className={`
                    absolute inset-0 rounded-xl
                    ${
                      id === 'All_Project'
                        ? 'bg-linear-to-r from-blue-500 to-purple-600'
                        : id === 'Open'
                          ? 'bg-linear-to-r from-green-500 to-teal-600'
                          : 'bg-linear-to-r from-red-500 to-primary-500'
                    }
                  `}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span
                className={`relative flex items-center gap-x-2 ${
                  isActive ? 'text-color' : 'text-title'
                }`}
              >
                <Icon />
                {label}

                <div className='relative flex justify-center items-center'>
                  <div
                    className={`relative size-7 rounded-full ${
                      isActive ? 'bg-filter' : 'bg-gray-500/25'
                    }`}
                  />
                  <span
                    className={`absolute text-[16px] font-bold ${
                      isActive ? 'text-color' : 'text-title'
                    }`}
                  >
                    {counts?.[id] ?? 0}
                  </span>
                </div>
              </span>
            </button>
          );
        })}
      </ul>

      <div className='flex items-center gap-x-2 justify-end xl:justify-between'>
        <div className='hidden xl:flex gap-x-2 justify-center items-center'>
          <FiFilter className='text-gray-600' />

          <span className='font-medium text-gray-600'>Filtered by:</span>

          <div className='flex gap-x-2'>
            <span className='font-semibold text-title'>{status}</span>

            <span className='text-blue-500 font-bold text-xl'>|</span>

            <span className='font-semibold text-title'>{urlCategory}</span>
          </div>
        </div>

        <FilterDropDown filterField='category' options={categoryOptions} />
      </div>
    </div>
  );
}

export default FilterProjects;
