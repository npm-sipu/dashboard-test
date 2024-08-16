"use client";

import React, { useState, KeyboardEvent } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";

const PhoneDialer: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleButtonClick = (number: string) => {
    setPhoneNumber((prev) => prev + number);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (key === "Backspace") {
      handleBackspace();
    } else if (!isNaN(Number(key)) && key !== " ") {
      setPhoneNumber((prev) => prev + key);
    }
  };

  const handleCall = () => {
    if (phoneNumber) {
      // Simulate dialing the number
      alert(`Dialing ${phoneNumber}...`);
      setPhoneNumber("");
    } else {
      alert("Please enter a number to call.");
    }
  };

  const handleBackspace = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  const buttons = [
    { number: "1", letters: "" },
    { number: "2", letters: "ABC" },
    { number: "3", letters: "DEF" },
    { number: "4", letters: "GHI" },
    { number: "5", letters: "JKL" },
    { number: "6", letters: "MNO" },
    { number: "7", letters: "PQRS" },
    { number: "8", letters: "TUV" },
    { number: "9", letters: "WXYZ" },
    { number: "*", letters: "" },
    { number: "0", letters: "+" },
    { number: "#", letters: "" },
  ];

  return (
    <div
      onKeyDown={handleKeyPress}
      tabIndex={0}
      className='outline-none flex flex-col py-4 items-center sm:rounded-lg bg-gradient-to-t from-[#2f3775] via-[#5a32d1] to-[#2f3775] space-y-4'
    >
      <div className='h-[30vh]'>
        <input
          type='text'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder='Enter Name/Number'
          className='text-center text-2xl p-2 text-white border-b-2 bg-transparent border-gray-300 focus:outline-none w-48'
        />
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {buttons.map(({ number, letters }) => (
          <button
            key={number}
            onClick={() => handleButtonClick(number)}
            className='w-16 h-16 bg-white/30 text-2xl rounded-full leading-5 text-white flex flex-col items-center justify-center shadow-md focus:outline-none hover:bg-white/50'
          >
            <span>{number}</span>
            <span className='text-[10px] leading-5'>{letters || "."}</span>
          </button>
        ))}
      </div>

      <div className='flex gap-4'>
        <button
          onClick={handleCall}
          className=' text-white text-2xl py-4 px-4 rounded-full shadow-md focus:outline-none hover:bg-white/10'
        >
          <MdOutlineVideoCall />
        </button>
        <button
          onClick={handleCall}
          className='bg-green-500 text-white text-2xl py-4 px-4 rounded-full shadow-md focus:outline-none hover:bg-green-600'
        >
          <FaPhoneAlt />
        </button>
        <button
          onClick={handleBackspace}
          className=' text-white text-2xl py-4 px-4 hover:text-red-500 rounded-full shadow-md focus:outline-none '
        >
          <RiDeleteBack2Fill className='text-2xl ' />
        </button>
      </div>
    </div>
  );
};

export default PhoneDialer;
