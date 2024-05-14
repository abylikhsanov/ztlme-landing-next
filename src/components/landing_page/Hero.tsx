'use client'

import { Button } from "@/components/ui/button"
import { CardBody, CardContainer, CardItem } from "@/lib/CardContainer";

const mainText = "Fremtidens forsikring for deg som ønsker trygghet og lønnsom avkastning"

const underText = "Si farvel til tradisjonelle profittjagende forsikringsselskaper og hei til ztl.me - den nyskapende løsningen som tilbyr rimelig dekning med full\n" +
    "transparens og avkastning."

export const Hero = ({handleClick}:{handleClick: () => void}) => {

  return (
      <CardContainer className="relative w-full overflow-hidden rounded-3xl mt-24">
          {/* Responsive aspect ratio for the video container */}
          <CardBody className=" w-full sm:h-auto sm:mt-0 sm:aspect-video overflow-hidden">
              {/* Background video */}
              <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                  style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
              >
                  <source src="/cow_hd.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>

              {/* Semi-transparent overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-0"></div>
              
              {/* Overlay content */}
              <div
                  className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 text-center z-10">
                  <div className="w-full px-4 md:px-8 max-w-4xl mx-auto">
                      <CardItem translateZ="50"
                                translateX="-20"
                                translateY="-10"
                                className='text-gray-100 text-2xl md:text-4xl lg:text-6xl font-bold tracking-wider leading-normal'>
                          Fremtidens forsikring for deg som ønsker{' '}
                          <span className='text-blue-500'>trygghet</span>{' '}
                          og{' '}
                          <span className='text-blue-500'>lønnsom avkastning</span>
                      </CardItem>
                      <CardItem as="p"
                                translateZ="120"
                                translateX="-20"
                                className='mt-4 mb-8 text-gray-100 text-sm md:text-lg lg:text-xl font-medium'>
                          Si farvel til tradisjonelle profittjagende forsikringsselskaper og hei til ztl.me - den
                          nyskapende løsningen som tilbyr rimelig
                          dekning med full transparens og avkastning.
                      </CardItem>
                      <Button variant={"default"}
                              className="bg-blue-500 text-sm md:text-md lg:text-lg hover:bg-blue-600 transition-colors shadow px-6 py-2 rounded-full"
                      onClick={handleClick}>Bli
                          med -{">"}</Button>
                  </div>
              </div>
          </CardBody>
      </CardContainer>
  );
};
