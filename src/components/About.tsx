import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import aboutMe from '../utils/aboutMe'

function About () {
  return (
    <div className='flex flex-col items-center mt-12 px-44 text-center'>
      <h2 className='font-bold text-[40px]'>{aboutMe.HEADING}</h2>
      <BiSolidQuoteAltLeft className='bg-green-500 my-5 p-3 rounded-full text-[44px] text-white' />
     <h2 className='my-5 text-[14px] text-gray-400'> {aboutMe.CONTENT}</h2>
      <BiSolidQuoteAltRight className='bg-green-500 my-5 p-3 rounded-full text-[44px] text-white' />
    </div>
  )
}

export default About
