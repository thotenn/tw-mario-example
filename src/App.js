import React from 'react';
import Arrow from './cmp/Arrow';
import { Header } from './cmp/Header/Header';
import env from './env';




function Button({title='Watch the trailer'}) {
  return (<a href='#' className='text-xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl xl:text-2xl hover:border-gray-400 hover:text-black hover:bg-white transition duration-200 group'>
    {title}
    <Arrow extraClass={'transition-all group-hover:border-red-500 xl:group-hover:ml-4'} />
  </a>);
}


function CardVideo({ videoSrc, title }) {
  return (<div className="card text-center bg-white mx-auto mt-16 rounded-2xl overflow-hidden xl:w-4/5 2xl:w-5/6">
    <div className="bg-black">
      <video src={videoSrc} autoPlay loop muted></video>
    </div>
    <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
      <h3 className='font-black text-4xl py-10'>{title}</h3>
      <p className='text-xl'>Work with your friends and family*</p>
      <Button />
    </div>
    <div className="dots flex justify-between p-4">
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </div>);
}


export const App = () => {
  return (
    <div className='w-full xsm:w-[1268px] mx-auto'>
      <Header
        menu={env.header.menu}
        logosrc={env.header.logo.src}
        logoalt={env.header.logo.alt}
        banner={env.header.banner.src}
      />
      <section>
        <div className='bg-wave-pattern h-6 relative -top-2'></div>
        <div className='bg-wave-pattern-dots text-center p-4 flex flex-col md:flex-row gap-3 justify-center'>
          <a href='#' className='inline-block py-3 px-16 bg-black text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-400 hover:bg-white hover:text-black transition duration-200'>
            Buy Now
          </a>
          <a href='#' className='inline-block py-3 px-16 bg-red-500 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-400 hover:bg-white hover:text-black transition duration-200'>
            Watch the Trailer
          </a>
        </div>
        <div className='bg-wave-pattern bg-repeat-x h-6 relative top-2'></div>
      </section>
      <section className='bg-pattern-characters-red py-28'>
        <div className='mx-auto p-3 md:flex gap-5 md:w-full lg:container 2xl:w-2/5'>
          <div className="left bg-character-mario bg-no-repeat bg-contain bg-top w-5/6 pt-52 mx-auto md:w-1/2">
            <CardVideo videoSrc='assets/videos/video01.mp4' title='Play Together' />
          </div>
          <div className="right w-5/6 md:w-1/2 text-center mx-auto">
            <h2 className="font-black text-white text-6xl py-8">Available now</h2>
            <p className="font-bold text-white text-2xl mx-auto py-10 w-4/5">
              Team up for a paws-itively adorable adventures
            </p>
            <p className="text-white mx-auto w-4/5">
              Team up for a paws-itively adorable adventures
            </p>
            <CardVideo videoSrc='assets/videos/video02.mp4' title='Explore' />
          </div>
        </div>
        <div className="footer text-center flex justify-center gap-9 pt-10">
          <img src="assets/img/coin.gif" alt="coin" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]' />
          <img src="assets/img/coin.gif" alt="coin" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]' />
          <img src="assets/img/coin.gif" alt="coin" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]' />
          <img src="assets/img/coin.gif" alt="coin" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block' />
          <img src="assets/img/coin.gif" alt="coin" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block' />
          <img src="assets/img/coin.gif" alt="coin" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block' />
        </div>
      </section>

      <section className='bg-yellow-dots'>
        <div className="bg-wave-pink bg-repeat-x h-6 relative -top-4"></div>

        <div className="xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6">
          <div className="left xl:w-1/3 lg:w-1/2 p-5">
            <h3 className="text-yellow font-black xsm:text-3xl sm:text-4xl">
              Cat <br />Cat <br />Cat <br />
            </h3>
            <p className="py-4 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nostrum. Dicta nam</p>
            <p>
              <a href="#" className='text-xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl xl:text-2xl hover:border-gray-400 hover:text-black hover:bg-white transition duration-200 group'>
                Meow! <Arrow extraClass={'transition-all group-hover:border-red-500 xl:group-hover:ml-4'} />
              </a>
            </p>
          </div>
          <div className="right xl:w-2/3 lg:w-1/2">
            <img src="assets/img/activity_img3.png" className='md:w-full' alt="" />
          </div>
        </div>
      </section>
      <section className='bg-black'>
        <div className="bg-wave-pattern bg-repeat-x h-6 relative -top-4"></div>
        <div className="container mx-auto text-center py-10 w-2/3">
          <div className="pb-5">
            Customer Support
            <Button />
          </div>
          <div className="text-white">
            <p className='py-2'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel doloremque officiis, repellat odit dolores quibusdam quae, quo deserunt excepturi nihil delectus quas deleniti earum error magni totam dicta, quaerat sapiente?
            </p>
            <p className='py-2'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <p className='py-2'>
              Lorem ipsum dolor sit
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
