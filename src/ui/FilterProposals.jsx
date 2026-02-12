import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BiCircle } from 'react-icons/bi';
import {
  LuChevronDown,
  LuCircle,
  LuCircleCheckBig,
  LuClock,
  LuFilter,
  LuLayers3,
} from 'react-icons/lu';

const tabs = [
  {
    id: 'all',
    label: 'All Proposals',
    icon: LuLayers3,
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: '2',
    label: 'Accepted',
    icon: LuCircleCheckBig,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: '1',
    label: 'Pending',
    icon: LuClock,
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: '0',
    label: 'Rejected',
    icon: LuCircle,
    color: 'from-red-500 to-rose-600',
  },
];

function FilterProposals({ status, setStatus, counts = {} }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const activeTab = tabs.find((t) => t.id === status) || tabs[0];

  return (
    <div className='flex flex-col gap-y-4 mb-7'>
      {/* Desktop View */}
      <ul className='relative w-full flex flex-col md:flex-row gap-5 p-2 rounded-xl items-center justify-center bg-component shadow-md shadow-component-400/40'>
        {tabs.map(({ id, label, icon: Icon, color }) => {
          const isActive = status === id;
          const count = counts[id] ?? 0;

          return (
            <button
              key={id}
              onClick={() => setStatus(id)}
              className='relative flex-1 text-lg flex justify-center items-center gap-x-2 py-4 font-semibold w-full rounded-xl z-10 hover:scale-[1.02] transition-transform'
            >
              {isActive && (
                <motion.div
                  layoutId='active-filter'
                  className={`absolute inset-0 rounded-xl bg-linear-to-r ${color} shadow-md`}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <span
                className={`relative flex items-center gap-x-2 px-3 ${
                  isActive ? 'text-color' : 'text-title'
                }`}
              >
                <Icon className='size-5' />
                {label}
                <div className='relative flex justify-center items-center'>
                  <div
                    className={`relative size-6 rounded-full ${
                      isActive ? 'bg-filter/55' : 'bg-gray-500/25'
                    }`}
                  />
                  <span
                    className={`absolute text-xs font-bold ${
                      isActive ? 'text-color' : 'text-title'
                    }`}
                  >
                    {count}
                  </span>
                </div>
              </span>
            </button>
          );
        })}
      </ul>

      {/* Mobile Dropdown */}

      {/* Active filter indicator */}
      {status !== 'all' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='flex items-center justify-between px-4'
        >
          <div className='flex items-center gap-x-2 text-sm text-subtitle'>
            <LuFilter className='size-4' />
            <span>
              Filtered by:{' '}
              <span className='font-semibold text-title'>
                {activeTab.label}
              </span>
            </span>
          </div>
          <button
            onClick={() => setStatus('all')}
            className='text-xs text-primary-600 hover:text-primary-700 font-medium hover:underline'
          >
            Clear all
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default FilterProposals;
