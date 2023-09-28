'use client'

import React, { useState, useEffect } from 'react';

export const Calculator = () => {
  const [years, setYears] = useState(1);
  const [savedAmount, setSavedAmount] = useState(0);

  const totalPeople = 40000;
  const amountPerPerson = 10000;
  const totalPool = totalPeople * amountPerPerson;
  const spentOnClaims = (2 / 3) * totalPool;
  const availablePerPerson = (totalPool - spentOnClaims) / totalPeople;
  const annualEarningsRate = 0.12;

  useEffect(() => {
    const futureValueAnnuity = (amount: number, rate: number, periods: number) => {
        return amount * ((Math.pow(1 + rate, periods) - 1) / rate);
    };

    const totalContributions = availablePerPerson * years;
    const totalInterest = futureValueAnnuity(availablePerPerson, annualEarningsRate, years) - totalContributions;

    setSavedAmount(totalContributions + totalInterest);
  }, [years]);

  return (
    <div className="flex flex-col bg-blue-300 p-2 max-w-2xl mx-auto">
      <InfoColumn info="Total people signed up: " value={totalPeople} />
      
      <InfoColumn info="Each person submitted: " value={amountPerPerson} />
      <InfoColumn info="Pool at the start: " value={totalPool} />
      <InfoColumn info="Amount spent on claims after 1 year: " value={Number(spentOnClaims.toFixed(1))} />
      <InfoColumn info="Available per person: " value={Number(availablePerPerson.toFixed(1))} />
      <InfoColumn info="If you didnt claim, available sum: " value={Number(availablePerPerson.toFixed(1))} />

      <div className="mt-4">
        <label htmlFor="years">Years: {years}</label>
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

      <div className="mt-4">
        Potential money saved with approximately 12% annual earnings on {3333 * years} for {years} years: {savedAmount.toFixed(2)} NOK
      </div>
    </div>
  );
};

const InfoColumn = ({info, value}:{info: string, value: number}) => {
    return (
        <div className="flex flex-row m-8 justify-between">
            <span className='font-dm'>{info}</span>
            <span className='font-dm font-bold'>{value}</span>
        </div>
    )
}
