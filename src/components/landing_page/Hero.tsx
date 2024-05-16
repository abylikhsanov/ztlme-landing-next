'use client'

import { motion} from "framer-motion";
import { Button } from "@/components/ui/button"
import { CardBody, CardContainer, CardItem } from "@/lib/CardContainer";
import { AuroraBackground} from "@/lib/aurora-background";
import {AnimatedPlaceholders} from "@/lib/text-vanish";
import { Typewriter, Cursor } from 'react-simple-typewriter';

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

export function AuroraBackgroundDemo({handleClick}:{handleClick: () => void}) {
    const placeholders = [
        "Gjensidige",
        "If",
        "Tryg",
        "DNB Forsikring",
        "Alle andre"
    ];
    
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center flex flex-row">
                    Glem  <p className="ml-4 text-red-700">
                        <Typewriter 
                        words={["If", "Gjensidige", "DNB", "Tryg"]} 
                        loop={true} 
                        typeSpeed={70} 
                        deleteSpeed={50} 
                        delaySpeed={1000} /> 
                        
                        </p>
                        <Cursor cursorStyle="|" /> 
                </div>
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                    Dekke bilen din på en{' '}
                    <span className='text-blue-500'>ny</span>{' '}
                    måte
                </div>
                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
                    Uten problem, uten stress
                </div>
                <button className="bg-blue-700 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
                        onClick={handleClick}>
                    Hva mener du?
                </button>
            </motion.div>
        </AuroraBackground>
    );
}
