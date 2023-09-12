import {FC} from 'react'
import { Link } from 'react-router-dom'


export const VerificationDonePage: FC = () => {

  return (
    <div className='w-screen h-screen bg-[#DDEBF7] flex sm:items-center items-start justify-center overflow-y-auto'>
      <div className='max-w-[500px] text-center'>

      Congratulations on your successful registration and verification on AlphaWave! We are delighted to welcome you to our community and wish you the best on your journey to new opportunities.

      You are now part of our friendly team and ready to dive into the world of innovation and growth. AlphaWave provides unique tools and resources to help you bring your creative ideas to life.

      We are confident that your contribution will be valued and make our community even stronger. Feel free to ask questions, share your knowledge, and find inspiration among us.

      Should you have any questions or need assistance, do not hesitate to reach out to our support team. We are always here to help you achieve your goals and successes.

      Best wishes,
      The AlphaWave Team
<br></br>
<Link to="/login" className='text-blue'><span className='text-blue'>Login</span></Link>
      </div>
    </div>
  )
}