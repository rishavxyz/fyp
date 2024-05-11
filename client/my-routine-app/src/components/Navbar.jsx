import React, {Link} from "react";
// import {Link} from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <div className='flex bg-blue-800 text-white px-8 py-4 justify-between items-center sticky top-0'>
      <h1 className='mr-8 font-bold text-xl'><a href="/">Routine Creation System</a></h1>
      <ul className='flex text-lg'>
        <li className='mr-8'><a href="/" className="hover:underline">Home</a></li>
        <li className='mr-8'><a href="/instructions" className="hover:underline">Instructions</a></li>
        <li className='mr-8'><a href="/display" className="hover:underline">Display</a></li>
        <li><a href="/developers" className="hover:underline">Developers</a></li>
      </ul>
    </div>
  )
}

export default Navbar
