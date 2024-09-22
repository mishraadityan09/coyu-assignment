import React from "react";
import Image from "next/image";
import g1 from '/public/g1.png';
import g2 from '/public/g2.png';
import img3 from '/public/shopbycategory/image (3).png';
import img4 from '/public/shopbycategory/image (4).png';
import img2 from '/public/shopbycategory/image (2).png';
import img5 from '/public/shopbycategory/image (5).png';
import img6 from '/public/shopbycategory/image (6).png';

const ShopCategory = () => {
    const items = [
        { name: "Dresses", imageUrl: img3, classes: "col-start-2 row-span-2 row-start-1" },
        { name: "Co-ord Sets", imageUrl: img4, classes: "col-start-1 row-span-2 row-start-3" },
        { name: "Topwear", imageUrl: img2, classes: "col-start-1 row-start-2" },
        { name: "Bottomwear", imageUrl: img2, classes: "col-start-1 row-start-1" },
        { name: "Jackets", imageUrl: img5, classes: "row-start-3" },
        { name: "Jeans", imageUrl: img5, classes: "col-start-2 row-start-4" },
        { name: "Bags", imageUrl: img6, classes: "col-start-2 row-start-5" },
        { name: "Jewellery", imageUrl: g2, classes: "col-start-1 row-start-5" },
    ];

    return (
        <>
            <div className="flex justify-between my-4">
                <div className="text-sm font-bold textblack uppercase">Shop by categories</div>
                <div className='flex justify-center items-center gap-1'>
                    <div className='text-xs textblue'>View All</div>
                    <div>
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.0201 9.31601L11.3406 5.04251L7.0201 0.627502C6.98108 0.575607 6.9315 0.532524 6.87473 0.50117C6.81796 0.469815 6.75532 0.450921 6.69104 0.445766C6.62677 0.440611 6.56236 0.449317 6.50218 0.471292C6.44201 0.493268 6.38747 0.528001 6.34225 0.57314C6.29704 0.618279 6.2622 0.67277 6.24011 0.732925C6.21802 0.793079 6.20918 0.857492 6.2142 0.921804C6.21922 0.986115 6.23798 1.04882 6.2692 1.10568C6.30042 1.16254 6.34339 1.21222 6.39518 1.25137L9.62767 4.56474L1.02717 4.4239C0.907936 4.42195 0.793583 4.46745 0.709271 4.55041C0.624958 4.63337 0.577591 4.74698 0.577591 4.86625C0.577591 4.98552 0.624958 5.10069 0.709271 5.18641C0.793583 5.27213 0.907936 5.32138 1.02717 5.32333L9.62767 5.46418L6.39518 8.67168C6.31112 8.75499 6.26413 8.86884 6.26455 8.98818C6.26497 9.10752 6.31277 9.22259 6.39743 9.30806C6.48208 9.39354 6.59667 9.44242 6.71597 9.44395C6.83527 9.44548 6.94952 9.39954 7.03358 9.31623L7.0201 9.31601Z" fill="#393AFB" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-5 gap-[2.5px] h-[655px]">
                {items.map((item, index) => (
                    <div key={index} className={`relative ${item.classes}`}>
                        <Image
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-md"
                            width={0}
                            height={0}
                        />
                        <div className="absolute inset-0 flex items-end justify-start">
                            <span className="text-white text-lg font-semibold m-2">
                                {item.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShopCategory;