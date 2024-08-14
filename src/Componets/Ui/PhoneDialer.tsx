"use client";

import React, { useState, KeyboardEvent } from "react";

const PhoneDialer: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleButtonClick = (number: string) => {
    setPhoneNumber((prev) => prev + number);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (!isNaN(Number(key)) && key !== " ") {
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

  return (
    <div
      onKeyDown={handleKeyPress}
      tabIndex={0}
      className='outline-none flex flex-col items-center space-y-4'
    >
      <input
        type='text'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder='Enter number'
        className='text-center text-2xl p-2 border-b-2 border-gray-300 focus:outline-none w-48'
      />

      <div className='grid grid-cols-3 gap-4'>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
          (number) => (
            <button
              key={number}
              onClick={() => handleButtonClick(number)}
              className='w-16 h-16 bg-gray-200 text-2xl rounded-full flex items-center justify-center shadow-md focus:outline-none hover:bg-gray-300'
            >
              {number}
            </button>
          )
        )}
      </div>

      <div className='flex space-x-4'>
        <button
          onClick={handleCall}
          className='bg-green-500 text-white text-2xl py-2 px-6 rounded-full shadow-md focus:outline-none hover:bg-green-600'
        >
          Call
        </button>
        <button
          onClick={handleBackspace}
          className='bg-red-500 text-white text-2xl py-2 px-6 rounded-full shadow-md focus:outline-none hover:bg-red-600'
        >
          Backspace
        </button>
      </div>
    </div>
  );
};

export default PhoneDialer;
