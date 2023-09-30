import Image from "next/image";

export const Why = () => {
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
        <div className="flex flex-col md:flex-row bg-white-100 p-4">
          <div className="flex flex-col p-4 rounded-lg justify-center md:w-1/2 md:mr-8">
            <h2 className="text-3xl font-bold font-dm mb-4 text-center">Få penger tilbake</h2>
            <p className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">
              Ingen krav? Dine bidrag forblir dine. Selv om det eksakte beløpet kan variere basert på fellesskapets behov, kan du være trygg på at ubenyttede
              midler forblir innenfor fellesskapet. Dine penger respekteres, ikke kastet bort. Tradisjonelle Modeller: Bare i 2022 betalte nordmenn 29
              milliarder NOK i bilforsikring, med bare 18,490 milliarder NOK hevdet. Forestill deg potensialet med ZTL.ME!
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image className="rounded-lg" src="/body_1.png" alt="Body 1" layout="responsive" height={400} width={600} />
          </div>
        </div>

        {/* Second feature */}
        <div className="flex flex-col md:flex-row bg-white-100 p-4">
          <div className="flex flex-col p-4 rounded-lg justify-center md:w-1/2 md:mr-8 md:order-2">
            <h2 className="text-3xl font-bold font-dm mb-4 text-center">Transparent Tilnærming</h2>
            <p className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">
              Bidra enkelt med det du vanligvis ville betalt for forsikring hvert år. Omtrent en tredjedel av dette går til stabile investeringer som
              amerikanske obligasjoner. Legg til en beskjeden 400kr for plattformtilgang og en minimal 0,08% fra obligasjonsavkastning, og resten kanaliseres
              tilbake til bidragsytere som deg. Tradisjonelle Modeller: Du betaler sannsynligvis lignende beløp, men uten klarhet eller mulighet for avkastning.
              Ingen krav? De pengene forsvinner ofte i det blå.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center md:order-1">
            <Image className="rounded-lg" src="/body_2.png" alt="Body 2" layout="responsive" height={400} width={600} />
          </div>
        </div>

        {/* Third feature */}
        <div className="flex flex-col md:flex-row bg-white-100 p-4">
          <div className="flex flex-col p-4 rounded-lg justify-center md:w-1/2 md:mr-8">
            <h2 className="text-3xl font-bold font-dm mb-4 text-center">Styrke i Fellesskapet</h2>
            <p className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">
              Vi starter vår reise med et solid fundament av 40,000 medlemmer, som skaper en betydelig pott for å trygt håndtere eventuelle skadekrav. Vårt
              løfte? Vi aktiverer kun når vi når dette antallet, slik at du er del av et sterkt fellesskap fra første dag. Tradisjonelle Modeller: Selv om mange
              leverandører sprer risikoen over mange kunder, er deres hovedfokus ofte på profitt, ikke på dine faktiske behov.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image className="rounded-lg" src="/body_3.png" alt="Body 3" layout="responsive" height={400} width={600} />
          </div>
        </div>

        {/* Fourth feature */}
        <div className="flex flex-col md:flex-row bg-white-100 p-4">
          <div className="flex flex-col p-4 rounded-lg justify-center md:w-1/2 md:mr-8 md:order-2">
            <h2 className="text-3xl font-bold font-dm mb-4 text-center">Sikkerhet med Fordeler</h2>
            <p className="text-sm sm:text-xl md:text-xl font-dm text-center text-gray-500">
              Vår store fellespott tilbyr et beskyttelsesnivå sammenlignbart med tradisjonelle modeller. Bonusen? Uhevede beløp returneres til medlemmene, ikke
              eksterne interessenter. Tradisjonelle Modeller: De premiene du ikke hevdet? De går ofte til aksjonærenes lommer eller øker selskapets overskudd.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center md:order-1">
            <Image className="rounded-lg" src="/body_4.png" alt="Body 4" layout="responsive" height={400} width={600} />
          </div>
        </div>


     
    </div>
  );
};

const temp = () => {
  return (
    <div className="flex flex-col m-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center p-4 max-w-lg mx-auto rounded-lg">
        <h1 className="font-bold font-dm text-2xl mb-4">Hvorfor ztl.me?</h1>
        <p className="font-dm text-sm text-center text-gray-500">
          Selvforsikring er en person som selv helt eller delvis vil bære risikoen for skade eller tap. Fordelene med selvforsikring er mange, men største
          fordelen er at du som selvforsikrer er like trygg som med en tradisjonell forsikring.{" "}
        </p>
        <p className="font-dm text-sm text-center text-gray-500">
          Det er de færreste som har denne muligheten alene fordi det potensielt kan kreve store summer utbedre skader eller erstatte tap. Derfor har vi
          etablert ztl.me slik at du likevel kan nyte godt av fordelene selvforsikring gir. Viste du forresten at forløperen til Gjensidige var lokale
          brannkasser som ble etablert som selvforsikring av bønder og kjøpmenn?
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 m-12">
        <div className="flex flex-col bg-blue-100 p-4 shadow-md rounded-lg">
          <h2 className="font-bold font-dm text-xl mb-4 text-[#004ac5]">Få penger tilbake </h2>
          <p className="font-dm text-sm text-center text-gray-500">
            Ingen krav? Dine bidrag forblir dine. Selv om det eksakte beløpet kan variere basert på fellesskapets behov, kan du være trygg på at ubenyttede
            midler forblir innenfor fellesskapet. Dine penger respekteres, ikke kastet bort. Tradisjonelle Modeller: Bare i 2022 betalte nordmenn 29 milliarder
            NOK i bilforsikring, med bare 18,490 milliarder NOK hevdet. Forestill deg potensialet med ZTL.ME!
          </p>
        </div>
        <Image className="rounded-lg" src="/body_1.png" alt="Body 1" height={250} width={250} />

        <div className="flex flex-col bg-white p-4 shadow-md rounded-lg">
          <h2 className="font-bold font-dm text-xl mb-4">Transparent Tilnærming</h2>
          <p className="font-dm text-sm text-center text-gray-500">
            Bidra enkelt med det du vanligvis ville betalt for forsikring hvert år. Omtrent en tredjedel av dette går til stabile investeringer som amerikanske
            obligasjoner. Legg til en beskjeden 400kr for plattformtilgang og en minimal 0,08% fra obligasjonsavkastning, og resten kanaliseres tilbake til
            bidragsytere som deg. Tradisjonelle Modeller: Du betaler sannsynligvis lignende beløp, men uten klarhet eller mulighet for avkastning. Ingen krav?
            De pengene forsvinner ofte i det blå.
          </p>
        </div>
        <div className="flex flex-col bg-white p-4 shadow-md rounded-lg">
          <h2 className="font-bold font-dm text-xl mb-4">Styrke i Fellesskapet</h2>
          <p className="font-dm text-sm text-center text-gray-500">
            Vi starter vår reise med et solid fundament av 40,000 medlemmer, som skaper en betydelig pott for å trygt håndtere eventuelle skadekrav. Vårt løfte?
            Vi aktiverer kun når vi når dette antallet, slik at du er del av et sterkt fellesskap fra første dag. Tradisjonelle Modeller: Selv om mange
            leverandører sprer risikoen over mange kunder, er deres hovedfokus ofte på profitt, ikke på dine faktiske behov.
          </p>
        </div>
        <div className="flex flex-col bg-blue-100 p-4 shadow-md rounded-lg">
          <h2 className="font-bold font-dm text-xl mb-4 text-[#004ac5]">Sikkerhet med Fordeler</h2>
          <p className="font-dm text-sm text-center text-gray-500">
            Vår store fellespott tilbyr et beskyttelsesnivå sammenlignbart med tradisjonelle modeller. Bonusen? Uhevede beløp returneres til medlemmene, ikke
            eksterne interessenter. Tradisjonelle Modeller: De premiene du ikke hevdet? De går ofte til aksjonærenes lommer eller øker selskapets overskudd.
          </p>
        </div>
      </div>
    </div>
  );
};
