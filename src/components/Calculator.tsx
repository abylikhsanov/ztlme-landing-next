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
    const futureValue = availablePerPerson * Math.pow((1 + annualEarningsRate), years);
    setSavedAmount(futureValue - availablePerPerson);
  }, [years]);

  return (
    <div className="flex flex-col bg-blue-300 justify-center items-center p-8">
      <div className="flex flex-row justify-around">
        <span>Total people signed up: </span>
        <span>{totalPeople}</span>
      </div>
      <div>Each person submitted: {amountPerPerson} NOK</div>
      <div>Pool at the start: {totalPool} NOK</div>
      <div>Amount spent on claims after 1 year: {spentOnClaims} NOK</div>
      <div>Available per person: {availablePerPerson.toFixed(2)} NOK</div>
      <div>If you didnt claim, available sum: 3,333 NOK</div>

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
        Potential money saved with approximately 12% annual earnings on 3,333 NOK for {years} years: {savedAmount.toFixed(2)} NOK
      </div>
    </div>
  );
};
