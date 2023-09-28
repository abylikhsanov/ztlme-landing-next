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

  const data = [
    {
      title: "Total people signed up",
      content: totalPeople
    },
    {
       title: "Each person submitted",
       content: amountPerPerson
    },
    {
      title: "Pool at the start",
      content: totalPool
    },
    {
      title: "Amount spent on claims (2/3)",
      content: Number(spentOnClaims.toFixed(1))
    },
    {
      title: "Available per person",
      content: Number(spentOnClaims.toFixed(1))
    },
    {
      title: "If you didnt claim, available sum",
      content: Number(availablePerPerson.toFixed(1))
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
    <div className="flex flex-col m-8 p-2 max-w-2xl mx-auto">

      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card className="font-dm" title={item.title}>{item.content}</Card>
          </List.Item>
        )}
      />

      <div className="mt-4">
        <div className="mb-4">
          <span className="font-dm">Return after {years} years with 12% annual return: {savedAmount.toFixed(0)} NOK</span>
        </div>
        <Slider defaultValue={1} min={1} max={10} onChange={(value) => setYears(Number(value))}/>
      </div>

    </div>
  );
};

