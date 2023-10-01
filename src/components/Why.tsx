"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "antd";

export const Why = () => {
  const [firstFeatureOpened, setFirstFeatureOpened] = useState(false);
  const [secondFeatureOpened, setSecondFeatureOpened] = useState(false);
  const [thirdFeatureOpened, setThirdFeatureOpened] = useState(false);
  const [fourthFeatureOpened, setFourthFeatureOpened] = useState(false);

  return (
    <div className="flex flex-col m-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center p-4 max-w-3xl mx-auto rounded-lg mb-24">
        <h1 className="font-bold font-dm text-3xl mb-4">Hvorfor ztl.me?</h1>
        <p className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">
          Selvforsikring er en person som selv helt eller delvis vil bære risikoen for skade eller tap. Fordelene med selvforsikring er mange, men største
          fordelen er at du som selvforsikrer er like trygg som med en tradisjonell forsikring.{" "}
        </p>
        <p className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">
          Det er de færreste som har denne muligheten alene fordi det potensielt kan kreve store summer utbedre skader eller erstatte tap. Derfor har vi
          etablert ztl.me slik at du likevel kan nyte godt av fordelene selvforsikring gir. Viste du forresten at forløperen til Gjensidige var lokale
          brannkasser som ble etablert som selvforsikring av bønder og kjøpmenn?
        </p>
      </div>

      {/* First feature */}
      <Features
        header="Får penger tilbake"
        text="Ingen krav? Dine bidrag forblir dine. Selv om det eksakte beløpet kan variere basert på fellesskapets behov, kan du være trygg på at ubenyttede midler forblir innenfor fellesskapet. Dine penger respekteres, ikke kastet bort. Tradisjonelle Modeller: Bare i 2022 betalte nordmenn 29 milliarder NOK i bilforsikring, med bare 18,490 milliarder NOK hevdet. Forestill deg potensialet med ZTL.ME!"
        smallText="Ingen krav? Dine bidrag forblir dine."
        featureOpened={firstFeatureOpened}
        setFirstFeatureOpened={setFirstFeatureOpened}
        reversedOrder={false}
        image="/body_1.png"
      />

      {/* Second feature */}
      <Features
        header="Transparent Tilnærming"
        text="Bidra enkelt med det du vanligvis ville betalt for forsikring hvert år. Omtrent en tredjedel av dette går til stabile investeringer som amerikanske
        obligasjoner. Legg til en beskjeden 400kr for plattformtilgang og en minimal 0,08% fra obligasjonsavkastning, og resten kanaliseres tilbake til
        bidragsytere som deg. Tradisjonelle Modeller: Du betaler sannsynligvis lignende beløp, men uten klarhet eller mulighet for avkastning. Ingen krav?
        De pengene forsvinner ofte i det blå."
        smallText="Bidra enkelt med det du vanligvis ville betalt for forsikring hvert år."
        featureOpened={secondFeatureOpened}
        setFirstFeatureOpened={setSecondFeatureOpened}
        reversedOrder={true}
        image="/body_2.png"
      />

      {/* Third feature */}
      <Features
        header="Styrke i Fellesskapet"
        text="Vi starter vår reise med et solid fundament av 40,000 medlemmer, som skaper en betydelig pott for å trygt håndtere eventuelle skadekrav. Vårt løfte?
        Vi aktiverer kun når vi når dette antallet, slik at du er del av et sterkt fellesskap fra første dag. Tradisjonelle Modeller: Selv om mange
        leverandører sprer risikoen over mange kunder, er deres hovedfokus ofte på profitt, ikke på dine faktiske behov."
        smallText="Vi starter vår reise med et solid fundament av 40,000 medlemmer."
        featureOpened={thirdFeatureOpened}
        setFirstFeatureOpened={setThirdFeatureOpened}
        reversedOrder={false}
        image="/body_3.png"
      />

      {/* Fourth feature */}
      <Features
        header="Sikkerhet med Fordeler"
        text="Vår store fellespott tilbyr et beskyttelsesnivå sammenlignbart med tradisjonelle modeller. Bonusen? Uhevede beløp returneres til medlemmene, ikke
        eksterne interessenter. Tradisjonelle Modeller: De premiene du ikke hevdet? De går ofte til aksjonærenes lommer eller øker selskapets overskudd."
        smallText="Vår store fellespott tilbyr et beskyttelsesnivå sammenlignbart med tradisjonelle modeller."
        featureOpened={fourthFeatureOpened}
        setFirstFeatureOpened={setFourthFeatureOpened}
        reversedOrder={true}
        image="/body_4.png"
      />
    </div>
  );
};

const Features = ({
  header,
  smallText,
  text,
  featureOpened,
  setFirstFeatureOpened,
  reversedOrder,
  image,
}: {
  header: string;
  smallText: string;
  text: string;
  featureOpened: boolean;
  setFirstFeatureOpened: (f: boolean) => void;
  reversedOrder: boolean;
  image: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white-100 p-4">
      {reversedOrder ? (
        <div className="flex flex-col p-4 rounded-lg justify-center md:w-1/2 md:mr-8 md:order-2">
          <h2 className="text-3xl font-bold font-dm mb-4 text-center">{header}</h2>
          {featureOpened ? (
            <p className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">{text}</p>
          ) : (
            <p className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">{smallText}</p>
          )}
          <Button type="default" className="mt-4 mx-auto" onClick={() => setFirstFeatureOpened(!featureOpened)}>
            {featureOpened ? "Lukk" : "Les mer"}
          </Button>
        </div>
      ) : (
        <div className="flex flex-col p-4 rounded-lg justify-center md:w-1/2 md:mr-8">
          <h2 className="text-3xl font-bold font-dm mb-4 text-center">{header}</h2>
          {featureOpened ? (
            <p className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">{text}</p>
          ) : (
            <p className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">{smallText}</p>
          )}
          <Button type="default" className="mt-4 mx-auto" onClick={() => setFirstFeatureOpened(!featureOpened)}>
            {featureOpened ? "Lukk" : "Les mer"}
          </Button>
        </div>
      )}
      {reversedOrder ? (
        <div className="md:w-1/2 flex justify-center items-center md:order-1">
          <Image className="rounded-lg" src={image} alt="Body 1" layout="responsive" height={400} width={600} />
        </div>
      ) : (
        <div className="md:w-1/2 flex justify-center items-center">
          <Image className="rounded-lg" src={image} alt="Body 1" layout="responsive" height={400} width={600} />
        </div>
      )}
    </div>
  );
};
