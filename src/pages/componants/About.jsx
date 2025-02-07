import img from '../../assets/img/profile.jpg'

const About = () => {
  return (
<div className='my-8 '>

  
  <div className='text-center'>
    <h2 className='md:text-5xl text-3xl font-bold'>
      More About Me
    </h2>
    <img className='mx-auto md:w-[440px] my-4' src="https://i.ibb.co.com/HfZj6ctH/divider-Cc-YM6e-To.png" alt="" />
  </div>
    <div className=" md:px-12 px-6 md:flex">

     <div className='md:w-1/3 md:p-12'>
     <img className='md:w-[400px] w-[350px]  shadow-2xl shadow-fuchsia-500 mt-5 rounded-tr-4xl rounded-bl-4xl  border-6 bg-slate-900  border-fuchsia-600' src={img} alt="" />
     </div>
     <div className='md:w-2/3 md:p-12 max-sm:py-6 space-y-2'>

  <div className='text-fuchsia-600 space-y-4'>
  <h2 className='md:text-5xl text-3xl font-bold uppercase'>
        hello, I’m   </h2>
        <h3 className='md:text-4xl text-3xl font-bold mb-3'> ______Sonia Naznin Binty,</h3>
  </div>
     
    
      <p>

     A skilled Frontend React Developer with a strong foundation in the MERN stack and a passion for crafting seamless, responsive web applications. My expertise lies in transforming ideas into intuitive, high-performance user interfaces using React.js, Tailwind CSS, and modern design frameworks.
 </p>

<p>
Beyond coding, I have a deep love for literature as I am currently pursuing my studies in the English department. Reading and analyzing texts help me think critically, which also enhances my problem-solving abilities in development. When I’m not immersed in code or books, you’ll likely find me exploring creative design trends, learning new technologies, or enjoying a good story through films and novels.

   </p>  

   <p>I also apprecite:</p>

   <p className='font-bold'>______Code is like poetry; it has to be short, elegant, and make an impact.</p>

     </div>
      
    </div>
</div>
  
  );
};

export default About;