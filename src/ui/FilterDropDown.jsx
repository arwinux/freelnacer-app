import { Field, Select } from '@headlessui/react';
import React from 'react';
import { MdOutlineCategory } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterValue = searchParams.get(filterField) || "All";

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Field className='flex justify-center items-center gap-x-2 rounded-xl px-4 text-title  bg-component shadow-md shadow-component-400/40'>
      <MdOutlineCategory className='text-title' />
      <Select
        onChange={handleChange}
        value={filterValue}
        options={options}
        className='py-2 px-2 cursor-pointer'
      >
        {options.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className='bg-component px-2 cursor-pointer'
          >
            {item.label}
          </option>
        ))}
      </Select>
    </Field>
  );
}

export default FilterDropDown;
