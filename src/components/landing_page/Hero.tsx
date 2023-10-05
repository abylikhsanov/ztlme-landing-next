'use client'

import { useEffect, useState } from "react";
import { Button } from "antd";
import Image from "next/image";

import { GetLoginLink } from "../../api/BackendAPI"

export const Hero = ({handleClick}:{handleClick: () => void}) => {

  return (
    <div className="flex flex-col mt-20 items-center justify-center max-w-5xl mx-auto">
      <div className="flex items-center justify-center text-center m-6">
        <span className="font-dm font-bold text-5xl">Fremtidens forsikring for deg som ønsker trygghet og lønnsom avkastning</span>
      </div>
      <div className="flex max-w-3xl m-6 items-center justify-center text-center3">
        <span className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">
          Si farvel til tradisjonelle profittjagende forsikringsselskaper og hei til ztl.me - den nyskapende løsningen som tilbyr rimelig dekning med full
          transparens og avkastning.
        </span>
      </div>
      <Button type="primary" shape="round" className="bg-[#1677ff]" size="large" onClick={handleClick}>
        Bli med
      </Button>

      <div className="m-4 md:m-8 relative w-[40vw] h-[50vw] md:h-[600px]">
        <div className="absolute top-0 right-0 w-[30vw] h-[30vw] md:w-[350px] md:h-[350px]">
          <Image src="/main_image_1.png" alt="Main Image" layout="responsive" width={350} height={350} />
        </div>
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] md:w-[350px] md:h-[350px]">
          <Image src="/main_image_2.png" alt="Main Image 2" layout="responsive" width={350} height={350} />
        </div>
      </div>

      {/*
      <div className="m-8 relative h-[700px] w-[700px]">
        <div className="absolute top-0 right-0">
          <Image src="/main_image_1.png" alt="Main Image" layout="responsive" height={350} width={350} />
        </div>
        <div className="absolute bottom-0 left-0">
          <Image src="/main_image_2.png" alt="Main Image 2" layout="responsive" height={350} width={350} />
        </div>
      </div>
     */}
    </div>
  );
};
