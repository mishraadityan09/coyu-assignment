import React, { useState, useEffect, useRef } from 'react';
import OvelCarousal from "@/components/Sliders/OvalCaraousel";
import TimerCountDown from './Timer';
import EventSlide from './Sliders/EventSlide';
import Chat from './chat';
import FreshDrop from '@/components/Freshdrop';
import ShopCategory from './Grid/ShopbyCategory';
import ShopOccasion from './Sliders/ShopOcassion';
import StoreSlide from './Sliders/Store';
import Footer from './Footer';
import Bestseller from './Sliders/Bestseller';
import Assurance from './Sliders/Assurance';

const Home = () => {


    return (
        <div className='pt-2'>

            <OvelCarousal />
            <div className="h-[50px]"></div>
            <FreshDrop />
            <div className='m-2 flex flex-col gap-1 mt-8'>
                <p className='text-sm font-bold textblack uppercase'>Get new drops & offers on WhatsApp</p>
                <div className='flex justify-between items-center font-normal mx-2'>
                    <p className='text-xs textblack'>NEXT DROP IN </p>
                    <TimerCountDown />
                </div>
                <div className='m-1'>
                <div className="relative w-full  inline-block my-4 ">
                    <input type="text" placeholder="Enter Your Number" class="w-full pr-10 py-2 text-xs pl-2 border-[1.5px] border-black rounded focus:outline-none  placeholder:text-xs" />
                    <button className="absolute top-1 right-3 mt-1 text-xs font-normal textblue focus:outline-none" onclick="alert('Button clicked!');">
                        SUBMIT
                    </button>
                </div>
                </div>
            </div>
            <Assurance/>
            <ShopCategory />
            <Chat/>
            <ShopOccasion />
            <Bestseller/>
            <StoreSlide />
            <EventSlide />
            <Footer/>
           
           
        </div>
    )

}

export default Home;