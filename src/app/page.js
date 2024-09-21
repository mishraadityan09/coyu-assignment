"use client";
import React, { useState } from "react";
import Image from "next/image";
import BottomTabNavigation from "@/components/BottomNavigation";
import Home from "@/components/Home";
import logo from "/public/logo.png";



export default function Main() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <>

          <Home />

        </>;
      case "categories":
        return <div className="p-4 text-center">Shop Content</div>;
      case "occasion":
        return <div className="p-4 text-center">Profile Content</div>;
      case "unique":
        return <div className="p-4 text-center">Unique</div>;
      case "search":
        return <div className="p-4 text-center">Search</div>;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* This section will only be visible on screens larger than 768px (tablet or larger) */}
      <div className="hidden md:flex items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold">
          Please view on a mobile screen for the best experience.
        </h1>
      </div>

      {/* This section will be hidden on screens larger than 768px */}
      <div className="md:hidden pb-20">
        <div className="flex p-2 justify-between items-center">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="17" y2="0.5" stroke="#171717" />
            <line y1="5.5" x2="17" y2="5.5" stroke="#171717" />
            <line y1="10.5" x2="17" y2="10.5" stroke="#171717" />
          </svg>

          <Image src={logo}/>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1.67188L2.5 5.00521V16.6719C2.5 17.1139 2.67559 17.5378 2.98816 17.8504C3.30072 18.1629 3.72464 18.3385 4.16667 18.3385H15.8333C16.2754 18.3385 16.6993 18.1629 17.0118 17.8504C17.3244 17.5378 17.5 17.1139 17.5 16.6719V5.00521L15 1.67188H5Z" stroke="#171717" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.5 5H17.5" stroke="#171717" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.3332 8.32812C13.3332 9.21218 12.982 10.06 12.3569 10.6851C11.7317 11.3103 10.8839 11.6615 9.99984 11.6615C9.11578 11.6615 8.26794 11.3103 7.64281 10.6851C7.01769 10.06 6.6665 9.21218 6.6665 8.32812" stroke="#171717" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
        {renderContent()}
        <BottomTabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
