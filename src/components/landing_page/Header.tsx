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

        <div className="flex flex-row justify-center m-6">
            <Image src="/ztlme_logo.png" alt="Company Logo" width={150} height={44} />
        </div>
    )
}