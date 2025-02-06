
import { Typewriter } from 'react-simple-typewriter'
import img from '../../assets/img/profileback.jpg'
import profileAnimation from '../../assets/lottie/Animation - 1738801018928.json'
import { FaArrowDown } from 'react-icons/fa6';
import Lottie from 'lottie-react';
const Banner = () => {

  const handleType = (count) => {
    // access word count number
    console.log(count)}


  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div
    className=" hero   text-white bg-cover h-[700px]"
    style={{
    
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>

<div className='z-10 bg-black opacity-70  w-full h-[700px] mx-auto pt-12'>
<div className='md:flex items-center  p-10 mt-12 '>
<div className='flex-1 space-y-4 p-12  '>

  <h1 className='text-3xl font-bold text-white'>Greetings!</h1>
  <img src="https://i.ibb.co.com/HfZj6ctH/divider-Cc-YM6e-To.png" alt="" />
              <h1 style={{  margin: 'auto 0', fontWeight: 'normal' }}>
       <span className='text-6xl  font-bold text-white'>Sonia  Binty</span> 
        <br />  <span className=' text-5xl font-bold '>I am </span>
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

      <div className='flex-1  mt-5'>
 
    <Lottie className='w-[420px] mx-auto pl-8 ' animationData={profileAnimation}  />
 

      </div>
  </div>




</div>

     
      
    </div>
  );
};

export default Banner;