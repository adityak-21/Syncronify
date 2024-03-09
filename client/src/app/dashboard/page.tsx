"use client"
import Calendar from '@/components/Calendar/Calendar'
import LocalCarousel from '@/components/Carousel/Carousel';
import Carousel from '@/components/Carousel/Carousel'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

const dashboard = () => {

  
  const [isCreateActive, setIsCreateActive] = useState(false);
  const[allEvents, setAllEvents]=useState([]);

  return (
    <div className='m-5'>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Upcoming Events.</h1>
        <button className='flex gap-2 items-center border-2 border-black rounded-lg p-2 font-semibold' onClick={()=>{}}>Create Event <FaPlus /></button>

        {/* {isCreateActive && 
        <div className={`fixed w-full top-0 left-0 z-10 bg-gray-300/70`}>
          <div className="m-10 p-10 bg-white rounded-xl text-black">
          <div className="absolute top-16 right-16 text-xl rotate-45 cursor-pointer" onClick={handleClick}><FaPlus/></div>
            <h1 className="text-3xl my-5 font-bold">Create Event</h1>
            <form onSubmit={()=>{}} className='flex flex-col gap-5'>
              <h1 className="">Title</h1>
              <input type="text" className='p-2 bg-transparent outline-none border-gray-500/70 border-2 rounded-lg' />
              <h1 className="">Description</h1>
              <input type="text" className='p-2 bg-transparent outline-none border-gray-500/70 border-2 rounded-lg' />
              <h1 className="">Date</h1>
              <div className="flex items-center gap-20">
                <div className="flex items-center gap-10">
                  <h3 className="">From:</h3>
                  <DatePicker
                  className='bg-gray-300 flex border-2 border-gray-500/70 rounded-lg p-1 font-semibold cursor-pointer'
                    selected={fromDateTime}
                    onChange={handleFromDateTime}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeFormat="h:mm aa"
                    timeIntervals={15}
                    timeCaption="Time"
                    calendarClassName=''
                    required
                  />
                </div>
                <div className="flex items-center gap-10">
                  <h3 className="">To:</h3>
                  <DatePicker
                  className='bg-gray-300 flex border-2 border-gray-500/70 rounded-lg p-1 font-semibold cursor-pointer'
                    selected={toDateTime}
                    onChange={handleToDateTime}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeFormat="h:mm aa"
                    timeIntervals={15}
                    timeCaption="Time"
                    calendarClassName=''
                    required
                  />
                </div>
              </div>
              <h1 className="">Location</h1>
              <div className="flex items-center gap-10">
                <input type="" className=' flex-1 p-2 bg-transparent outline-none border-gray-500/70 border-2 rounded-lg' />
                <button className="p-2 flex items-center gap-3 border-2 bg-indigo-700 rounded-lg text-white text-center font-semibold"><p className="p-1">Pick from map</p><FaLocationArrow/></button>  
              </div>
              <h1 className="">Description</h1>
              <input type="text" className='p-2 bg-transparent outline-none border-gray-500/70 border-2 rounded-lg' />
              <div className="flex gap-20 mt-10">
                <button className="bg-indigo-700 hover:bg-white hover:outline-2 hover:outline-indigo-700 hover:outline p-2 text-gray-300 hover:text-indigo-700 rounded-lg flex items-center gap-2 max-w-fit">Create<FaPlus/></button>
                <button className="outline outline-2 outline-indigo-700 text-indigo-700 hover:outline-none hover:bg-indigo-700 p-2 hover:text-gray-300 rounded-lg flex items-center gap-2 max-w-fit" onClick={handleClick}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
        } */}
        
      </div>
      <LocalCarousel/>
      {allEvents.length <0? <p className='p-5 '>You don't have any upcoming events.</p>:
      <div></div>
   }
    </div>
  )
}

export default dashboard