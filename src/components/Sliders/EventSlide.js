import React, { useState } from 'react';
import image from '../../../public/imageC.png';
import Image from 'next/image';


const EventSlide = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const content = [
    // { type: "image", src: "https://picsum.photos/600/300" },
    // { type: "image", src: "https://picsum.photos/601/301" },
    { type: "card",name:"Ambience Mall",address:"Ambience Island, Vasant Kunj, Delhi", time:"10:00 AM to 09:00 PM",image:image,},
    { type: "card",name:"Ambience Mall",address:"Ambience Island, Vasant Kunj, Delhi", time:"10:00 AM to 09:00 PM",image:image,},
    { type: "card",name:"Ambience Mall",address:"Ambience Island, Vasant Kunj, Delhi", time:"10:00 AM to 09:00 PM",image:image,},
    { type: "card",name:"Ambience Mall",address:"Ambience Island, Vasant Kunj, Delhi", time:"10:00 AM to 09:00 PM",image:image,}
    // { type: "card", content: "Card 2", bgColor: "bg-green-400" },
    // { type: "image", src: "https://picsum.photos/602/302" },
    // { type: "card", content: "Card 3", bgColor: "bg-yellow-400" },
    // { type: "image", src: "https://picsum.photos/603/303" },
  ];



  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden my-8 ">
          <div className='text-sm font-bold textblack my-2 uppercase '>STORE EVENTS</div>
      <div className="flex space-x-4 overflow-x-auto py-2 hide-scrollbar">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-52 cursor-pointer transform transition duration-200 hover:scale-110"
            onClick={() => item.type === "image"}
          >
            {item.type === "image" ? (
              <img className="w-full h-full object-cover" src={item.src} alt={`img-${index}`} />
            ) : (
              <div
                className={`w-full h-full flex flex-col items-center  text-black font-bold shadow`}
              >
                <Image  src={item.image}/>
             <div className='w-full p-1'>
             <div className='text-xs flex justify-between'>
                    <div className='font-semibold'>{item.name}</div>
                    <div className='font-normal textblue'>View Detail</div>
                </div>
                <div className='text-xs textgrey'>{item.address}</div>
                <div className='text-xs'>{item.time}</div>
             </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSlide;
