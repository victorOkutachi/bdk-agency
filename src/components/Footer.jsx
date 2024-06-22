import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill, RiInstagramFill, RiFacebookFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='flex w-full items-center font-Lato justify-center bg-[#f19a60] text-white'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center mx-auto py-2'>
              <a href='https://instagram.com/cancer_naija?igshid=MzRIODBiNWFIZA==' target={'_blank'} >
              <RiInstagramFill className='mx-3 hover:scale-125 duration-300' size={25}/>
              </a>
              <a href='https://twitter.com/cancer_ng?s=11&t=kz-KbJvD9rv0EzOT_sO4PQ' target={'_blank'} >
              <RiFacebookFill className='mx-3 hover:scale-125 duration-300' size={25}/>
              </a> 
                
            </div>
            <ul className='items-center flex text-[10px] space-x-2 my-1'>
              <li>Contact Us</li>
              <li>Home</li>
            </ul>
            <span className='flex items-center text-[8px] md:text-xs font-medium mb-2'><AiOutlineCopyright/>2023 by Blessed Don-Kate</span>
        </div>
    </div>
  )
}

export default Footer