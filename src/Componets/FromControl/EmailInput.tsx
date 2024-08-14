"use client";

import React, { ChangeEvent } from "react";

interface EmailInputProps {
  email: string;
  onEmailChange: (email: string) => void;
  error: string;
}

const EmailInput: React.FC<EmailInputProps> = ({
  email,
  onEmailChange,
  error,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onEmailChange(event.target.value);
  };

  return (
    <div className='w-full'>
      <label className='font-medium'>Email</label>
      <div className='w-full relative'>
        <img
          src='/email.svg'
          alt='email icon'
          className='absolute top-3.5 left-2'
        />
        <input
          type='email'
          id='email'
          value={email}
          onChange={handleChange}
          required
          placeholder='Email'
          className='border w-full border-gray-400 text-lg outline-gray-500 rounded-md placeholder:text-lg py-3 px-12'
        />
        {error && <p className='text-red-500'>{error}</p>}
      </div>
    </div>
  );
};

export default EmailInput;
