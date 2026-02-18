import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function CustomNavlink({ children, to }) {
  const [isHovered, setIsHovered] = useState(false);

  const navLinkActive =
    'transition-all h-8 duration-300 bg-primary-500/10 text-md rounded-xl border-l-4 border-primary-500 text-primary-600 font-medium flex items-center gap-x-2 px-2 w-60 py-1.5';

  const navLinkNotActive =
    'transition-all h-8 duration-300 rounded-xl text-subtitle font-medium border-l-4 border-transparent flex items-center gap-x-2 px-2 w-60 py-1.5 transition-all duration-200';

  const navLinkHover =
    'transition-all h-8 duration-300 rounded-xl text-subtitle font-medium border-l-4 border-primary-500 flex items-center ml-2 gap-x-2 px-2 w-60 py-1.5 bg-primary-500/5 transition-all duration-200';

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? navLinkActive : isHovered ? navLinkHover : navLinkNotActive
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavlink;
