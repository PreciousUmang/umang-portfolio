import { useRef, MutableRefObject } from 'react';
import { useInView, MotionProps } from 'framer-motion';

const useInViewAnimation = (
  initial: MotionProps['initial'],
  animate: MotionProps['animate'],
  transition: MotionProps['transition']
): {
  ref: MutableRefObject<null>;
  initial: MotionProps['initial'];
  animate: MotionProps['animate'];
  transition: MotionProps['transition'];
  inView: boolean;
} => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return {
    ref,
    initial,
    animate: inView ? animate : initial,
    transition,
    inView,
  };
};

export default useInViewAnimation;
