'use client'

import Image from 'next/image';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from "react"

import { GetLoginLink } from "../../api/BackendAPI"

export const Header = ({handleClick}:{handleClick: () => void}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const showB = false;

    return (
        <div>
        <div className="flex flex-row justify-between m-6">
            <Image src="/ztlme_logo.png" alt="Company Logo" width={150} height={44} />


            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-6">
                <span className='font-dm cursor-pointer hover:text-blue-700'>Home</span>
                <span className="font-dm ml-6 cursor-pointer hover:text-blue-700">About</span>
                <span className="font-dm ml-6 cursor-pointer hover:text-blue-700">Contact</span>
                <Button type="primary" ghost className="font-dm ml-20" onClick={handleClick}>Bli med</Button>
            </div>

            {/* Mobile Menu Button (burger) */}
            <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
               <MenuOutlined />
            </button>

        </div>
          {/* Mobile Menu Upon Pressed */}
          {menuOpen && (
                <div className="w-full sm:hidden">
                    <div className="flex flex-col justify-center items-center m-4">
                        <span className="font-dm cursor-pointer hover:text-blue-700 mb-2">Home</span>
                        <span className="font-dm cursor-pointer hover:text-blue-700 mb-2">About</span>
                        <span className="font-dm cursor-pointer hover:text-blue-700 mb-2">Contact</span>
                        <Button type="primary" ghost className="font-dm" onClick={handleClick}>Bli med</Button>
                    </div>
                </div>    
              )
            }
        </div>
    )
}