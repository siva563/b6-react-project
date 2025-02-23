import React from 'react';
import Logo from "../Images/Logo.jpg";
import Lens from "../Images/Lens.png";
import person from "../Images/person.jpg"
import Exit from "../Images/Exit.jpg"

const Navbar = () => {
  return (
    <div className='flex items-center text-xs font-semibold text-gray-700 p-4 shadow-1g '>
      <img src={Logo} className='w-18 h-12 ml-5' alt="Logo"/>
      <h1 className='ml-5'>Men</h1>
      <h1 className='ml-6'>Women</h1>
      <h1 className='ml-6'>Kids</h1>
      <h1 className='ml-6'>Home & Living</h1>
      <h1 className='ml-6'>Beauty</h1>
      <h1 className='ml-12'>Studio</h1>
      <div className='border border-gray-100 flex items-center bg-gray-100  w-96 h-10 ml-14'>
        <img src={Lens} className='h-3 w-3 ml-4'/>
        <input  className="bg-gray-50  text-gray-900  font-normal text-sm rounded-lg  block w-full p-2.5 "placeholder="Search For products" required />
      </div>
      <div className='ml-6 text-xs'>
      <img src={person}  className='w-5 h-5 ml-2'/>
      <h1>
        Login
      </h1>
      </div>
      <div className='ml-6 text-xs'>
      <img src={Exit}  className='w-5 h-5 ml-2'/>
      <h1>
        Logout
      </h1>
      </div>
    </div>
  );
};

export default Navbar;
