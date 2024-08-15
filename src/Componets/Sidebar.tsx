"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowDroprightCircle, IoMdPeople } from "react-icons/io";
import { IoMdChatboxes } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import { BsFileBarGraph } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoDesktopOutline, IoSettingsSharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineSlackSquare } from "react-icons/ai";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-y-0  transition-transform transform ${
        isOpen ? "translate-x-0  left-0" : "-translate-x-full left-24"
      } w-64 text-white flex flex-col z-50 relative border-r border-gray-400 bg-[rgb(35,16,97)]`}
    >
      <div
        onClick={toggleSidebar}
        className={`flex items-center max-lg:hidden justify-between  ${
          isOpen ? "rotate-180" : ""
        } p-4 absolute z-10 -right-[24px]`}
      >
        <IoIosArrowDroprightCircle className='text-2xl text-red-400' />
      </div>
      {show ? (
        <div className='flex px-6 py-4 items-center gap-1.5'>
          <div className='rotate-[130deg]'>
            <AiOutlineSlackSquare className='text-[2.5rem]' />
          </div>

          <div className='flex flex-col justify-center'>
            <h3 className='text-[1.75rem] font-bold leading-8'>ASTPP</h3>
            <span className='text-[10px]'>A smart TeamPlay Platform</span>
          </div>
        </div>
      ) : (
        <div className='rotate-[130deg] flex justify-end hover:bg-white/20'>
          <AiOutlineSlackSquare className='text-[2.5rem]' />
        </div>
      )}
      <nav className='flex-grow p-4 flex flex-col gap-2 max-lg:p-2'>
        <Link
          href='#'
          className={`flex items-center hover:bg-white/20 gap-2 w-full text-left py-2 px-4 font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <IoMdPeople className='text-xl' /> {show ? "Team" : ""}
        </Link>
        <Link
          href='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 hover:bg-white/20 font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <IoMdChatboxes className='text-xl' />
          {show ? "chat" : ""}
        </Link>
        <Link
          href='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 hover:bg-white/20 font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <IoIosPeople className='text-xl' />
          {show ? "Meet" : ""}
        </Link>
        <Link
          href='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 hover:bg-white/20 font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <MdOutlineAddIcCall className='text-xl' />
          {show ? "Call" : ""}
        </Link>
        <Link
          href='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 hover:bg-white/20 font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <BsFileBarGraph className='text-xl' />
          {show ? "Panel" : ""}
        </Link>
        <Link
          href='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 hover:bg-white/20 font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <MdContacts className='text-xl' />
          {show ? "Contacts" : ""}
        </Link>
        <Link
          href='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 hover:bg-white/20 font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <IoIosMail className='text-xl' />
          {show ? "Voicemail" : ""}
        </Link>
        <Link
          href='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 hover:bg-white/20 font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <IoSettingsSharp className='text-xl' />
          {show ? "Settings" : ""}
        </Link>
      </nav>
      <div className='p-4 max-lg:p-2 flex flex-col gap-2'>
        <Link
          href='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 hover:bg-white/20 font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <IoDesktopOutline className='text-xl' />
          {show ? "Web App" : ""}
        </Link>
        <Link
          href='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 hover:bg-white/20 font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <FaMobileAlt className='text-xl' />
          {show ? "Mobile App" : ""}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
