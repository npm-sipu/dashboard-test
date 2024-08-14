"use client";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

interface PasswordInputProps {
  password: string;
  onPasswordChange: (password: string) => void;
  error: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  onPasswordChange,
  error,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onPasswordChange(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='w-full relative'>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <label className='font-medium'>Password</label>
          <Link href='#' className='text-sm text-blue-800'>
            Forgot password?
          </Link>
        </div>
        <div className='w-full relative'>
          <img
            src='/Password.svg'
            alt='password icon'
            className='absolute top-3.5 left-2'
          />
          <img
            src='/Show password.svg'
            alt='Show password'
            className='absolute top-3.5 right-2 cursor-pointer'
            onClick={toggleShowPassword}
          />
          <input
            type={showPassword ? "text" : "password"}
            id='password'
            value={password}
            onChange={handleChange}
            required
            placeholder='Password'
            className='border border-gray-400 text-lg outline-gray-500 w-full rounded-md placeholder:text-lg py-3 px-12'
          />
          {error && <p className='text-red-500'>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
