"use client"
import { ReactNode } from 'react';
import { FaRegCircleDown } from "react-icons/fa6";
import { FaRegCircleUp } from "react-icons/fa6";

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion = ({ title, children, isOpen, onToggle }: AccordionProps) => {
  return (
    <div className={`border rounded-xl bg-[#F9EDD5] p-3 text-black flex flex-col gap-2 sm:w-5/6 sm:p-5 sm:ml-10`}>
      <div className="flex text-black justify-between gap-4 items-center cursor-pointer" onClick={onToggle}>
        <div className='flex md:gap-8'>
          <h2 className='font-bold'>{title}</h2>
        </div>
        <span className='text-xl text-[#F3A20C]'>{isOpen ? <FaRegCircleUp/> : <FaRegCircleDown/>}</span>
      </div>
      {isOpen && (
        <div className='flex md:gap-8'>
          <div className='text-base'>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
