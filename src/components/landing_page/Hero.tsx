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
      <MaxWidthComponent>
          <h1 className='max-w-4xl text-primary text-5xl font-bold md:text-6xl lg:text-6xl'>
              Fremtidens forsikring for deg som ønsker{' '}
              <span className='text-blue-600'>trygghet</span>{' '}
              trygghet og{' '}
              <span className='text-blue-600'>lønnsom avkastning</span>
          </h1>
          <p className='m-8 max-w-prose text-zinc-700 sm:text-lg'>
              Si farvel til tradisjonelle profittjagende forsikringsselskaper og hei til ztl.me - den nyskapende løsningen som tilbyr rimelig 
              dekning med full transparens og avkastning.
          </p>
          <Button variant={"default"} className="bg-blue-600">Bli med -{">"}</Button>
      </MaxWidthComponent>
  );
};
