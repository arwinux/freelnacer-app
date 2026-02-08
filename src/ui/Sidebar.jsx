import { LuSparkles } from "react-icons/lu";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { useEffect } from "react";
import { LogoutSideBarBtn } from "./LogoutBtn";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const sidebarVariants = {
  hidden: {
    x: -320,
    opacity: 0.9
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 28,
      mass: 0.9
    }
  },
  exit: {
    x: -320,
    opacity: 0.9,
    transition: {
      duration: 0.22,
      ease: "easeInOut"
    }
  }
};

function Sidebar({ isNavOpen, setIsNavOpen, children }) {

  // Responsive auto open desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsNavOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsNavOpen]);

  // Prevent body scroll when open (mobile feel premium)
  useEffect(() => {
    if (isNavOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isNavOpen]);

  // ESC close support
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") setIsNavOpen(false);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [setIsNavOpen]);

  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="
            fixed inset-0 z-40
            bg-black/30 backdrop-blur-md
            lg:bg-transparent lg:relative lg:w-72
          "
          onClick={() => setIsNavOpen(false)}
        >
          <motion.aside
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="
              w-72 h-screen
              flex flex-col justify-between
              bg-component/95 backdrop-blur-xl
              shadow-2xl p-6 overflow-y-auto
              border-r border-white/5
              will-change-transform
            "
          >
            {/* Header */}
            <div className="flex gap-x-3 items-center w-full">
              <div className="bg-radial-back text-color p-3 rounded-2xl">
                <LuSparkles className="size-6 animate-bounce" />
              </div>

              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <p className="text-xl font-bold radial-text">
                    FreelanceHub
                  </p>

                  <button
                    onClick={() => setIsNavOpen(false)}
                    className="
                      text-color rounded-full p-1
                      hover:scale-110 transition-transform
                    "
                  >
                    <AiTwotoneCloseCircle className="size-5" />
                  </button>
                </div>

                <p className="text-sm font-semibold text-subtitle">
                  Premium Edition
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-1 justify-between mt-14 w-full flex-col">
              <ul className="flex flex-col gap-y-2">
                <li className="text-subtitle/85 ml-1 mb-4 text-[14px] font-bold">
                  NAVIGATION
                </li>
                {children}
              </ul>

              <LogoutSideBarBtn />
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
