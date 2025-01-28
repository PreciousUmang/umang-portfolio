import { skills } from '../utils/skills';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 2.5 }}
          className='gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-16'
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center mt-8'
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <skill.logo className='mb-2 text-4xl' />
              <h2 className='font-semibold text-xl'>{skill.name}</h2>
              <div className='relative mt-2 w-16 h-16'>
                {inView && (
                  <CircularProgressbar
                    value={skill.proficiency}
                    text={`${skill.proficiency}%`}
                    styles={buildStyles({
                      pathColor: '#4caf50',
                      textColor: '#000',
                      trailColor: '#ffffff',
                      pathTransitionDuration: 1.4
                    })}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
