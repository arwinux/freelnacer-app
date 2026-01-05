import { LuRocket } from 'react-icons/lu';

const COLOR_VARIANTS = {
  green: {
    text: 'text-green-700',
    bg: 'bg-green-100',
    border: 'border-green-500/50',
  },
  blue: {
    text: 'text-blue-700',
    bg: 'bg-blue-100',
    border: 'border-blue-500/50',
  },
  purple: {
    text: 'text-purple-700',
    bg: 'bg-purple-100',
    border: 'border-purple-500/50',
  },
  red: {
    text: 'text-red-700',
    bg: 'bg-red-100',
    border: 'border-red-500/50',
  },
  orange: {
    text: 'text-primary-700',
    bg: 'bg-primary-100',
    border: 'border-primary-500/50',
  },
};

function PageHeader({
  badge,
  title,
  description,
  color = 'green', // default
}) {
  const selectedColor = COLOR_VARIANTS[color] || COLOR_VARIANTS.green;

  return (
    <div className="flex flex-col mb-5 gap-3 w-full justify-center items-center">
      <div
        className={`
          flex justify-center items-center gap-x-1
          font-semibold text-md px-2 py-1 rounded-xl border
          ${selectedColor.text}
          ${selectedColor.bg}
          ${selectedColor.border}
        `}
      >
        <LuRocket />
        <span>{badge}</span>
      </div>

      <p className="text-title font-bold text-3xl sm:text-5xl mb-2">{title}</p>

      <span className="text-subtitle font-medium">{description}</span>
    </div>
  );
}

export default PageHeader;
