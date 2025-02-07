import img from '../../assets/img/pile-books-pencils-desk.jpg'

const Qualification = () => {
  return (
    <div className="md:px-10 py-6">

<div className='text-center '>
    <h2 className='md:text-5xl text-3xl font-bold'>
     Educational Qualification
    </h2>
    <img className='mx-auto md:w-[480px] my-4' src="https://i.ibb.co.com/HfZj6ctH/divider-Cc-YM6e-To.png" alt="" />
  </div>
  <div
  className="bg-cover bg-center md:my-10 md:h-[440px] md:mx-12 md:px-10 max-sm:p-6 flex items-center justify-center text-white  "
  style={{
    backgroundImage: `url('${img}')`,
  }}
>

  <div className='bg-slate-900 rounded-lg text-center px-12 space-y-4  py-6 md:mx-12'>

    <h2 className='text-4xl font-bold text-fuchsia-600 '>Bachelor of English</h2>
    <h5 className='text-xl font-bold'>National University Of Bangladesh</h5>
    <p>2020-Present</p>


    <p >My Department fosters critical thinking, creativity, and a deep appreciation for literature and language. It empowers students to analyze, interpret, and express ideas effectively. Through words, we explore culture, history, and human experiences.</p>

  </div>
 
</div>


      
    </div>
  );
};

export default Qualification;