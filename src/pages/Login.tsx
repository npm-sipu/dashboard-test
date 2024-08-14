"use client";
import Link from "next/link";
import LoginFooter from "@/Componets/LoginFooter";
import LoginForm from "@/Componets/LoginForm";

const Login = () => {
  return (
    <div className='w-full lg:h-screen bg-gray-400 flex max-lg:flex-col-reverse'>
      <div className='w-full min-h-screen relative flex items-center justify-center'>
        <div className='w-[360px] bg-white rounded-md p-4'>
          <div className='w-full justify-center flex items-center py-6'>
            <img src='/logo.svg' alt='logo 2' />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
