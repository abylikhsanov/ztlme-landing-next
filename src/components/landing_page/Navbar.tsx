"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/lib/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarComponent({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Nav className="top-2" handleClick={handleClick} />
    </div>
  );
}

function Nav({ className, handleClick }: { className?: string; handleClick: () => void }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex flex-row w-full justify-between items-center mx-4">
          <Image src="/ztlme_logo.png" className="justify-center items-center" alt="Company Logo" width={70} height={20} />
          <div className="flex flex-row justify-center space-x-4 px-8">
            <MenuItem setActive={setActive} active={active} item="Om ztl.me" />
            <MenuItem setActive={setActive} active={active} item="Fordeler" />
            <MenuItem setActive={setActive} active={active} item="FAQ" />
          </div>
          <div className="right-2">
            <button className="bg-blue-700 dark:bg-white rounded-full text-white dark:text-black px-2 h-10 w-24" onClick={handleClick}>
              Bli med
            </button>
          </div>
        </div>
      </Menu>
    </div>
  );
}
