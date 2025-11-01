import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CustomNavlink({ children, to }) {
  const [isHovered, setIsHovered] = useState(false);

  const navLinkActive =
    "transition-all duration-300 bg-orange-500/10 text-sm rounded-xl border-l-4 border-orange-500 text-[#ff7300] font-semibold flex items-center gap-x-2 px-2 w-60 py-2";

  const navLinkNotActive =
    "transition-all duration-300 rounded-xl text-zinc-500 text-sm font-semibold border-l-4 border-transparent flex items-center gap-x-2 px-2 w-60 py-2 transition-all duration-200";

  const navLinkHover =
    "transition-all duration-300 rounded-xl text-zinc-500 text-sm font-semibold border-l-4 border-orange-500 flex items-center gap-x-2 px-2 w-60 py-2 bg-orange-500/5 transition-all duration-200";

  return (
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
  );
}

export default CustomNavlink;
