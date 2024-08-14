import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
      } w-64 text-white flex flex-col z-50 relative border-r border-gray-400`}
    >
      <div
        onClick={toggleSidebar}
        className={`flex items-center max-lg:hidden justify-between  ${
          isOpen ? "rotate-180" : ""
        } p-4 absolute z-10 -right-[26px]`}
      >
        <img
          src='/public/sidebarArrow.svg'
          className='h-[20px] w-[20px] rounded-full bg-white cursor-pointer'
        />
      </div>
      <nav className='flex-grow p-4 max-lg:p-2'>
        <NavLink
          to='#'
          className={`flex items-center gap-2 w-full text-left py-2 px-4 text-[#383838] hover:text-[#005932] font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='/public/Dashboard.svg' className='w-[48px] h-[48px]' />
          {show ? "Dashboard" : ""}
        </NavLink>
        <NavLink
          to='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 text-[#383838] hover:text-[#005932] font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='/public/Logical Assets.svg' className='w-[48px] h-[48px]' />
          {show ? "Logical Assets" : ""}
        </NavLink>
        <NavLink
          to='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 text-[#383838] hover:text-[#005932] font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <img
            src='/public/Data Visualisation.svg'
            className='w-[48px] h-[48px]'
          />
          {show ? "Data Visualisation" : ""}
        </NavLink>
        <NavLink
          to='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 text-[#383838] hover:text-[#005932] font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='/public/Assets.svg' className='w-[48px] h-[48px]' />
          {show ? "Assets" : ""}
        </NavLink>
        <NavLink
          to='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 text-[#383838] hover:text-[#005932] font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='/public/Modelling.svg' className='w-[48px] h-[48px]' />
          {show ? "Modelling" : ""}
        </NavLink>
        <NavLink
          to='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 text-[#383838] hover:text-[#005932] font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='/public/Reports.svg' className='w-[48px] h-[48px]' />
          {show ? "Reports" : ""}
        </NavLink>
        <NavLink
          to='#'
          className={`flex items-center gap-3 w-full text-left py-2 px-4 text-[#383838] hover:text-[#005932] font-[500] text-[14px] rounded-md  ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='/public/Job Campaign.svg' className='w-[48px] h-[48px]' />
          {show ? "Job Campaign" : ""}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
