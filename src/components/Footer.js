import React, { useState, useEffect, useRef } from 'react';
import Accordion from './Accordian';


const Footer = () => {


    return (
        <div className='pt-2'>

            <div className='flex flex-col gap-2'>
                <div className='text-sm textblack font-medium' >
                    Sign up for email
                </div>
                <div className='text-sm textgrey font-normal'>Receive early access to new arrivals, sales, exclusive content, events and much more!</div>
            </div>
            <div className="flex flex-col items-center my-8">
                <label htmlFor="email" className="w-full max-w-md text-left mb-2 text-sm textblack font-medium">
                    Email address
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full max-w-md p-4 rounded-[4px] border border-gray-300 focus:outline-none mb-4"
                />
                <button
                    type="submit"
                    className="w-full max-w-md p-4 bg-[#393afb] text-white text-[16px] font-normal rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                    Submit
                </button>
            </div>

            <div className='text-xs textgrey font-normal'>
                By Signing up, you will receive Coyu offers, Promotions and other commerical messages, You are also agreeing to Coyu Privacy policy. You may unsubscribe any time.
            </div>


            <div className='flex justify-between text-xs font-normal my-8'>
                <div className='flex items-center gap-2'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3999 7.20117C10.3999 7.83769 10.1471 8.44814 9.697 8.89822C9.24691 9.34831 8.63646 9.60117 7.99994 9.60117C7.36343 9.60117 6.75298 9.34831 6.30289 8.89822C5.8528 8.44814 5.59994 7.83769 5.59994 7.20117C5.59994 6.56465 5.8528 5.9542 6.30289 5.50411C6.75298 5.05402 7.36343 4.80117 7.99994 4.80117C8.63646 4.80117 9.24691 5.05402 9.697 5.50411C10.1471 5.9542 10.3999 6.56465 10.3999 7.20117ZM9.59995 7.20117C9.59995 6.77682 9.43137 6.36985 9.13132 6.0698C8.83126 5.76974 8.42429 5.60117 7.99994 5.60117C7.5756 5.60117 7.16863 5.76974 6.86857 6.0698C6.56852 6.36985 6.39994 6.77682 6.39994 7.20117C6.39994 7.62551 6.56852 8.03248 6.86857 8.33254C7.16863 8.6326 7.5756 8.80117 7.99994 8.80117C8.42429 8.80117 8.83126 8.6326 9.13132 8.33254C9.43137 8.03248 9.59995 7.62551 9.59995 7.20117ZM11.9599 11.1652C13.0103 10.1143 13.6003 8.68934 13.6003 7.20357C13.6003 5.7178 13.0103 4.29284 11.9599 3.24197C11.4399 2.7219 10.8226 2.30935 10.1431 2.02789C9.46364 1.74643 8.7354 1.60156 7.99994 1.60156C7.26449 1.60156 6.53625 1.74643 5.85679 2.02789C5.17733 2.30935 4.55996 2.7219 4.03994 3.24197C2.98962 4.29284 2.3996 5.7178 2.3996 7.20357C2.3996 8.68934 2.98962 10.1143 4.03994 11.1652L5.25674 12.3644L6.89115 13.9524L6.99754 14.0468C7.61754 14.5492 8.52554 14.5172 9.10954 13.9524L11.0575 12.0564L11.9599 11.1652ZM4.60394 3.80597C5.04974 3.35968 5.57912 3.00564 6.16183 2.76408C6.74454 2.52252 7.36915 2.39819 7.99994 2.39819C8.63074 2.39819 9.25535 2.52252 9.83806 2.76408C10.4208 3.00564 10.9502 3.35968 11.3959 3.80597C12.2714 4.68252 12.7746 5.86315 12.8009 7.1017C12.8271 8.34025 12.3743 9.54113 11.5367 10.454L11.3959 10.6012L10.3391 11.6444L8.55514 13.3796L8.47995 13.4436C8.34138 13.5473 8.17291 13.6033 7.99981 13.6032C7.82671 13.603 7.65833 13.5467 7.51994 13.4428L7.44554 13.3788L5.06154 11.0548L4.60394 10.6012L4.46314 10.4548C3.62563 9.54193 3.17279 8.34105 3.19902 7.1025C3.22525 5.86395 3.72853 4.68252 4.60394 3.80597Z" fill="black" />
                    </svg>

                    <div className='uppercase'>Store Locator</div>
                </div>
                <div className='flex items-center gap-2'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.95 3.684L8.637 8.912C8.45761 9.06063 8.23196 9.14196 7.999 9.14196C7.76604 9.14196 7.54039 9.06063 7.361 8.912L1.051 3.684C1.01714 3.78591 0.999922 3.89261 1 4V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H14C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12V4C15.0004 3.89267 14.9835 3.78597 14.95 3.684ZM2 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V12C16 12.5304 15.7893 13.0391 15.4142 13.4142C15.0391 13.7893 14.5304 14 14 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2ZM1.79 3L7.366 7.603C7.54459 7.7505 7.76884 7.83144 8.00046 7.83199C8.23209 7.83254 8.45672 7.75266 8.636 7.606L14.268 3H1.79Z" fill="black" />
                    </svg>

                    <div className='uppercase'>Get Email</div>
                </div>
            </div>


            <Accordion />

            <div className='my-8'>
                <div className='flex justify-center gap-2'>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9781 12.7311C15.8525 12.7311 14.773 13.1783 13.9771 13.9742C13.1811 14.7701 12.734 15.8496 12.734 16.9753C12.734 18.1009 13.1811 19.1804 13.9771 19.9763C14.773 20.7723 15.8525 21.2194 16.9781 21.2194C18.1038 21.2194 19.1833 20.7723 19.9792 19.9763C20.7751 19.1804 21.2223 18.1009 21.2223 16.9753C21.2223 15.8496 20.7751 14.7701 19.9792 13.9742C19.1833 13.1783 18.1038 12.7311 16.9781 12.7311ZM16.9781 9.90169C18.8542 9.90169 20.6534 10.6469 21.9799 11.9735C23.3065 13.3 24.0517 15.0992 24.0517 16.9753C24.0517 18.8513 23.3065 20.6505 21.9799 21.977C20.6534 23.3036 18.8542 24.0488 16.9781 24.0488C15.1021 24.0488 13.3029 23.3036 11.9764 21.977C10.6498 20.6505 9.90457 18.8513 9.90457 16.9753C9.90457 15.0992 10.6498 13.3 11.9764 11.9735C13.3029 10.6469 15.1021 9.90169 16.9781 9.90169ZM26.1738 9.54801C26.1738 10.017 25.9875 10.4668 25.6558 10.7985C25.3242 11.1301 24.8744 11.3164 24.4054 11.3164C23.9364 11.3164 23.4866 11.1301 23.1549 10.7985C22.8233 10.4668 22.637 10.017 22.637 9.54801C22.637 9.07901 22.8233 8.62921 23.1549 8.29757C23.4866 7.96593 23.9364 7.77962 24.4054 7.77962C24.8744 7.77962 25.3242 7.96593 25.6558 8.29757C25.9875 8.62921 26.1738 9.07901 26.1738 9.54801ZM16.9781 5.65755C13.4781 5.65755 12.9066 5.66746 11.2783 5.73961C10.1691 5.79195 9.42498 5.94049 8.7346 6.20929C8.15716 6.42202 7.63498 6.76193 7.20671 7.20383C6.76429 7.63195 6.4239 8.15415 6.21076 8.73172C5.94196 9.42493 5.79341 10.1677 5.74249 11.2754C5.66892 12.8372 5.65902 13.3833 5.65902 16.9753C5.65902 20.4767 5.66892 21.0468 5.74107 22.6751C5.79342 23.7829 5.94196 24.5284 6.20934 25.2174C6.44984 25.8328 6.73278 26.2756 7.20247 26.7453C7.67923 27.2206 8.12203 27.505 8.73036 27.7398C9.42923 28.01 10.1734 28.16 11.2768 28.2109C12.8387 28.2845 13.3848 28.293 16.9767 28.293C20.4781 28.293 21.0483 28.2831 22.6766 28.2109C23.7829 28.1586 24.5271 28.01 25.2188 27.7426C25.7963 27.5299 26.3185 27.19 26.7467 26.7481C27.2235 26.2728 27.5079 25.83 27.7427 25.2202C28.0115 24.5242 28.1615 23.78 28.2124 22.6737C28.2859 21.1133 28.2944 20.5658 28.2944 16.9753C28.2944 13.4753 28.2845 12.9037 28.2124 11.2754C28.16 10.1691 28.0101 9.4221 27.7427 8.73172C27.53 8.15428 27.1901 7.6321 26.7482 7.20383C26.32 6.76142 25.7978 6.42102 25.2203 6.20788C24.5271 5.93908 23.7829 5.79054 22.6766 5.73961C21.1162 5.66604 20.5701 5.65755 16.9767 5.65755M16.9767 2.82812C20.8205 2.82812 21.3001 2.84227 22.8096 2.91301C24.3148 2.98374 25.3419 3.22 26.2431 3.57085C27.1768 3.93019 27.9634 4.41685 28.75 5.20201C29.4696 5.90899 30.0263 6.76453 30.3811 7.70889C30.7306 8.61006 30.9682 9.63714 31.039 11.1438C31.1055 12.6519 31.1239 13.1315 31.1239 16.9753C31.1239 20.819 31.1097 21.2986 31.039 22.8067C30.9682 24.3148 30.7306 25.339 30.3811 26.2416C30.0263 27.186 29.4696 28.0415 28.75 28.7485C28.043 29.4682 27.1875 30.0248 26.2431 30.3797C25.3419 30.7291 24.3148 30.9668 22.8096 31.0375C21.3001 31.104 20.8205 31.1224 16.9767 31.1224C13.1329 31.1224 12.6534 31.1083 11.1439 31.0375C9.63861 30.9668 8.61294 30.7291 7.71035 30.3797C6.76599 30.0248 5.91046 29.4682 5.20348 28.7485C4.48382 28.0415 3.92715 27.186 3.57231 26.2416C3.22147 25.3405 2.98521 24.3134 2.91447 22.8067C2.84657 21.2986 2.82959 20.819 2.82959 16.9753C2.82959 13.1315 2.84374 12.6519 2.91447 11.1438C2.98521 9.63573 3.22147 8.61147 3.57231 7.70889C3.92715 6.76453 4.48382 5.90899 5.20348 5.20201C5.91046 4.48236 6.76599 3.92568 7.71035 3.57085C8.61152 3.22 9.63719 2.98374 11.1439 2.91301C12.6548 2.84652 13.1344 2.82812 16.9781 2.82812" fill="black" />
                    </svg>

                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.883 16.9753C31.883 9.16604 25.545 2.82812 17.7358 2.82812C9.9266 2.82812 3.58868 9.16604 3.58868 16.9753C3.58868 23.8225 8.4553 29.5238 14.9064 30.8395V21.2194H12.077V16.9753H14.9064V13.4385C14.9064 10.7081 17.1275 8.48698 19.8579 8.48698H23.3947V12.7311H20.5652C19.7872 12.7311 19.1505 13.3677 19.1505 14.1458V16.9753H23.3947V21.2194H19.1505V31.0517C26.2948 30.3443 31.883 24.3176 31.883 16.9753Z" fill="black" />
                    </svg>

                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.6308 4.25H29.9697L20.4912 15.0372L31.6419 29.7148H22.9103L16.073 20.812L8.24822 29.7148H3.90505L14.0443 18.1779L3.34766 4.25H12.3L18.4823 12.3874L25.6308 4.25ZM24.1086 27.1287H26.5136L10.9928 6.70028H8.41233L24.1086 27.1287Z" fill="black" />
                    </svg>

                </div>
                <div className='text-center'>© 2024 Coyu.com. All Rights Reserved.</div>
            </div>



        </div>
    )

}

export default Footer;