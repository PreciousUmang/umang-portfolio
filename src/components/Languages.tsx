import { motion } from 'framer-motion';
import { CircularProgress, Box, Typography } from '@mui/material';
import { languages } from '../utils/languages';
import { useEffect, useState } from 'react';
import useInViewAnimation from '../hooks/useInViewAnimation';

const Languages = () => {
  const [progress, setProgress] = useState(
    languages.map(language => language.skills.map(() => 0))
  );

  useEffect(() => {
    const updateProgress = () => {
      setProgress(prevProgress =>
        prevProgress.map((langProgress, langIndex) =>
          langProgress.map((skillProgress, skillIndex) => {
            const targetLevel = languages[langIndex].skills[skillIndex].level;
            return skillProgress < targetLevel ? skillProgress + 2 : skillProgress;
          })
        )
      );
    };

    const interval = setInterval(updateProgress, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='my-8 px-8'>
        <div className='flex justify-between items-center'>
          <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
          <div className='border-[1px] mt-[-2px] mr-4 w-full'></div>
          <h2 className='font-bold text-[24px]'>Languages</h2>
          <div className='border-[1px] mt-[-2px] ml-4 w-full'></div>
          <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          className='flex md:flex-row flex-col items-center w-full'
        >
          {languages.map((language, langIndex) => {
            const animationProps = useInViewAnimation(
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0 },
              { duration: 0.5, delay: langIndex * 0.2 }
            );

            return (
              <motion.div
                key={language.name}
                className='flex flex-col items-center mt-6 px-6 w-full'
                {...animationProps}
              >
                <h2 className='font-semibold text-xl'>{language.name}</h2>
                <div className='flex flex-wrap justify-center items-center w-full'>
                  <div className='flex flex-col items-center mx-4 mt-4'>
                    <Box className='inline-flex relative mt-4'>
                      <CircularProgress
                        variant="determinate"
                        value={progress[langIndex][0]}
                        size={100}
                        thickness={1}
                        sx={{ color: language.skills[0].color }}
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography>
                          {`${progress[langIndex][0]}%`}
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  )
}

export default Languages;
