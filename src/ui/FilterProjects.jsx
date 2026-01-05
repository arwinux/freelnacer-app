import { LuCircleCheckBig, LuLayers3, LuLock } from "react-icons/lu";
import { motion } from "framer-motion";

const tabs = [
  { id: "allproject", label: "All Projects", icon: LuLayers3 },
  { id: "OPEN", label: "Open", icon: LuCircleCheckBig },
  { id: "CLOSED", label: "Closed", icon: LuLock },
];

function FilterProjects({ status, setStatus, counts }) {
  return (
    <div className="flex flex-col gap-y-2 mb-7">
      <ul className="relative w-full flex flex-col sm:flex-row gap-5 p-2 rounded-xl items-center justify-center bg-component shadow-md shadow-component-400/40">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = status === id;

          return (
            <button
              key={id}
              onClick={() => setStatus(id)}
              className="relative flex-1 text-xl flex justify-center items-center gap-x-2 py-4 font-semibold w-full rounded-xl z-10"
            >
              {/* Animated background */}
              {isActive && (
                <motion.div
                  layoutId="active-filter"
                  className={`
                    absolute inset-0 rounded-xl
                    ${
                      id === "allproject"
                        ? "bg-linear-to-r from-blue-500 to-purple-600"
                        : id === "OPEN"
                        ? "bg-linear-to-r from-green-500 to-teal-600"
                        : "bg-linear-to-r from-red-500 to-primary-500"
                    }
                  `}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              {/* Content */}
              <span
                className={`relative flex items-center gap-x-2 ${
                  isActive ? "text-color" : "text-title"
                }`}
              >
                <Icon />
                {label}
                <div className="relative flex justify-center items-center">
                  <div
                    className={`relative size-7 rounded-full ${
                      isActive ? "bg-filter" : "bg-gray-500/25"
                    }`}
                  ></div>
                  <span
                    className={`absolute text-[16px] font-bold ${
                      isActive ? "text-color" : "text-title"
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
      <div className="flex"></div>
    </div>
  );
}

export default FilterProjects;
