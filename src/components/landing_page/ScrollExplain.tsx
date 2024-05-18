"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/lib/sticky-scroll-reveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PieAnimation } from "./PieAnimation";
import { ReturnGraph } from "./ReturnGraph";

export const ScrollTest = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.set(section, { opacity: index === 0 ? 1 : 0 });

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => gsap.to(section, { opacity: 1, duration: 1 }),
        onLeave: () => gsap.to(section, { opacity: 0, duration: 1 }),
        onEnterBack: () => gsap.to(section, { opacity: 1, duration: 1 }),
        onLeaveBack: () => gsap.to(section, { opacity: 0, duration: 1 }),
      });
    });
  }, []);

  return (
    <section id="Why" className="overflow-hidden">
      <div>
        <div className="flex flex-col relative">
          {/* Feature 1 */}
          <div ref={(el) => (sectionRefs.current[0] = el!)} className="relaitve h-screen w-screen flex flex-col justify-center items-center bg-[#2a2a33]">
            <PieAnimation />
          </div>
          {/* Feature 2 */}
          <div ref={(el) => (sectionRefs.current[1] = el!)} className="relative h-screen w-screen flex flex-col justify-center items-center">
            <div className="bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  Hvis bilforsikringen din koster deg
                  <span className="font-semibold text-blue-600"> 10 000 NOK</span> hvert år og hvis vi antar at omtrent{" "}
                  <span className="font-semibold text-blue-600">200 millioner NOK </span>
                  er utelatt av <span className="font-semibold text-blue-600"> 400 millioner NOK </span>
                  betalt ved årets slutt som uinnhentet sum (igjen baserer vi våre tall på en lang historisk data i Norge), vil du få rundt{" "}
                  <span className="font-semibold text-blue-600">4250 kr</span> tilbake hvis du ikke har krevd noe det året.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-light mt-4">
                  Hvis du krevde mer enn <span className="font-semibold text-blue-600">4250 NOK </span>
                  så ingen grunn til bekymring, du skylder ikke noe du bare ikke får refusjon.
                </p>
              </div>
            </div>
          </div>
          {/* Feature 3 */}
          <div ref={(el) => (sectionRefs.current[2] = el!)} className="relaitve h-screen w-screen flex flex-col justify-center items-center bg-black">
            <ReturnGraph />
          </div>
          {/* Feature 4 
          <div ref={(el) => (sectionRefs.current[3] = el!)} className="h-screen w-screen flex flex-col justify-center items-center">
            <h1 className="font-bold leading-normal font-dm text-4xl mb-6">Statistics tell everything</h1>
            <p>Official data from statistics show that only a light higher sum of half of the car premiums are being used to pay claims</p>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export const ScrollExplain = () => {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const triggerRef = useRef<null | HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  return (
    <section>
      {/*<div>
            Show the pie animation and animate how pie fills in with premiums from 40k clients
            and then zoom in to show a small pie ownership in cooperative
            <p>
            ztl.me er en kooperativ modell som betyr at betalingen din faktisk 
            kjøper deg aksjer i kooperativet og du eier en liten kake av en stor kake. 
            Hvert år får du din del av uavhentet pai.
            </p>
        </div>
        <div>
        Hvis bilforsikringen din koster deg 10 000 NOK hvert år og hvis vi antar 
        at omtrent 200 millioner NOK er utelatt av 400 millioner NOK 
        betalt ved årets slutt som uinnhentet sum 
        (igjen baserer vi våre tall på en lang historisk data i Norge) , 
        vil du få rundt 4250 kr tilbake hvis du ikke har krevd noe det året.
         Hvis du krevde mer enn 4250 NOK så ingen grunn til bekymring, 
         du skylder ikke noe du bare ikke får refusjon.
        </div>
        <div>
        Forutsatt at du ikke gjør krav på de 5 årene, betyr det at du vil få 
        rundt 21 250 NOK tilbake, og på toppen av det eier du aksjer i 
        kooperativet ztl.me og vi investerer 10 % av uavhentet rest i 
        trygge obligasjoner som i gjennomsnitt gir avkastning 6 % årlig. 
        Det betyr at du kan få ekstra 3400 NOK som aksjeeierskap hos ztl.me!
        </div>*/}
    </section>
  );
};
