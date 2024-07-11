import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill, RiInstagramFill, RiFacebookFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div id='contact' className='flex w-full items-center font-Lato justify-center bg-[#f19a60] text-white'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center mx-auto py-2'>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-bold my-3'>
                  Stay Social
                </p>
                <p className='text-xl font-medium my-3'>
                  Follow Us On Instagram
                </p>
              </div>
            
             
            
                
            </div>
            <a href='https://instagram.com/cancer_naija?igshid=MzRIODBiNWFIZA==' target={'_blank'} >
              <RiInstagramFill className='mx-3 hover:scale-125 duration-300' size={35}/>
              </a>
            <span className='flex items-center text-[12px] mt-5 md:text-xs font-medium mb-3'><AiOutlineCopyright/>2024 by Blessed Don-Kate</span>
        </div>
    </div>
  )
}

export default Footer