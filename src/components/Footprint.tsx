import Image from "next/image";

import { CopyrightOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <div className="flex flex-col m-8">
      <div className="flex justify-center items-center">
        <Image src="/ztlme_logo.png" alt="Company Logo" width={150} height={44} />
      </div>
      <div className="flex flex-row justify-between m-8">
        <div className="flex flex-row">
          <CopyrightOutlined />
          <p className="font-dm text-md text-gray-500 ml-2">ztl.me Holding AS 2023</p>
        </div>
        <p className="font-dm text-md text-gray-500 ml-2">ztl.me Holding AS Oslo, Norway</p>
      </div>
    </div>
  );
};
