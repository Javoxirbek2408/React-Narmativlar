import React from 'react'
import { Link } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import iphone from "../../../assets/img/ipheni-One.png"
import iconIphone from "../../../assets/icon/iphone-icon.svg"


export const CardHome = () => {

    return (
        <div >
            <div className='container flex  gap-11'>
                <ul className='flex flex-col gap-4 pt-10   border-r-2 border-[#B3B3B3]'>
                    <li>
                        <Link className={'font-normal w-[250px] flex items-center text-base leading-6 font-popins text-center gap-[51px] hover:text-[#9d9a9a]'}>Woman’s Fashion <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black" />
                        </svg>
                        </Link>
                    </li>
                    <li>
                        <Link className={'font-normal flex items-center text-base leading-6 font-popins text-center gap-[71px] hover:text-[#9d9a9a]'}>Men’s Fashion<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black" />
                        </svg>
                        </Link>
                    </li>
                    <li>
                        <Link className={'font-normal flex items-center text-base leading-6 font-popins text-center hover:text-[#9d9a9a]'}>Electronics</Link>
                    </li>
                    <li>
                        <Link className={'font-normal flex items-center text-base leading-6 font-popins text-center hover:text-[#9d9a9a]'}>Home & Lifestyle</Link>
                    </li>
                    <li>
                        <Link className={'font-normal flex items-center text-base leading-6 font-popins text-center hover:text-[#9d9a9a]'}>Medicine</Link>
                    </li>
                    <li>
                        <Link className={'font-normal flex items-center text-base leading-6 font-popins text-center hover:text-[#9d9a9a]'}>Sports & Outdoor</Link>
                    </li>
                    <li>
                        <Link className={'font-normal flex items-center text-base leading-6 font-popins text-center hover:text-[#9d9a9a]'}>   Baby’s & Toys</Link>
                    </li>
                    <li>
                        <Link className={'font-normal flex items-center text-base leading-6 font-popins text-center hover:text-[#9d9a9a]'}>Groceries & Pets</Link>
                    </li>
                    <li>
                        <Link className={'font-normal flex items-center text-base leading-6 font-popins text-center hover:text-[#9d9a9a]'}>Health & Beauty</Link>
                    </li>
                </ul>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper bg-black mt-10">
                    <SwiperSlide> <div className='flex  justify-between'>
                        <div className='flex flex-col pt-12 pl-[64px] '>
                            <div className='flex items-center mb-5 gap-4'>
                                <img src={iconIphone} alt="" />
                                <p className=' font-normal text-base leading-6 tracking-[0%] text-center text-white font-popins'>iPhone 14 Series</p>
                            </div>
                            <p className='font-semibold mb-5 text-5xl leading-[60px] tracking-[4%] text-white'>Up to 10% off Voucher</p>
                            <div className='flex gap-2 pb-2 border-b-2 border-b-white w-[110px]'>
                                <Link className='text-white  font-medium text-base leading-6 tracking-[0%] text-center font-popins  '>Shop Now
                                </Link>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <img className='mt-4' src={iphone} alt="" />
                    </div>

                    </SwiperSlide>
                    <SwiperSlide> <div className='flex  justify-between'>
                        <div className='flex flex-col pt-12 pl-[64px] '>
                            <div className='flex items-center mb-5 gap-4'>
                                <img src={iconIphone} alt="" />
                                <p className=' font-normal text-base leading-6 tracking-[0%] text-center text-white font-popins'>iPhone 14 Series</p>
                            </div>
                            <p className='font-semibold mb-5 text-5xl leading-[60px] tracking-[4%] text-white'>Up to 20% off Voucher</p>
                            <div className='flex gap-2 pb-2 border-b-2 border-b-white w-[110px]'>
                                <Link className='text-white  font-medium text-base leading-6 tracking-[0%] text-center font-popins  '>Shop Now
                                </Link>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <img className='mt-4' src={iphone} alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide> <div className='flex  justify-between'>
                        <div className='flex flex-col pt-12 pl-[64px] '>
                            <div className='flex items-center mb-5 gap-4'>
                                <img src={iconIphone} alt="" />
                                <p className=' font-normal text-base leading-6 tracking-[0%] text-center text-white font-popins'>iPhone 14 Series</p>
                            </div>
                            <p className='font-semibold mb-5 text-5xl leading-[60px] tracking-[4%] text-white'>Up to 30% off Voucher</p>
                            <div className='flex gap-2 pb-2 border-b-2 border-b-white w-[110px]'>
                                <Link className='text-white  font-medium text-base leading-6 tracking-[0%] text-center font-popins  '>Shop Now
                                </Link>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <img className='mt-4' src={iphone} alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide> <div className='flex  justify-between'>
                        <div className='flex flex-col pt-12 pl-[64px] '>
                            <div className='flex items-center mb-5 gap-4'>
                                <img src={iconIphone} alt="" />
                                <p className=' font-normal text-base leading-6 tracking-[0%] text-center text-white font-popins'>iPhone 14 Series</p>
                            </div>
                            <p className='font-semibold mb-5 text-5xl leading-[60px] tracking-[4%] text-white'>Up to 40% off Voucher</p>
                            <div className='flex gap-2 pb-2 border-b-2 border-b-white w-[110px]'>
                                <Link className='text-white  font-medium text-base leading-6 tracking-[0%] text-center font-popins  '>Shop Now
                                </Link>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <img className='mt-4' src={iphone} alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide> <div className='flex  justify-between'>
                        <div className='flex flex-col pt-12 pl-[64px] '>
                            <div className='flex items-center mb-5 gap-4'>
                                <img src={iconIphone} alt="" />
                                <p className=' font-normal text-base leading-6 tracking-[0%] text-center text-white font-popins'>iPhone 14 Series</p>
                            </div>
                            <p className='font-semibold mb-5 text-5xl leading-[60px] tracking-[4%] text-white'>Up to 50% off Voucher</p>
                            <div className='flex gap-2 pb-2 border-b-2 border-b-white w-[110px]'>
                                <Link className='text-white  font-medium text-base leading-6 tracking-[0%] text-center font-popins  '>Shop Now
                                </Link>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <img className='mt-4' src={iphone} alt="" />
                    </div></SwiperSlide>

                </Swiper>
            </div>

        </div>
    )
}
