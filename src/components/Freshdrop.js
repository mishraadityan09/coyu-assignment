import React from 'react';
import Image from 'next/image';
import imageA from '/public/freshdrop/Mask group (6).png'
import imageB from '/public/freshdrop/image (4).png'
import imageC from '/public/freshdrop/image (3).png'
import imageD from '/public/freshdrop/image (5).png'
import imageE from '/public/freshdrop/image (6).png'
import imageF from '/public/freshdrop/image (7).png'


const FreshDrop = () => {
    return (
        <>
            <div className='flex flex-col my-4'>
                <p className='text-sm font-bold'>Fresh drops of the week</p>
                <div className='flex justify-between text-xs'>
                    <div className='text-xs textgrey' >300+ styles dropped</div>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='text-xs textblue'>View All</div>
                        <div><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.0201 9.31601L11.3406 5.04251L7.0201 0.627502C6.98108 0.575607 6.9315 0.532524 6.87473 0.50117C6.81796 0.469815 6.75532 0.450921 6.69104 0.445766C6.62677 0.440611 6.56236 0.449317 6.50218 0.471292C6.44201 0.493268 6.38747 0.528001 6.34225 0.57314C6.29704 0.618279 6.2622 0.67277 6.24011 0.732925C6.21802 0.793079 6.20918 0.857492 6.2142 0.921804C6.21922 0.986115 6.23798 1.04882 6.2692 1.10568C6.30042 1.16254 6.34339 1.21222 6.39518 1.25137L9.62767 4.56474L1.02717 4.4239C0.907936 4.42195 0.793583 4.46745 0.709271 4.55041C0.624958 4.63337 0.577591 4.74698 0.577591 4.86625C0.577591 4.98552 0.624958 5.10069 0.709271 5.18641C0.793583 5.27213 0.907936 5.32138 1.02717 5.32333L9.62767 5.46418L6.39518 8.67168C6.31112 8.75499 6.26413 8.86884 6.26455 8.98818C6.26497 9.10752 6.31277 9.22259 6.39743 9.30806C6.48208 9.39354 6.59667 9.44242 6.71597 9.44395C6.83527 9.44548 6.94952 9.39954 7.03358 9.31623L7.0201 9.31601Z" fill="#393AFB" />
                        </svg></div>
                    </div>
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-item large-item"> {/* Large Image, spans two rows */}
                    <Image src={imageB} alt="Large Item" className='rounded-md'/>
                    <div className="w-full px-2 absolute bottom-0  text-white flex justify-between items-center">
                                    <div>
                                        <h2 className="text-[10px] font-normal mb-1">NEW BRAND</h2>
                                        <h3 className="text-2xl font-normal mb-2 font-serif">Stavoss</h3>
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
                <div className="grid-item small-item"><Image src={imageB} alt="Small Item 1" className='rounded-md' /></div>
                <div className="grid-item small-item"><Image src={imageC} alt="Small Item 2" className='rounded-md' /></div>
                <div className="grid-item small-item"><Image src={imageD} alt="Small Item 3" className='rounded-md' /></div>
                <div className="grid-item small-item"><Image src={imageE} alt="Small Item 4" className='rounded-md' /></div>
                <div className="grid-item small-item"><Image src={imageF} alt="Small Item 5" className='rounded-md' /></div>
            </div>

           


        </>
    );
};

export default FreshDrop;
