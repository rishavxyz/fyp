import React from 'react'
const zipUrl = 'http://localhost:3000/Relevent_excel_files.zip'

function Instructions() {
  const downloadZip = (url) => {
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', 'Relevent_excel_files.zip');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  
  return (
    <div>
      <h1 className='text-center text-blue-900 bg-white font-bold text-5xl pt-4'>Instructions</h1>
      <button onClick={() => {downloadZip(zipUrl)}} className='px-3 py-2 text-2xl font-semibold rounded-xl bg-blue-500 text-white hover:bg-blue-600'>Download Routine</button>
    </div>
  )
}

export default Instructions
