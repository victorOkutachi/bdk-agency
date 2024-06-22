
import React, {useState} from 'react'
import {AiOutlineClose, } from 'react-icons/ai'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import { listItems } from '../data'


const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
        
    }

  return (
    <div className='flex w-full h-12 items-center justify-between p-10 bg-white  shadow-sm'>
        <div>
            
            <img alt='CCIN' src='images/bdklogo.png' className='h-20 cursor-pointer '/>
            
       
        </div>
       
        

        <ul className='hidden grid-cols-5 col-span-4 items-center md:flex '>
            {listItems.map(item=>(
            <ui className='px-2 text-[8px]'><li to={item.path} className='text-[14px] text-[#00008b] font-medium uppercase tracking-widest cursor-pointer relative group'>{item.desc}
            <div className='absolute w-full h-0.5 bg-[#00008b] scale-x-0 group-hover:scale-x-100 transition-transform'></div>
            </li></ui>))}
          
        </ul>
     
        <div onClick={handleMenu} className='block md:hidden z-10'>
             {menu ? <AiOutlineClose color='black' size={20} /> : <HiOutlineMenuAlt2 size={20}/>}     
        </div>
        <div className={menu ? 'absolute left-0 top-0 w-full h-screen flex flex-col items-center justify-center bg-white ease-in-out duration-500 text-[#ff822e]' : 'fixed left-[-100%]'}>
        <div>
            
            <img src='images/bdklogo.png' className=' absolute top-5 left-10 h-20 cursor-pointer '/>
            
        
        </div>
                <ul className='uppercase p-4'>
                    
                    <li className='py-2 text-xl font-medium'>Home</li>
                    <li className='py-2 text-xl font-medium'>Services</li>
                    
                    <li className='py-2 text-xl  font-medium'>Contact Us</li>
                    
                </ul>
            </div>
    </div>
  )
}

export default Navbar
