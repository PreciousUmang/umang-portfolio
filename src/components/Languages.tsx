import { motion, useInView } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { languages } from '../utils/languages';
import { useEffect, useState, useRef } from 'react';

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
            return skillProgress < targetLevel ? skillProgress + 1 : skillProgress;
          })
        )
      );
    };

    const interval = setInterval(updateProgress, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='my-12 px-12'>
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
          className='flex justify-between items-center mx-16 mt-16'
        >
          {languages.map((language, langIndex) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true });

            return (
              <motion.div
                key={language.name}
                className='mt-8'
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: langIndex * 0.2 }}
              >
                <h2 className='font-semibold text-xl'>{language.name}</h2>
                {language.skills.map((skill, skillIndex) => (
                  <div key={skill.type} className='flex justify-around items-center mt-2 w-full'>
                    <span className='mr-2'>{skill.type}:</span>
                    <div className='relative w-16 h-16'>
                      <CircularProgressbar
                        value={progress[langIndex][skillIndex]}
                        styles={buildStyles({
                          pathColor: skill.color,
                          textColor: '#000',
                          trailColor: '#ffffff'
                        })}
                      />
                      <div className='absolute text-xs' style={{ 
                          top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        {progress[langIndex][skillIndex]}%
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  )
}
export default Languages
