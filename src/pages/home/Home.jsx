import React from 'react'
import { Link } from 'react-router-dom'
// import { Navbar } from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <div className='w-full h-8 bg-black flex  justify-between items-center px-4'>
                <div className='ml-[445px] h-full flex items-center gap-3 justify-center'>
                    <p className='text-white text-sm leading-[21px] font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <Link to={'/'} className=' text-white text-sm leading-6 tracking-[0%] text-center underline decoration-solid decoration-[0%] font-poppins font-semibold'>ShopNow</Link>
                </div>
                <select className='font-normal text-sm leading-[21px] mr-[136px] bg-black  backdrop:blur-xl  text-white outline-none'>
                    <option value="">English
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" fill="white" />
                        </svg>
                    </option>
                    <option className='font-normal text-sm leading-[21px] tracking-[0%] text-white' value="">Russian
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" fill="white" />
                        </svg>
                    </option>
                    <option className='font-normal text-sm leading-[21px] tracking-[0%] text-white' value="">Uzbek
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" fill="white" />
                        </svg>
                    </option>
                </select>
            </div>
            
        </div>
    )
}

export default Home
