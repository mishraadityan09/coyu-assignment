import React, { useState } from 'react';


const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-t border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xs font-normal textblack uppercase">{title}</span>
        {isOpen ? (
         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M6 12H12M12 12H18M12 12V6M12 12V18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
         
        ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H12M12 12H18M12 12V6M12 12V18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-xs font-normal textblack">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const items = [
    { title: 'Products', content: 'Content for section 1' },
    { title: 'Services', content: 'Content for section 2' },
    { title: 'Connect', content: 'Content for section 3' },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white  overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;