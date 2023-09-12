// Dependencies
import React from 'react';

// Components
import { Button } from '../../../components/common/Button';
import { MainLayout } from '../../../components/layouts/MainLayout';
import { Carousel } from '../../../components/common/Carousel';

// Types
import { BUTTON_VARIANTS } from '../../../components/common/Button/types';


// Export page
const HomePage = () => {
  console.log('-------')
  const links = [
    {
      img: "/images/general/image4.png",
      title: "Ernest Achiever",
      note: "MY27",
      spec: "Foundation Brakes",
      avatar: "/images/avatars/Erick.png",
      role: "Project Owner"
    },
    {
      img: "/images/general/image5.png",
      title: "Ernest Achiever",
      note: "MY27",
      spec: "Foundation Brakes",
      avatar: "/images/avatars/Erick.png",
      role: "Project Owner"
    },
    {
      img: "/images/general/image7.png",
      title: "Ernest Achiever",
      note: "MY27",
      spec: "Foundation Brakes",
      avatar: "/images/avatars/Erick.png",
      role: "Project Owner"
    },
    {
      img: "/images/general/image8.png",
      title: "Ernest Achiever",
      note: "MY27",
      spec: "Foundation Brakes",
      avatar: "/images/avatars/Erick.png",
      role: "Project Owner"
    },
  ];

  return (
    <MainLayout>
      <div className="pt-20 container px-5 pb-[100px]" >
        <div className="sm:bg-[url('../public/images/general/home-back.png')] sm:bg-contain bg-no-repeat sm:flex gap-8">
          <div className='sm:w-[310px] rounded-xl bg-white py-5 px-8 sm:mt-[114px] sm:ml-[33px] card-shadow'>
            <img src="/images/avatars/Erick.png" alt="" className='rounded-full mx-auto' width={190} height={190} />
            <p className='font-spartan font-semibold text-2xl text-primary text-center my-2 '>Shishir UX UI</p>
            <p className='text-secondary text-xl font-normal text-center my-2'>Senior Brake Engineer
              Foundation Brakes,
              Chassis Systems</p>
            <div className='pt-8 font-spartan'>
              <p className='text-secondary text-xl font-semibold text-center my-2'>Active Projects</p>
              <p className='text-primary text-[32px] font-bold text-center my-2'>10</p>
            </div>
            <div className=' font-spartan'>
              <p className='text-secondary text-xl font-semibold text-center my-2'>Tasks Completed
                Last Week</p>
              <p className='text-primary text-[32px] font-bold text-center my-2'>23</p>
            </div>
            <Button
              className={'bg-border text-primary font-spartan text-lg mx-auto py-3 font-medium mt-3'}
              variant={BUTTON_VARIANTS.CONTAINED}
              label={'Settings'}
              type='submit'
              icon={<img src="/images/icons/ep_setting.svg" alt={'settings'} />}
            />
            <p className='mt-4 text-sm font-semibold text-secondary text-center' >Member Since Mar 15,2023</p>
          </div>
          <div className='pt-10 sm:pt-0 mt-auto flex-1'>
            <p className='text-2xl text-primary font-bold mb-6'>Quick Links</p>
            <div className='pr-16 relative'>
              <Carousel className='flex-1 w-0 -ml-3' align={'start'} loop>
                {
                  [...links, ...links].map((link: any, index: number) => (
                    <div key={`link-${index}`} className='p-3 min-w-[325px]'>
                      <div className='rounded-xl p-2 bg-white shadow-md w-[1/2] md:w-[1/3] lg:w-[1/4] ' key={index}>
                      <img src={link?.img} alt="" width={300} height={200} className='rounded-2xl' />
                      <div className='border-b-border border-b-[1px]'>
                        <p className='text-[22px] text-primary font-extrabold mt-2'>{link?.title}
                        </p>
                        <p className='text-secondary text-md font-bold pt-0 mb-5'>{link?.note}</p>
                      </div>
                      <p className='pt-3 text-lightBlue font-semibold text-lg font-spartan'>{link?.spec}</p>
                      <div className='rounded-md bg-border p-2 flex items-center mt-2'>
                        <img src={link?.avatar} alt="" width={36} height={36} />
                        <span className='ml-2 text-primary font-spartan text-lg font-medium'>{link?.role}</span>
                      </div>
                    </div>
                    </div>

                  ))
                }
              </Carousel>
            </div>
          </div>
        </div>
      </div>

    </MainLayout>
  )
};

export default HomePage;
