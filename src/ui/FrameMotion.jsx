import { motion } from 'framer-motion';

function AnimatedListItem({ children, className = '' }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.15 },
        layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedListItem;
