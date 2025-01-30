import { Variants } from 'framer-motion';

const useServiceAnimation = (type: number): Variants => {
  const baseAnimation = {
    y: [0, -20, 20, -10, 10, 0],
    x: [0, 10, -10, 20, -20, 0],
    rotate: [0, 360],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror' as 'mirror' | 'loop' | 'reverse',
      ease: 'easeInOut'
    }
  };

  switch (type) {
    case 1:
      return {
        animate: {
          ...baseAnimation
        }
      };
    case 2:
      return {
        animate: {
          rotate: [0, 360],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
          }
        }
      };
    case 3:
      return {
        animate: {
          scale: [1, 1.5, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }
      };
    case 4:
      return {
        animate: {
          opacity: [1, 0.5, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }
      };
    case 5:
      return {
        animate: {
          x: [0, 50, -50, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }
      };
    case 6:
      return {
        animate: {
          y: [0, -30, 30, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }
      };
    case 7:
      return {
        animate: {
          rotate: [0, -360],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
          }
        }
      };
    case 8:
      return {
        animate: {
          scale: [1, 0.8, 1.2, 1],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }
      };
    case 9:
      return {
        animate: {
          opacity: [1, 0.2, 1],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }
      };
    case 10:
      return {
        animate: {
          x: [0, -30, 30, 0],
          y: [0, 30, -30, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }
      };
    default:
      return {
        animate: {
          ...baseAnimation
        }
      };
  }
};

export default useServiceAnimation;
