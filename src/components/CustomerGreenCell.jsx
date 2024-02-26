import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
function CustomerGreenCell() {
  const [rating,setRating]=useState(0);
  const handleRatingClick=(num)=>{
     if(rating<5 && num===1)setRating(rating+1);
     else if(rating>0 && num===0)setRating(rating-1);
  }
  return (
    <div className="bg-gradient-to-tr from-white to-green-400  h-screen flex justify-center items-center p-10">
        <div className="flex flex-col justify-center items-center align-middle w-[75%] h-[80%] bg-white rounded-md shadow-sm shadow-gray-300">
           <h2 className="text-3xl font-bold text-green-500 mb-4 mt-7">Customer Feedback</h2>
           <div className="border-2 w-10 border-green-500 inline-block mb-3"></div>
           <p className='text-gray-400 text-xl font-medium'>Your insights drive our growth. Share your experience.</p>
           <div className='w-full flex flex-col  mt-5 justify-evenly items-center h-[75%]'>
           <textarea
              placeholder="Enter Your Message"
              className=" w-1/2 h-[150px] bg-gray-200 p-2 flex flex-row items-center mr-4 mb-2  rounded-md outline-none"
            />
            <div className='flex gap-2'>
            {Array.from({ length: rating }).map((_, index) => (
              <FaStar  className='text-yellow-500 text-3xl' onClick={()=>handleRatingClick(0)}/>
            ))}
            {Array.from({ length: 5-rating }).map((_, index) => (
              <FaRegStar  onClick={()=>handleRatingClick(1)} className='text-yellow-500 text-3xl'/>
            ))}
            </div>
            <button
              type="submit"
              className="border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2"
            >
              Submit Feedback
            </button>
           </div>
        </div>
    </div>
  )
}

export default CustomerGreenCell