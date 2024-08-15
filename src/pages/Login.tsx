"use client";

import LoginForm from "@/Componets/LoginForm";
import { AiOutlineSlackSquare } from "react-icons/ai";

const Login = () => {
  return (
    <div
      className={`w-full bg-[url("/hero.jpg")] lg:h-screen bg-gray-400 flex max-lg:flex-col-reverse`}
    >
      <div className='w-full min-h-screen relative flex items-center justify-center'>
        <div className='max-w-[420px] w-full bg-white rounded-md p-4'>
          <div className='flex px-6 py-4 justify-center items-center gap-1.5'>
            <div className='rotate-[130deg]'>
              <AiOutlineSlackSquare className='text-[2.5rem] text-[#d10d8c]' />
            </div>

            <div className='flex flex-col justify-center'>
              <h3 className='text-[1.75rem] text-[#270c94] font-bold leading-8'>
                ASTPP
              </h3>
              <span className='text-[10px]'>A smart TeamPlay Platform</span>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex flex-col'>
              <h3 className='text-[1.35rem] font-medium leading-8'>
                Welcome Back !
              </h3>
              <span className='text-[10px]'>Sign in to continue to ASTPP.</span>
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
