import React from 'react';
import sun from '/public/btngoup/sun.png';
import festive from '/public/btngoup/festive.png';
import party from '/public/btngoup/party.png';
import vacation from '/public/btngoup/vacation.png';
import Image from 'next/image';

const Button = ({ label, icon, active = false, onClick }) => {
  const baseClasses = "flex items-center px-3 py-1 text-xs font-medium transition-colors duration-200 ";
  const activeClasses = active
    ? "bg-blue-600 text-white"
    : "text-gray-700 hover:bg-gray-300  border-black";

  return (
    <button
      className={`${baseClasses} ${activeClasses} border-[1px] rounded-[4px]`}
      onClick={onClick}
      style={{ minWidth: '50px', minHeight: '20px' }} // Ensure button has enough size
    >
      {icon && (
        <span className="mr-2 flex-shrink-0"> {/* Ensure container doesn’t collapse */}
          <Image src={icon} alt={label} width={12} height={12} />
        </span>
      )}
      {label}
    </button>
  );
};

const ButtonGroup = () => {
  return (
    <div className="flex justify-between my-2">
      <Button label="Day-out" icon={sun} active />
      <Button label="Party" icon={party} />
      <Button label="Vacation" icon={vacation} />
      <Button label="Festive" icon={festive} />
    </div>
  );
};

export default ButtonGroup;
