import React from 'react';
import Image from 'next/image';
import imageC from '/public/shopbyocassion/Narrow.png';
import imageB from '/public/shopbyocassion/Narrow1.png';
import imageA from '/public/shopbyocassion/Video-963 1.png';
import ButtonGroup from '../Buttons/buttongroup';

const ShopOccasion = () => {
    const content = [
        { type: "card", name: "Ambience Mall", address: "Ambience Island, Vasant Kunj, Delhi", time: "10:00 AM to 09:00 PM", image: [imageA, imageB, imageC] },
        { type: "card", name: "Ambience Mall", address: "Ambience Island, Vasant Kunj, Delhi", time: "10:00 AM to 09:00 PM", image: [imageA, imageB, imageC] },
        { type: "card", name: "Ambience Mall", address: "Ambience Island, Vasant Kunj, Delhi", time: "10:00 AM to 09:00 PM", image: [imageA, imageB, imageC] },
        { type: "card", name: "Ambience Mall", address: "Ambience Island, Vasant Kunj, Delhi", time: "10:00 AM to 09:00 PM", image: [imageA, imageB, imageC] }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto overflow-hidden">

            <div className='text-sm font-bold textblack my-2 uppercase'>Shop by Occasions</div>
            <ButtonGroup />
            <div className="flex space-x-1 overflow-x-auto py-2  scrollbar-hide hide-scrollbar">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-64 h-72 cursor-pointer transition duration-200 transform hover:scale-105"
                    >
                        <div className="grid grid-cols-3 grid-rows-2 gap-1 h-full">
                            <div className="col-span-2 row-span-2 relative overflow-hidden">
                                <Image src={item.image[0]} alt="Large Item" layout="fill" objectFit="cover" />
                                <div className="w-full px-2 absolute bottom-0  text-white flex justify-between items-center">
                                    <div>
                                        <h2 className="text-[10px] font-normal mb-1">Occasions</h2>
                                        <h3 className="text-2xl font-normal mb-2 font-serif">Day-out</h3>
                                    </div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="4" fill="white" />
                                        <g clip-path="url(#clip0_1_157)">
                                            <path d="M13.1916 17.0366L17.9957 12.3023L13.1916 7.37659C13.1482 7.31874 13.0931 7.27064 13.03 7.23556C12.9669 7.20047 12.8972 7.17922 12.8257 7.17323C12.7543 7.16725 12.6827 7.17667 12.6157 7.20087C12.5488 7.22506 12.4882 7.26346 12.4379 7.31347C12.3876 7.36348 12.3489 7.42392 12.3243 7.49072C12.2998 7.55751 12.2899 7.62909 12.2955 7.70061C12.3011 7.77213 12.322 7.84193 12.3567 7.90527C12.3914 7.96861 12.4392 8.02402 12.4968 8.06774L16.091 11.7644L6.52795 11.5738C6.39537 11.5711 6.26821 11.6213 6.17447 11.7132C6.08072 11.8051 6.02805 11.9312 6.02805 12.0638C6.02805 12.1964 6.08072 12.3246 6.17447 12.4203C6.26821 12.5159 6.39537 12.5711 6.52795 12.5738L16.091 12.7644L12.4968 16.3177C12.4033 16.41 12.351 16.5364 12.3515 16.6691C12.352 16.8018 12.4051 16.9299 12.4993 17.0253C12.5934 17.1207 12.7208 17.1755 12.8535 17.1776C12.9861 17.1798 13.1131 17.1292 13.2066 17.0369L13.1916 17.0366Z" fill="#3132EB" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_157">
                                                <rect width="18" height="18" fill="white" transform="matrix(-4.37114e-08 1 -0.999801 -0.0199284 20.9964 3.35938)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </div>
                            <div className="relative overflow-hidden">
                                <Image src={item.image[1]} alt="Small Item 1" layout="fill" objectFit="cover" />
                            </div>
                            <div className="relative overflow-hidden">
                                <Image src={item.image[2]} alt="Small Item 2" layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopOccasion;