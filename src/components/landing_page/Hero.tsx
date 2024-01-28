'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

import { GetLoginLink } from "../../api/BackendAPI"
import MaxWidthComponent from "@/components/MaxWidthComponent";
import {buttonVariants} from "@/components/ui/button";
import { Button } from "@/components/ui/button"


const mainText = "Fremtidens forsikring for deg som ønsker trygghet og lønnsom avkastning"

const underText = "Si farvel til tradisjonelle profittjagende forsikringsselskaper og hei til ztl.me - den nyskapende løsningen som tilbyr rimelig dekning med full\n" +
    "transparens og avkastning."

export const Hero = ({handleClick}:{handleClick: () => void}) => {

  return (

      <div className="relative w-full overflow-hidden">
          {/* Responsive aspect ratio for the video container */}
          <div className="w-full h-96 mt-36 sm:h-auto sm:mt-0 sm:aspect-video"> {/* Adjusted for 16:9 aspect ratio */}
              {/* Background video */}
              <video
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                  style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
              >
                  <source src="/cow.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>

              {/* Semi-transparent overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-0"></div>

              {/* Overlay content */}
              <div
                  className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 text-center z-10">
                  <div className="w-full px-4 md:px-8 max-w-4xl mx-auto">
                      <h1 className='text-gray-100 text-2xl md:text-4xl lg:text-6xl font-bold'>
                          Fremtidens forsikring for deg som ønsker{' '}
                          <span className='text-blue-500'>trygghet</span>{' '}
                          og{' '}
                          <span className='text-blue-500'>lønnsom avkastning</span>
                      </h1>
                      <p className='mt-4 mb-8 text-gray-100 text-xs md:text-lg lg:text-xl font-semibold'>
                          Si farvel til tradisjonelle profittjagende forsikringsselskaper og hei til ztl.me - den
                          nyskapende
                          løsningen som tilbyr rimelig
                          dekning med full transparens og avkastning.
                      </p>
                      <Button variant={"default"} className="bg-blue-500 text-xs md:text-sm lg:text-md">Bli med
                          -{">"}</Button>
                  </div>
              </div>
          </div>
      </div>


  );
};
