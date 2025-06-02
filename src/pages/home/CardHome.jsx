import React from 'react'
import { NavLink } from 'react-router-dom'

export const CardHome = () => {
    return (
        <div>
            <div className='container flex'>
                <ul className='flex flex-col gap-4 p-4   border-r-2 border-[#B3B3B3]'>
                    <li>
                        <NavLink className={'font-normal flex items-center text-base leading-6 font-popins text-center gap-[51px]'}>Woman’s Fashion <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black" />
                        </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-normal flex items-center text-base leading-6 font-popins text-center gap-[71px]'}>Men’s Fashion<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black" />
                        </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-normal flex items-center text-base leading-6 font-popins text-center'}>Electronics</NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-normal flex items-center text-base leading-6 font-popins text-center'}>Home & Lifestyle</NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-normal flex items-center text-base leading-6 font-popins text-center'}>Medicine</NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-normal flex items-center text-base leading-6 font-popins text-center'}>Sports & Outdoor</NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-normal flex items-center text-base leading-6 font-popins text-center'}>   Baby’s & Toys</NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-normal flex items-center text-base leading-6 font-popins text-center'}>Groceries & Pets</NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-normal flex items-center text-base leading-6 font-popins text-center'}>Health & Beauty</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}
