import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation()

    return (
        <div>
            <nav className='container flex items-center pt-12 justify-between '>
                <div className="logo    font-bold text-2xl leading-6 tracking-[3%] font-inter">
                    <h1>
                        Exclusive
                    </h1>
                </div>
                <ul className='flex gap-5'>
                    <li>
                        <NavLink to={"/"} className={"font-normal text-base leading-6 tracking-[0%] text-center font-popins  "}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/conatact"} className={"font-normal text-base leading-6 tracking-[0%] text-center font-popins "}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className={"font-normal text-base leading-6 tracking-[0%] text-center font-popins "}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/sing-ap"} className={"font-normal text-base leading-6 tracking-[0%] text-center font-popins"}>Sign Up</NavLink>
                    </li>
                </ul>
                <div className='flex items-center gap-6' >
                    <div className='bg-[#F5F5F5] flex  w-[243px] h-[38px] gap-2.5 rounded-md pl-5 pr-3 py-[7px] '>
                        <input type="search" placeholder='What are you looking for?' className='font-normal  w-[200px] outline-none text-xs leading-[18px] font-popins' />
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>


                    </div>
                    {
                        location.pathname !== '/about' && (
                            <div className='flex items-center gap-4'>
                                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 5H7L10 22H26" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                            </div>
                        )
                    }

                </div>
            </nav>
            <hr className='mt-4 text-[#B3B3B3]' />
        </div>
    )
}
