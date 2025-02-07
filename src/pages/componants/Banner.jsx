
import { Typewriter } from 'react-simple-typewriter'

import profile from '../../assets/img/binty.png'
import { FaArrowDown } from 'react-icons/fa6';

const Banner = () => {

  const handleType = (count) => {
    // access word count number
    console.log(count)}


  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
  

<div className=' bg-slate-900 min-h-screen  w-full  mx-auto md:pt-12'>
<div className='md:flex items-center md:px-6 lg::px-12 max-sm:p-6  md:mt-12 '>
<div className='flex-1 space-y-4 md:px-12 py-8 max-sm:mt-8 '>

  <h1 className='md:text-3xl text-xl font-bold text-white'>Greetings!</h1>
  <img className='max-sm:w-30' src="https://i.ibb.co.com/HfZj6ctH/divider-Cc-YM6e-To.png" alt="" />
              <h1 style={{  margin: 'auto 0', fontWeight: 'normal' }}>
       <span className='text-3xl md:text-6xl  font-bold text-white'>Sonia  Binty</span> 
        <br />  <span className='text-3xl md:text-5xl text-white font-bold '>I am </span>
        {' '}
        <span className='text-3xl md:text-4xl text-fuchsia-600' style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['React Developer', 'MERN-Stack Developer', 'Front-End Developer', ]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={75}
            deleteSpeed={60}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
            
          />
        </span>
      </h1>
      <p className='text-gray-200 mt-3'>___Crafting immersive web experiences with React, MERN, and modern UI frameworks. Passionate about turning ideas into stunning, high-performance applications that users love</p>


      <div className='flex gap-5'>
<button className=' border-2 p-3 z-10 text-white font-semibold bg-linear-65 from-fuchsia-600 to-pink-500  uppercase flex   items-center'>Resume <FaArrowDown/></button>
        <button className=' border-2 p-3 z-10 text-white font-semibold  bg-transparent uppercase flex  items-center'>
Contact me
        </button>
      </div>
   
      </div>

      <div className='flex-1  mt-3 relative max-sm:mb-6'>
        <div className=' p-4 border-8 rotate-45  border-l-slate-900   shadow-2xl mx-auto shadow-fuchsia-400 border-fuchsia-600 w-[280px] h-[280px]     md:w-[380px] md:h-[380px] rounded-full  '>


<div className='border-fuchsia-400 border-4 mx-auto w-[250px] h-[250px]  md:w-[350px] md:h-[350px] rounded-full '>

</div>
        </div>
 
  <img className=' md:w-[480px] w-[300px] absolute md:-top-6  -top-5' src={profile} alt="" />
 

      </div>
  </div>




</div>

     
  
  );
};

export default Banner;