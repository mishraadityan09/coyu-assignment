import React, { useState } from "react";
import Image from "next/image";
import image from '../../public/login.png'


const BottomTabNavigation = ({ activeTab, setActiveTab }) => {
    return (
        // <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-3 shadow-lg">
        //     {/* <div
        //         className={`flex flex-col items-center ${activeTab === "home" ? "text-black" : "text-gray-500"}`}
        //         onClick={() => setActiveTab("home")}
        //     >
        //         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M2.5 7.50521L10 1.67188L17.5 7.50521V16.6719C17.5 17.1139 17.3244 17.5378 17.0118 17.8504C16.6993 18.1629 16.2754 18.3385 15.8333 18.3385H4.16667C3.72464 18.3385 3.30072 18.1629 2.98816 17.8504C2.67559 17.5378 2.5 17.1139 2.5 16.6719V7.50521Z" stroke="#393AFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //             <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#393AFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //         </svg>

        //         <span className="text-xs">Home</span>
        //     </div>

        //     <div
        //         className={`flex flex-col items-center ${activeTab === "shop" ? "text-black" : "text-gray-500"}`}
        //         onClick={() => setActiveTab("shop")}
        //     >
        //         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M2.5 7.50521L10 1.67188L17.5 7.50521V16.6719C17.5 17.1139 17.3244 17.5378 17.0118 17.8504C16.6993 18.1629 16.2754 18.3385 15.8333 18.3385H4.16667C3.72464 18.3385 3.30072 18.1629 2.98816 17.8504C2.67559 17.5378 2.5 17.1139 2.5 16.6719V7.50521Z" stroke="#393AFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //             <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#393AFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //         </svg>

        //         <span className="text-xs">Shop</span>
        //     </div>

        //     <div
        //         className={`flex flex-col items-center ${activeTab === "profile" ? "text-black" : "text-gray-500"}`}
        //         onClick={() => setActiveTab("profile")}
        //     >
        //         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M2.5 7.50521L10 1.67188L17.5 7.50521V16.6719C17.5 17.1139 17.3244 17.5378 17.0118 17.8504C16.6993 18.1629 16.2754 18.3385 15.8333 18.3385H4.16667C3.72464 18.3385 3.30072 18.1629 2.98816 17.8504C2.67559 17.5378 2.5 17.1139 2.5 16.6719V7.50521Z" stroke="#393AFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //             <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#393AFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //         </svg>

        //         <span className="text-xs">Profile</span>
        //     </div> */}


        // </div>
        <div className="fixed inset-x-0 bottom-0 bg-white shadow-md py-2 px-2 flex justify-between items-center text-xs">
            <button className={`flex flex-col items-center   text-center text-[10px] ${activeTab === 'home' ? 'text-[#393AFB]' : 'text-[#171717]'}`} onClick={() => setActiveTab('home')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.5 7.50521L10 1.67188L17.5 7.50521V16.6719C17.5 17.1139 17.3244 17.5378 17.0118 17.8504C16.6993 18.1629 16.2754 18.3385 15.8333 18.3385H4.16667C3.72464 18.3385 3.30072 18.1629 2.98816 17.8504C2.67559 17.5378 2.5 17.1139 2.5 16.6719V7.50521Z"
                        stroke={activeTab === 'home' ? '#393AFB' : '#171717'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.5 18.3333V10H12.5V18.3333"
                        stroke={activeTab === 'home' ? '#393AFB' : '#171717'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Home
            </button>

            <button className={`flex flex-col items-center  text-center text-[10px] ${activeTab === 'categories' ? 'text-[#393AFB]' : 'text-[#171717]'}`} onClick={() => setActiveTab('categories')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z" stroke={activeTab === 'categories' ? '#393AFB' : '#171717'} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.5 2.5H11.6667V8.33333H17.5V2.5Z" stroke={activeTab === 'categories' ? '#393AFB' : '#171717'} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.4998 11.6719H11.6665V17.5052H17.4998V11.6719Z" stroke={activeTab === 'categories' ? '#393AFB' : '#171717'} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33333 11.6719H2.5V17.5052H8.33333V11.6719Z" stroke={activeTab === 'categories' ? '#393AFB' : '#171717'} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                Categories
            </button>
            <div className="flex flex-col">
                <button className="relative  z-10 -mt-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-2 border-[#393afb]" onClick={() => setActiveTab('unique')}>
                    {/* Place your image or icon here */}
                    <Image src={image} alt="Unique" className="w-14 h-14" />

                </button>
                <p className="textblack text-[10px] font-bold">Speak to stylist</p>
            </div>

            <button className={`flex flex-col items-center  text-center text-[10px] ${activeTab === 'occasion' ? 'text-[#393AFB]' : 'text-[#171717]'}`} onClick={() => setActiveTab('occasion')}>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2059 1.4902H13.7843V0.558824C13.7843 0.410614 13.7254 0.268475 13.6206 0.163676C13.5158 0.0588758 13.3737 0 13.2255 0C13.0773 0 12.9351 0.0588758 12.8303 0.163676C12.7255 0.268475 12.6667 0.410614 12.6667 0.558824V1.4902H4.84314V0.558824C4.84314 0.410614 4.78426 0.268475 4.67946 0.163676C4.57466 0.0588758 4.43252 0 4.28431 0C4.1361 0 3.99397 0.0588758 3.88917 0.163676C3.78437 0.268475 3.72549 0.410614 3.72549 0.558824V1.4902H1.30392C0.9581 1.4902 0.626443 1.62757 0.38191 1.87211C0.137377 2.11664 0 2.4483 0 2.79412V17.6961C0 18.0419 0.137377 18.3736 0.38191 18.6181C0.626443 18.8626 0.9581 19 1.30392 19H16.2059C16.5517 19 16.8834 18.8626 17.1279 18.6181C17.3724 18.3736 17.5098 18.0419 17.5098 17.6961V2.79412C17.5098 2.4483 17.3724 2.11664 17.1279 1.87211C16.8834 1.62757 16.5517 1.4902 16.2059 1.4902ZM16.3922 17.6961C16.3922 17.7455 16.3725 17.7929 16.3376 17.8278C16.3027 17.8627 16.2553 17.8824 16.2059 17.8824H1.30392C1.25452 17.8824 1.20714 17.8627 1.17221 17.8278C1.13727 17.7929 1.11765 17.7455 1.11765 17.6961V2.79412C1.11765 2.74471 1.13727 2.69733 1.17221 2.6624C1.20714 2.62747 1.25452 2.60784 1.30392 2.60784H3.72549V3.53922C3.72549 3.68742 3.78437 3.82956 3.88917 3.93436C3.99397 4.03916 4.1361 4.09804 4.28431 4.09804C4.43252 4.09804 4.57466 4.03916 4.67946 3.93436C4.78426 3.82956 4.84314 3.68742 4.84314 3.53922V2.60784H12.6667V3.53922C12.6667 3.68742 12.7255 3.82956 12.8303 3.93436C12.9351 4.03916 13.0773 4.09804 13.2255 4.09804C13.3737 4.09804 13.5158 4.03916 13.6206 3.93436C13.7254 3.82956 13.7843 3.68742 13.7843 3.53922V2.60784H16.2059C16.2553 2.60784 16.3027 2.62747 16.3376 2.6624C16.3725 2.69733 16.3922 2.74471 16.3922 2.79412V17.6961ZM13.2683 9.09299L10.3811 8.86946L9.26809 6.29794C9.22462 6.19824 9.153 6.11338 9.062 6.05379C8.97101 5.9942 8.8646 5.96245 8.75583 5.96245C8.64706 5.96245 8.54066 5.9942 8.44967 6.05379C8.35867 6.11338 8.28705 6.19824 8.24358 6.29794L7.13431 8.86946L4.24706 9.09299C4.13596 9.10152 4.02995 9.14306 3.94264 9.21228C3.85533 9.2815 3.79071 9.37524 3.75707 9.48146C3.72343 9.58769 3.72231 9.70154 3.75386 9.8084C3.78541 9.91526 3.84818 10.0103 3.93412 10.0812L6.12191 11.8871L5.45505 14.5816C5.42864 14.6884 5.43434 14.8006 5.47144 14.9042C5.50854 15.0077 5.57539 15.0981 5.66361 15.1638C5.75183 15.2295 5.85749 15.2678 5.96735 15.2737C6.07721 15.2797 6.18638 15.253 6.28118 15.1972L8.7549 13.7377L11.2342 15.1972C11.329 15.253 11.4382 15.2797 11.548 15.2737C11.6579 15.2678 11.7636 15.2295 11.8518 15.1638C11.94 15.0981 12.0068 15.0077 12.044 14.9042C12.0811 14.8006 12.0868 14.6884 12.0603 14.5816L11.3935 11.8871L13.5813 10.0812C13.6672 10.0103 13.73 9.91526 13.7615 9.8084C13.7931 9.70154 13.792 9.58769 13.7583 9.48146C13.7247 9.37524 13.6601 9.2815 13.5728 9.21228C13.4854 9.14306 13.3794 9.10152 13.2683 9.09299ZM10.4109 11.2491C10.3297 11.3162 10.2692 11.4049 10.2362 11.5049C10.2033 11.6049 10.1992 11.7123 10.2246 11.8145L10.6558 13.5599L9.03431 12.608C8.94848 12.5575 8.85073 12.531 8.75118 12.531C8.65162 12.531 8.55387 12.5575 8.46804 12.608L6.85025 13.5599L7.28147 11.8145C7.30685 11.7123 7.30283 11.6049 7.26987 11.5049C7.23691 11.4049 7.17636 11.3162 7.0952 11.2491L5.70745 10.1007L7.55436 9.95824C7.65515 9.94959 7.7517 9.91375 7.83371 9.85453C7.91572 9.79532 7.98013 9.71495 8.02005 9.62201L8.7549 7.92971L9.4851 9.62201C9.52502 9.71495 9.58942 9.79532 9.67144 9.85453C9.75345 9.91375 9.85 9.94959 9.95078 9.95824L11.7977 10.1007L10.4109 11.2491Z" fill={activeTab === 'occasion' ? '#393AFB' : '#171717'} />
                </svg>

                Occasions
            </button>
            <button className={`flex flex-col items-center   text-center text-[10px] ${activeTab === 'search' ? 'text-[#393AFB]' : 'text-[#171717]'}`} onClick={() => setActiveTab('search')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke={activeTab === 'search' ? '#393AFB' : '#171717'} stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 21L16.7 16.7" stroke={activeTab === 'search' ? '#393AFB' : '#171717'} stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                Search
            </button>
        </div>
    );
};

export default BottomTabNavigation;
