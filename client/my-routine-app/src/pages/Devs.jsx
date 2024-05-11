import React from 'react';
import image from '../components/images/img.jpeg';
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

function Devs() {
  return (
    <div>
      <h1 className='text-center text-blue-900 bg-white font-bold text-5xl pt-4'>Credits</h1>
      <div className='m-8'>
        <h2 className='flex text-blue-900 bg-white font-bold text-3xl mx-14 mb-8'>Developers</h2>
        <div className='grid grid-cols-2 gap-3 ml-14 text-white'>
            <div className='flex items-center text-lg font-semibold mb-8 px-8 py-6 bg-blue-500 max-w-96 rounded-xl hover:bg-blue-600'>
                <img src={image} alt='img' className='h-24 w-24 rounded-full mr-5'></img>
                <div>
                    <h3>Triasish Ghosh</h3>
                    <h3 className='flex items-center'><IoIosMail className='mr-2' />mail@gmail.com</h3>
                    <div className='flex my-1.5'>
                        <a href='/' className='mr-4'><IoLogoLinkedin /></a>
                        <a href='/'><IoLogoGithub /></a>
                    </div>
                </div>
            </div>
            <div className='flex items-center text-lg font-semibold mb-8 px-8 py-6 bg-blue-500 max-w-96 rounded-xl hover:bg-blue-600'>
                <img src={image} alt='img' className='h-24 w-24 rounded-full mr-5'></img>
                <div>
                    <h3>Shirsasish Sarkar</h3>
                    <h3 className='flex items-center'><IoIosMail className='mr-2' />mail@gmail.com</h3>
                    <div className='flex my-1.5'>
                        <a href='/' className='mr-4'><IoLogoLinkedin /></a>
                        <a href='/'><IoLogoGithub /></a>
                    </div>
                </div>
            </div>
            <div className='flex items-center text-lg font-semibold mb-8 px-8 py-6 bg-blue-500 max-w-96 rounded-xl hover:bg-blue-600'>
                <img src={image} alt='img' className='h-24 w-24 rounded-full mr-5'></img>
                <div>
                    <h3>Dipanjan Das</h3>
                    <h3 className='flex items-center'><IoIosMail className='mr-2' />mail@gmail.com</h3>
                    <div className='flex my-1.5'>
                        <a href='/' className='mr-4'><IoLogoLinkedin /></a>
                        <a href='/'><IoLogoGithub /></a>
                    </div>
                </div>
            </div>
            <div className='flex items-center text-lg font-semibold mb-8 px-8 py-6 bg-blue-500 max-w-96 rounded-xl hover:bg-blue-600'>
                <img src={image} alt='img' className='h-24 w-24 rounded-full mr-5'></img>
                <div>
                    <h3>Rishav Mandal</h3>
                    <h3 className='flex items-center'><IoIosMail className='mr-2' />mail@gmail.com</h3>
                    <div className='flex my-1.5'>
                        <a href='/' className='mr-4'><IoLogoLinkedin /></a>
                        <a href='/'><IoLogoGithub /></a>
                    </div>
                </div>
            </div>
        </div>
        <h2 className='flex text-blue-900 bg-white font-bold text-3xl mx-14 mb-8'>Mentor</h2>
        <div className='flex items-center text-white text-lg font-semibold ml-14 mb-8 px-8 py-6 bg-blue-500 max-w-96 rounded-xl  hover:bg-blue-600'>
            <img src={image} alt='img' className='h-24 w-24 rounded-full mr-5'></img>
            <div>
                <h3>Mr. Swapan Shakhari</h3>
                <h3 className='flex items-center'><IoIosMail className='mr-2' />mail@gmail.com</h3>
                <div className='flex my-1.5'>
                    <a href='/' className='mr-4'><IoLogoLinkedin /></a>
                    <a href='/'><IoLogoGithub /></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Devs
