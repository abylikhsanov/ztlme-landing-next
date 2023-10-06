"use client";

import React, { useState, useEffect } from "react";
import { Slider } from 'antd';


export const Calculator = () => {
  const [years, setYears] = useState(1);
  const [savedAmount, setSavedAmount] = useState(0);

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

  useEffect(() => {
    const futureValueAnnuity = (
      amount: number,
      rate: number,
      periods: number
    ) => {
      return amount * ((Math.pow(1 + rate, periods) - 1) / rate);
    };
    

    const totalContributions = availablePerPerson * years;
    const totalInterest =
      futureValueAnnuity(availablePerPerson, annualEarningsRate, years) -
      totalContributions;

    setSavedAmount(totalContributions + totalInterest);
  }, [years]);

  return (
    <div className="flex flex-col m-8 p-4 bg-white shadow-md rounded-lg max-w-7xl mx-auto bg-blue-100">

      <h1 className="text-2xl font-bold font-dm mb-4">{headerText}</h1>
      <p className="text-gray-600 mb-6">{underText}</p>

      <p className="font-dm text-center text-lg">År {years}</p>

      <Slider defaultValue={1} onChange={(e) => setYears(Number(e))} disabled={disabled} min={1} max={10} step={1} />

      <div className="text-center flex flex-col mb-4">
        <span className="text-lg">Avkastning etter {years} år hos ztl.me*: </span>
        <span className="mt-2 ml-2 text-2xl font-bold">{Number(savedAmount.toFixed(0)).toLocaleString('fr-FR')} kr</span>
      </div>

      <div className="text-center flex flex-col">
        <span className="text-lg">Avkastning hos tradisjonelle selskaper: </span>
        <span className="mt-2 ml-2 text-2xl font-bold">Alltid 0 kr</span>
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


