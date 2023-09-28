import Image from 'next/image';
import { Button, Space } from 'antd';

export const Header = () => {
    return (
        <div className="flex flex-row justify-around mt-6">
            <Image src="/ztlme_logo.png" alt="Company Logo" width={157} height={44} />
            <div>
                <span className='font-dm cursor-pointer hover:text-blue-700'>Home</span>
                <span className="font-dm ml-6 cursor-pointer hover:text-blue-700">About</span>
                <span className="font-dm ml-6 cursor-pointer hover:text-blue-700">Contact</span>
                <Button type="primary" ghost className="font-dm ml-20">Signup</Button>
            </div>
        </div>
    )
}