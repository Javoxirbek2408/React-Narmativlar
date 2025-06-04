import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'

export const Header = () => {
    return (
        <header>
            <div className='w-full h-8 bg-black flex  justify-between items-center px-4'>
                <div className='ml-[445px] h-full flex items-center gap-3 justify-center'>
                    <p className='text-white text-sm leading-[21px] font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <Link to={'/'} className=' text-white text-sm leading-6 tracking-[0%] text-center underline decoration-solid decoration-[0%] font-poppins font-semibold'>ShopNow</Link>
                </div>
                <select className='font-normal text-sm leading-[21px] mr-[136px] bg-black  backdrop:blur-xl  text-white outline-none'>
                    <option value="">English

                    </option>
                    <option className='font-normal text-sm leading-[21px] tracking-[0%] text-white' value="">Russian
                    </option>
                    <option className='font-normal text-sm leading-[21px] tracking-[0%] text-white' value="">Uzbek
                    </option>
                </select>
            </div>
            <Navbar />
        </header>
    )
}
