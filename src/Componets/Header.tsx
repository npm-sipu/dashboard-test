"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FaPhoneAlt } from "react-icons/fa";
import { HiMiniBars3BottomLeft, HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

const Header = (props: any) => {
  return (
    <div className='w-full px-4 pt-2 flex justify-between items-center'>
      <HiMiniBars3BottomLeft className='text-xl h-[30px] w-[30px] text-gray-500' />
      <div className='flex gap-4 items-center justify-center'>
        <IoMoonOutline className='text-xl h-[30px] w-[30px] text-gray-500' />
        <HiOutlineSquares2X2 className='text-xl h-[30px] w-[30px] text-gray-500' />
        <div className='rounded-full flex justify-center items-center h-[30px] w-[30px] bg-blue-900'>
          <FaPhoneAlt className=' text-white' />
        </div>

        <Avatar className='h-10 w-10'>
          <AvatarFallback>
            <RxAvatar className='text-2xl text-gray-500' />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
