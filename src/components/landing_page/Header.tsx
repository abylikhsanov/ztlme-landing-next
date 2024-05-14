'use client'

import Image from 'next/image';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from "react"

export const Header = ({handleClick}:{handleClick: () => void}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const showB = false;

    return (

        <div className="flex max-w-4xl justify-center items-center bg-white">
            <nav className="fixed bg-white dark:bg-gray-900 w-full self-center justify-center items-center z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 rounded-3xl">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/ztlme_logo.png" className="h-8" alt="Company Logo" width={120} height={44} />
                    </div>

                    <div className="items-center justify-between hidden md:flex w-full md:w-auto md:order-1"
                         id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#About"
                                   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                   aria-current="page">Om ztl.me</a>
                            </li>
                            <li>
                                <a href="#Advantages"
                                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Fordeler</a>
                            </li>
                            <li>
                                <a href="#FAQ"
                                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button data-modal-target="default-modal" data-modal-toggle="default-modal" type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bli
                            med
                        </button>
                    </div>

                    {/* Mobile Menu Button (burger) */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <MenuOutlined/>
                    </button>

                    {/* Mobile Menu Upon Pressed */}
                    {menuOpen && (
                        <div className="w-full md:hidden">
                            <div className="flex flex-col justify-center items-center m-4">
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="#About"
                                           className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                           aria-current="page">Om ztl.me</a>
                                    </li>
                                    <li>
                                        <a href="#Advantages"
                                           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Fordeler</a>
                                    </li>
                                    <li>
                                        <a href="#FAQ"
                                           className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQ</a>
                                    </li>
                                </ul>
                                <button type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bli
                                    med
                                </button>
                            </div>
                        </div>
                    )
                    }
                </div>
            </nav>
        </div>

) 
}

