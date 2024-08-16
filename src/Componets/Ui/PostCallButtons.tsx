import React from "react";
import {
  FaExchangeAlt,
  FaMicrophoneSlash,
  FaPhoneAlt,
  FaPhoneVolume,
  FaPlus,
  FaRecordVinyl,
  FaTh,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

export default function PostCallButtons() {
  return (
    <div className='mt-8 grid grid-cols-3 gap-4'>
      <button className='p-4 rounded-full flex flex-col items-center justify-center'>
        <FaPhoneAlt className='mb-2' /> {/* Hold Icon */}
        Hold
      </button>
      <button className='p-4 rounded-full flex flex-col items-center justify-center'>
        <FaMicrophoneSlash className='mb-2' /> {/* Mute Icon */}
        Mute
      </button>
      <button className='p-4 rounded-full flex flex-col items-center justify-center'>
        <FaPlus className='mb-2' /> {/* New Call Icon */}
        New Call
      </button>
      <button className='p-4 rounded-full flex flex-col items-center justify-center'>
        <FaUsers className='mb-2' /> {/* Conference Icon */}
        Conference
      </button>
      <button className='p-4 rounded-full flex flex-col items-center justify-center'>
        <FaExchangeAlt className='mb-2' /> {/* Transfer Icon */}
        Transfer
      </button>
      <button className='p-4 rounded-full flex flex-col items-center justify-center'>
        <FaPhoneVolume className='mb-2' /> {/* Alt. Transfer Icon */}
        Alt. Transfer
      </button>
      <button className='p-4 rounded-full flex flex-col items-center justify-center'>
        <FaRecordVinyl className='mb-2' /> {/* Record Icon */}
        Record
      </button>
      <button className='p-4 rounded-full flex flex-col items-center justify-center'>
        <FaTh className='mb-2' /> {/* Keypad Icon */}
        Keypad
      </button>
      <button className='p-4 rounded-full flex flex-col items-center justify-center'>
        <FaVideo className='mb-2' /> {/* Video Icon */}
        Video
      </button>
    </div>
  );
}
