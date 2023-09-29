"use client";

import React, { useState, useEffect } from "react";
import { Card, List } from "antd";
import { Slider, Switch } from 'antd';


export const Calculator = () => {
  const [years, setYears] = useState(1);
  const [savedAmount, setSavedAmount] = useState(0);

  const totalPeople = 40000;
  const amountPerPerson = 10000;
  const totalPool = totalPeople * amountPerPerson;
  const spentOnClaims = (2 / 3) * totalPool;
  const availablePerPerson = (totalPool - spentOnClaims) / totalPeople;
  const annualEarningsRate = 0.12;

  const headerText = "Dine Potensielle besparesler"
  const underText = "Se på dine potensielle besparesler over tid"

  const data = [
    {
      title: "Totalt folk meldte seg på",
      content: totalPeople.toLocaleString('fr-FR')
    },
    {
       title: "Innbetaling fra hver person",
       content: Number(amountPerPerson.toFixed(1)).toLocaleString('fr-FR')
    },
    {
      title: "Fellespenger i starten",
      content: Number(totalPool.toFixed(1)).toLocaleString('fr-FR')
    },
    {
      title: "penger brukt til krav (2/3)",
      content: Number(spentOnClaims.toFixed(1)).toLocaleString('fr-FR')
    },
    {
      title: "Penger igjen til hver person",
      content: Number(availablePerPerson.toFixed(1)).toLocaleString('fr-FR')
    },
    {
      title: "Uten krav, tilgjengelig sum",
      content: Number(availablePerPerson.toFixed(1)).toLocaleString('fr-FR')
    },
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
    <div className="flex flex-col m-8 p-4 bg-white shadow-md rounded-lg max-w-2xl mx-auto bg-blue-100">

      <h1 className="text-[#004ac5] text-2xl font-bold font-dm mb-4">{headerText}</h1>
      <p className="text-gray-600 mb-6">{underText}</p>

      <div className="flex flex-col items-center mb-6">
        <label htmlFor="years" className="mb-2">År: {years}</label>
        <input 
          type="range" 
          id="years" 
          name="years" 
          min="1" 
          max="10" 
          value={years} 
          onChange={(e) => setYears(Number(e.target.value))} 
          className="w-full"
        />
      </div>

      <div className="text-center flex flex-col">
        <span className="text-lg">Avkastning etter {years} år med 12 % årlig avkastning: </span>
        <span className="text-[#004ac5] mt-2 ml-2 text-2xl font-bold">{Number(savedAmount.toFixed(0)).toLocaleString('fr-FR')} NOK</span>
      </div>

      <div className="flex flex-col p-8">
        {data.map((item, index) => (
            <div key={index} className="flex flex-row justify-between mb-2">
                <h2 className="font-dm text-md sm:text-sm md:text-md lg:text-md xl:text-md">{item.title}</h2>
                <p className="font-dm text-sm sm:text-xs md:text-sm lg:text-sm xl:text-sm">{item.content}</p>
            </div>
        ))}
      </div>

    </div>
  );
};


