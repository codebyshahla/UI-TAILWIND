import React from 'react'
import img from '../../assets/home_page_rocket (1).svg'

function Header() {
  return (
    <div className='w-screen h-screen m-0 p-0'>
        <div className='P-1'>
<ul className='font-bold flex space-x-4'>
    <li>LANDRICK</li>
    <span className='flex-1'></span>
    <li>HOME</li>
<li>LANDING</li>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
<li>PAGES</li>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
<li>CONTACT</li>
    <span className='flex-1'></span>
    <button className='bg-green-500 rounded text-xs w-20 h-8'>Buy Now</button>
</ul>
 </div>
 <div className='flex flex-row'>
 <div className='flex-col m-24 p-8'><h1 className='text-5xl'>Our Creativity Is Yor Success <br /><span className='text-green-500'>Success</span></h1>
 <br />
 <br />
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quas nam voluptate voluptatum repellat sit et <br /> quis aut totam doloremque nostrum cum, nihil, exercitationem temporibus aperiam <br /> molestias sed harum iste culpa.</p>
<div>
    <div className='p-3 flex space-x-4' >
      <button className='bg-blue-600 text-white rounded p-2'>Get Started</button>
      <button className='border-2 border-blue-600  rounded p-1 '>Documentation</button>
    </div>
</div>
 </div>
 <div className='flex items-center justify-center'>
   <img src={img} alt="" className='w-96' /> 
 </div>
 </div>
 <div className='border-t border-black border-b p-5'>
  <ul className='font-bold flex space-x-20 justify-center'>
  
<li className='flex flex-row'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
</svg> Airbnb</li>

    <li className='flex flex-row'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg> Dropbox</li>
<li className='text-xs flex flex-row'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
</svg> Evernote</li>
<li className='text-xs'>Instapage</li>
    <li>Google</li>
    <li>Timeline</li>
  </ul>
 </div>

 </div>
  )
}

export default Header
