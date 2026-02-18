import { LuCircleCheckBig, LuLayers3, LuLock } from 'react-icons/lu';
import { motion } from 'framer-motion';
import FilterDropDown from './FilterDropDown';
import { FiFilter } from 'react-icons/fi';
import useCategories from '../features/categories/useCategories';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MdOutlineCategory } from 'react-icons/md';
import queryString from 'query-string';

const TABS = [
  {
    label: 'All Projects',
    value: 'ALL',
    icon: LuLayers3,
    color: 'from-blue-500 to-purple-600',
  },
  {
    label: 'Open',
    value: 'OPEN',
    icon: LuCircleCheckBig,
    color: 'from-green-500 to-teal-600',
  },
  {
    label: 'Closed',
    value: 'CLOSED',
    icon: LuLock,
    color: 'from-red-500 to-primary-500',
  },
];

const sortOptions = [
  {
    label: 'Sort by (Latest)',
    value: 'latest',
  },
  {
    label: 'Sort by (Earliest)',
    value: 'earliest',
  },
];

function FilterProjects({ counts }) {
  const { transformedCategories } = useCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlStatus = searchParams.get('status') || TABS.at(0).value;

  const handleTabChange = (value) => {
    searchParams.set('status', value);
    setSearchParams(searchParams);
  };

  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  return (
    <div className='flex flex-col gap-y-6 mb-7'>
      {/* Custom Tabs */}
      <div className='flex gap-5 p-2 rounded-xl items-center justify-center bg-component shadow-md shadow-component-400/40'>
        {TABS.map(({ value, label, icon: Icon, color }) => {
          const isActive = value === urlStatus;

          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => handleTabChange(value)}
              className={`
                relative flex-1 flex items-center justify-center gap-2
                px-2 sm:px-4 py-3 rounded-lg font-medium
                transition-all duration-200
                ${isActive ? 'text-white' : 'text-gray-700 hover:bg-gray-300/40'}
              `}
            >
              {isActive && (
                <motion.div
                  layoutId='active-tab'
                  className={`absolute inset-0 rounded-lg bg-linear-to-r ${color}`}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <span className='relative z-10 flex items-center gap-2'>
                <Icon className='hidden sm:inline size-5 text-xl' />
                <span className='hidden sm:inline text-lg'>{label}</span>
                <span className='sm:hidden sm:text-lg '>
                  {label.split(' ')[0]}
                </span>

                {counts?.[value] > 0 && (
                  <span
                    className={`
                    ml-1 px-2 py-0.5 text-xs rounded-full
                    ${isActive ? 'bg-white/20' : 'bg-gray-200'}
                  `}
                  >
                    {counts[value]}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      <div className='flex items-center gap-x-2 justify-end xl:justify-between'>
        <div className='flex items-center gap-x-2 justify-end xl:justify-between'>
          <div className='hidden xl:flex gap-x-2 justify-center items-center'>
            <FiFilter className='text-gray-600' />
            <span className='font-medium text-gray-600'>Filtered by:</span>

            <div className='flex items-center gap-x-2 flex-wrap'>
              {/* Category filter */}
              {queryObject.category && queryObject.category !== 'ALL' && (
                <>
                  <span className='font-medium text-title bg-gray-400 px-2 italic rounded-md'>
                    {queryObject.category}
                  </span>
                  <span className='text-gray-300 font-bold'>|</span>
                </>
              )}

              {/* Sort filter */}
              {queryObject.sort && (
                <>
                  <span className='font-medium text-title bg-gray-400 px-2 italic rounded-md'>
                    {queryObject.sort === 'latest' ? 'Newest' : 'Oldest'}
                  </span>
                  <span className='text-gray-300 font-bold'>|</span>
                </>
              )}

              {/* Status filter - only show if not 'ALL' */}
              {queryObject.status && queryObject.status !== 'ALL' && (
                <span className='font-medium text-title bg-gray-400 px-2 italic rounded-md'>
                  {queryObject.status}
                </span>
              )}

              {/* If no filters are active */}
              {!queryObject.category &&
                !queryObject.sort &&
                (!queryObject.status || queryObject.status === 'ALL') && (
                  <span className='text-gray-500 italic'>
                    No filters applied
                  </span>
                )}
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-end sm:flex w-full sm:w-auto sm:flex-row gap-x-4 gap-y-2'>
          <FilterDropDown
            filterField='sort'
            options={sortOptions}
            icon={<MdOutlineCategory />}
            defaultVaue={'latest'}
          />
          <FilterDropDown
            filterField='category'
            options={[
              {
                value: 'ALL',
                label: 'All categories',
              },
              ...transformedCategories,
            ]}
            icon={<MdOutlineCategory />}
            defaultVaue={'ALL'}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterProjects;
