'use client'

import { useEffect, useState } from "react";
import { Button } from "antd";
import Image from "next/image";

import { GetUrlRoot } from "../../api/BackendAPI"

export const HeroSignedUp = ({handleClick}:{handleClick: () => void}) => {

    const [token, setToken] = useState("");

    useEffect(() => {
        const fragment = window.location.hash.slice(1);
        console.log(`Fragment is ${fragment}`);
    
        if (fragment) {
          localStorage.setItem("token", fragment);
          setToken(fragment);
        }
      }, []);

  return (
    <div className="flex flex-col m-40 items-center justify-center max-w-5xl mx-auto">
      <div className="flex items-center justify-center text-center m-6">
        <span className="font-dm font-bold text-5xl">Takk for din interese!</span>
      </div>
      <div className="flex max-w-3xl m-6 items-center justify-center text-center3">
        <span className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">
        Vil du bytte forsikring til ztl.me så snart vi får nok kunder? I så fall kan du se gjennom dokumentet og signere hvis du er enig
        </span>
      </div>
      <Button type="primary" shape="round" className="bg-[#1677ff]" size="large" onClick={handleClick}>
        Se dokument
      </Button>

    </div>
  );
};
