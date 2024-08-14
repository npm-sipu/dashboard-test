"use client";
import React, { useState, FormEvent } from "react";
import EmailInput from "./FromControl/EmailInput";
import PasswordInput from "./FromControl/PassowrdInput";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const router = useRouter();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    }
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
    }
    if (validateEmail(email) && validatePassword(password)) {
      console.log("Form submitted:", { email, password });
      localStorage.setItem("user", JSON.stringify({ email, password }));
      router.push("/dashboard");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col  gap-6 items-center py-6'
    >
      <EmailInput
        email={email}
        onEmailChange={handleEmailChange}
        error={emailError}
      />
      <PasswordInput
        password={password}
        onPasswordChange={handlePasswordChange}
        error={passwordError}
      />
      <div className='flex flex-col items-center gap-4 w-full'>
        <button
          type='submit'
          className='bg-[rgb(35,16,97)] w-full text-white py-3.5 rounded-3xl font-medium'
        >
          Login
        </button>

        <span>Or</span>

        <button
          type='button'
          className='bg-white] w-full text-black border-[1px] py-3.5 rounded-3xl font-medium'
        >
          Sign in with Google
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
