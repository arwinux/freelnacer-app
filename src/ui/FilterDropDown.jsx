import { Flex, Select } from '@radix-ui/themes';
import { useSearchParams } from 'react-router-dom';

function FilterDropDown({ options, filterField, icon, defaultVaue }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || defaultVaue;

  function handleChange(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  // Find the selected option label
  const selectedOption = options.find((opt) => opt.value === filterValue);
  const displayLabel = selectedOption?.label || '';

  return (
    <Flex className='w-full sm:w-64'>
      <Select.Root value={filterValue} onValueChange={handleChange}>
        <Select.Trigger className='w-full pl-6 sm:w-64 h-12 text-title'>
          <Flex as='span' align='center' gap='2'>
            {icon}
            <span>{displayLabel}</span>
          </Flex>
        </Select.Trigger>

        <Select.Content position='popper'>
          {options.map((opt) => (
            <Select.Item key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Flex>
  );
}
export default FilterDropDown;
