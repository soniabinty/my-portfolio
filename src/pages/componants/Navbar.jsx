

import { Link } from 'react-router-dom';
import github from '../../assets/img/icons8-github-24 (1).png'
import linkedin from '../../assets/img/icons8-linkedin-48 (2).png'
const Navbar = () => {


  const links = <>
   <li><Link className='uppercase'>About me</Link></li>
   <li><Link className='uppercase'>skills</Link></li>
   <li><Link className='uppercase'>projects</Link></li>
   <li><Link className='uppercase'>blog</Link></li>
   <li><Link className='uppercase'>contact me</Link></li>
  </>
  return (
    <div className="navbar md:px-12 z-50 fixed opacity-70 font-semibold  text-white bg-black">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {links}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {links}
      
      </ul>
    </div>
    <div className="navbar-end flex gap-4">
      <a className="">
     <img className='w-10   border-2' src={linkedin} alt="" />
    
      </a>
      <a className="">
    <img className='w-10   border-2' src={github} alt="" />
    
      </a>
    </div>
  </div>
  );
};

export default Navbar;