import React from 'react';
// import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <header className='py-24 text-center text-blue-900 bg-white'>
        <h1 className='font-extrabold text-7xl'>Welcome To Our</h1>
        <h2 className='text-blue-800 font-bold text-5xl mt-3'>Automated Academic Routine Creation System</h2>
      </header>
      <body className='bg-blue-700 text-white text-center'>
        <div className='py-24 text-3xl font-bold'>
          <p>It is an Online Tool which will create you fabulous⭐ and time saving💯 Academic Routines</p>
          <p>which will benefit both the Faculties👨🏻‍🏫 and the Students👨🏻‍🎓</p>
          <p className='pt-5'>Yes we think for everyone 🥰</p>
        </div>
        <div className='pb-24 text-2xl font-bold'>
          <p>We will take a few DATA📋 from you and create you the Routine.</p>
          <p className='pt-5'>Haha! don't be scared we won't steal your Data, cause we won't store it 😝</p>
        </div>
        <div className='pb-24 text-3xl font-bold'>
          <h3 className='text-4xl text-red-500 font-extrabold'>But! But! But!</h3>
          <p className='pt-4'>Before moving forward I would suggest you to go through our <a href='/instructions' className='text-red-400 hover:underline'>INSTRUCTIONS</a>.</p>
          <p className='pt-5'>I know Instructions are boring, but those are useful too.</p>
        </div>
        <div className='pb-24 text-3xl font-bold'>
            <p>Did you read our <a href='/instructions' className='text-red-400 hover:underline'>Instructions</a>?</p>
            <p className='pt-5'>If YES✅ then click the button below👇🏼</p>
            <button className='mt-7 px-3 py-2 rounded-lg bg-white text-blue-800 hover:bg-slate-200'><a href='/form'>Generate Routine</a></button>
        </div>
      </body>
    </div>
  )
}

export default Home
