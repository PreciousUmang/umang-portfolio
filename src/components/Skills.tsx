import { skills } from '../utils/skills';
import { LinearProgress, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useInViewAnimation from '../hooks/useInViewAnimation';

const Skills = () => {
  const { ref, initial, animate, transition, inView } = useInViewAnimation(
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0 },
    { duration: 2.5 }
  );
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setProgress(prevProgress =>
          prevProgress.map((value, index) =>
            value < skills[index].proficiency ? value + 1 : value
          )
        );
      }, 20);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <>
      <div className='my-12 px-12'>
        <div className='flex justify-between items-center'>
          <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
          <div className='border-[1px] mt-[-2px] mr-4 w-full'></div>
          <h2 className='font-bold text-[24px]'>Skills</h2>
          <div className='border-[1px] mt-[-2px] ml-4 w-full'></div>
          <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
        </div>

        <motion.div
          ref={ref}
          initial={initial}
          animate={animate}
          transition={transition}
          className='flex flex-wrap justify-center items-center w-full'
        >
          {skills.map((skill, index) => {
            const skillAnimationProps = useInViewAnimation(
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0 },
              { duration: 0.5, delay: index * 0.2 }
            );

            return (
              <motion.div
                key={index}
                className='flex flex-col items-center mt-8 px-4 w-full md:w-1/2 lg:w-1/3'
                {...skillAnimationProps}
              >
                <skill.logo className='mb-2 text-4xl' />
                <h2 className='font-semibold text-xl'>{skill.name}</h2>
                <div className='relative mt-2 w-full'>
                  {inView && (
                    <Box className='flex justify-center items-center w-full'>
                      <Box width="100%" mr={1}>
                        <LinearProgress variant="determinate" value={progress[index]} color='primary' sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#22c55e' }}}/>
                      </Box>
                      <Box minWidth={35}>
                        <Typography variant="body2" color="textSecondary">{`${progress[index]}%`}</Typography>
                      </Box>
                    </Box>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
