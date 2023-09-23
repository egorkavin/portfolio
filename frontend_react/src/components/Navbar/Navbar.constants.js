const transition = { duration: 0.4, ease: 'easeOut' };

export const menuVariants = {
  initial: {
    x: '100%',
  },
  enter: {
    x: '0%',
    transition,
  },
  exit: {
    x: '100%',
    transition,
  },
};
