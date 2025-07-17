'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg text-[#29d9d5] border border-[#29d9d5] rounded-full cursor-pointer bg-transparent hover:bg-[#29d9d5] hover:text-[#111] ${props.className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
