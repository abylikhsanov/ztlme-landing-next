"use client";

import React, { useState, useEffect, useRef } from "react";
import { Slider } from 'antd';
import { useSpring, animated } from 'react-spring';

export const Calculator = () => {
  const [years, setYears] = useState(1);
  const [savedAmount, setSavedAmount] = useState(0);
  const [futureAmounts, setFutureAmounts] = useState(Array<number>);
  const [disabled, setDisabled] = useState(false);

  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };

  const totalPeople = 40000;
  const amountPerPerson = 12000;
  const totalPool = totalPeople * amountPerPerson;
  const spentOnClaims = (2 / 3) * totalPool;
  const availablePerPerson = (totalPool - spentOnClaims) / totalPeople;
  const annualEarningsRate = 0.05;

  const headerText = "Dine Potensielle besparesler"
  const underText = "Se på dine potensielle besparesler over tid"
  
  function GetTotalReturnAmount(givenYears: number) : number {
    const totalContributions = availablePerPerson * givenYears;
    const totalInterest =
        futureValueAnnuity(availablePerPerson, annualEarningsRate, givenYears) -
        totalContributions;
    return totalContributions + totalInterest;
  }

  const data = [
    {
      title: "Totalt folk meldte seg på",
      content: totalPeople.toLocaleString('fr-FR')
    },
    {
       title: "Din nåværende forsikring per år**",
       content: Number(amountPerPerson.toFixed(1)).toLocaleString('fr-FR') + " kr"
    },
    {
      title: "Fellespenger i starten",
      content: Number(totalPool.toFixed(1)).toLocaleString('fr-FR') + " kr"
    },
    {
      title: "penger brukt til krav (2/3)**",
      content: Number(spentOnClaims.toFixed(1)).toLocaleString('fr-FR') + " kr"
    },
    /*{
      title: "Penger igjen til",
      content: Number(availablePerPerson.toFixed(1)).toLocaleString('fr-FR') + " kr"
    },*/
    {
      title: "Uten krav, tilgjengelig sum",
      content: Number(availablePerPerson.toFixed(1)).toLocaleString('fr-FR') + " kr"
    }
  ];

  const futureValueAnnuity = (
      amount: number,
      rate: number,
      periods: number
  ) => {
    return amount * ((Math.pow(1 + rate, periods) - 1) / rate);
  };
  
  let fA = Array<number>(5).fill(1, 1, 5);
  fA.map(n => GetTotalReturnAmount(n));
  // setFutureAmounts(fA);

  useEffect(() => {
    
    setSavedAmount(GetTotalReturnAmount(years));
  }, [years]);

  return (
    <div className="flex flex-col m-8 p-4 bg-white shadow-md rounded-lg max-w-7xl mx-auto bg-blue-100">

      <h1 className="text-2xl font-bold font-dm mb-4">{headerText}</h1>
      <p className="text-gray-600 mb-6">{underText}</p>

      <p className="font-dm text-center text-lg">År {years}</p>

      <Slider defaultValue={1} onChange={(e) => setYears(Number(e))} disabled={disabled} min={1} max={5} step={1} />

      <div className="flex flex-col md:flex-row justify-around items-center">
        {/*<Graph x_axis={[0, 1, 2, 3, 4, 5]} y_axis={fA} nok_value={Number(savedAmount.toFixed(0))}/>*/}
        <div className="py-7">
          <div className="text-center flex flex-col mb-4">
            <span className="text-lg">Avkastning etter {years} år hos ztl.me*: </span>
            <span
                className="mt-2 ml-2 text-2xl font-bold">{Number(savedAmount.toFixed(0)).toLocaleString('fr-FR')} kr</span>
          </div>
          <div className="text-center flex flex-col">
            <span className="text-lg">Avkastning hos tradisjonelle selskaper: </span>
            <span className="mt-2 ml-2 text-2xl font-bold">Alltid 0 kr</span>
          </div>
        </div>
      </div>


      <div className="flex flex-col p-8">
        {data.map((item, index) => (
            <div key={index} className="flex flex-row justify-between mb-2">
              <h2 className="font-dm text-md sm:text-sm md:text-md lg:text-md xl:text-md">{item.title}</h2>
              <p className="font-dm text-sm sm:text-xs md:text-sm lg:text-sm xl:text-sm">{item.content}</p>
            </div>
        ))}

        <div className="flex flex-col mt-8">
          <p className="font-dm text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs">* Potensiell avkastning gitt at det er 12% avkastning hvert år</p>
          <p className="font-dm text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs">** Exampel på bilforsikring pris</p>
        </div>
      </div>
      
    </div>
  );
};


export const TaxCalculator: React.FC = () => {
  const [years, setYears] = useState(1);
  const [savedAmount, setSavedAmount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const onChange = (event: any, value: number | number[]) => {
    setYears(value as number);
  };

  const totalPeople = 40000;
  const amountPerPerson = 12000;
  const totalPool = totalPeople * amountPerPerson;
  const spentOnClaims = (2 / 3) * totalPool;
  const availablePerPerson = (totalPool - spentOnClaims) / totalPeople;
  const annualEarningsRate = 0.05;

  const headerText = "Dine Potensielle besparesler";
  const underText = "Se på dine potensielle besparesler over tid";

  const GetTotalReturnAmount = (givenYears: number): number => {
    const totalContributions = availablePerPerson * givenYears;
    const totalInterest =
        futureValueAnnuity(availablePerPerson, annualEarningsRate, givenYears) -
        totalContributions;
    return totalContributions + totalInterest;
  };

  const data = [
    {
      title: "Totalt folk meldte seg på",
      content: totalPeople.toLocaleString('fr-FR'),
    },
    {
      title: "Din nåværende forsikring per år**",
      content: Number(amountPerPerson.toFixed(1)).toLocaleString('fr-FR') + " kr",
    },
    {
      title: "Fellespenger i starten",
      content: Number(totalPool.toFixed(1)).toLocaleString('fr-FR') + " kr",
    },
    {
      title: "Penger brukt til krav (2/3)**",
      content: Number(spentOnClaims.toFixed(1)).toLocaleString('fr-FR') + " kr",
    },
    {
      title: "Uten krav, tilgjengelig sum",
      content: Number(availablePerPerson.toFixed(1)).toLocaleString('fr-FR') + " kr",
    },
  ];

  const futureValueAnnuity = (amount: number, rate: number, periods: number) => {
    return amount * ((Math.pow(1 + rate, periods) - 1) / rate);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollTop = window.pageYOffset;
        const maxScroll = scrollRef.current.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScroll;

        const calculatedTax = Math.min(5000, scrollFraction * 5000);
        const calculatedMortgage = Math.min(300000, scrollFraction * 300000);

       
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setSavedAmount(GetTotalReturnAmount(years));
  }, [years]);

  const springProps = useSpring({
    savedAmount,
    from: { savedAmount: 0 },
    config: { duration: 500 },
  });

  return (
      <div ref={scrollRef} className="flex flex-col m-8 p-4 bg-white shadow-md rounded-lg max-w-7xl mx-auto bg-blue-100">
        <h1 className="text-2xl font-bold font-dm mb-4">{headerText}</h1>
        <p className="text-gray-600 mb-6">{underText}</p>

        <p className="font-dm text-center text-lg">År {years}</p>

        <Slider
            defaultValue={1}
            disabled={disabled}
            min={1}
            max={5}
            step={1}
        />

        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="py-7">
            <div className="text-center flex flex-col mb-4">
              <span className="text-lg">Avkastning etter {years} år hos ztl.me*: </span>
              <animated.span className="mt-2 ml-2 text-2xl font-bold">
                {springProps.savedAmount.to((val) => `${Number(val.toFixed(0)).toLocaleString('fr-FR')} kr`)}
              </animated.span>
            </div>
            <div className="text-center flex flex-col">
              <span className="text-lg">Avkastning hos tradisjonelle selskaper: </span>
              <span className="mt-2 ml-2 text-2xl font-bold">Alltid 0 kr</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-8">
          {data.map((item, index) => (
              <div key={index} className="flex flex-row justify-between mb-2">
                <h2 className="font-dm text-md">{item.title}</h2>
                <p className="font-dm text-sm">{item.content}</p>
              </div>
          ))}

          <div className="flex flex-col mt-8">
            <p className="font-dm text-xs">* Potensiell avkastning gitt at det er 12% avkastning hvert år</p>
            <p className="font-dm text-xs">** Exampel på bilforsikring pris</p>
          </div>
        </div>
      </div>
  );
};


