"use client";

import { useState, useRef } from "react";

import { DownOutlined, UpOutlined } from "@ant-design/icons";

const textData = [
  {
    title: "Hva er selvforsikring?",
    content:
      "Selvforsikring betyr at en person selv helt eller delvis vil bære risikoen for skade eller tap. Selvforsikring vil over tid alltid lønne seg sammenliknet med å dekke risikoen gjennom en forsikring i et vanlig forsikringsselskap. Dette skyldes at kostnaden og sannsynligheten for skade eller tap skal inntreffe ikke følger hverandre. Tenk deg at du har en ny bil som koster  350 000 kroner. Hvis du vil selvforsikre denne må du i praksis ha tilsvarende sum tilgjengelig for å erstatte skade eller tap. Sagt med andre ord betyr dette at de færreste har denne muligheten fordi summen som kreves for å dekke en potensielle skade eller tap kan være høy. Sannsynligheten for at en stor skade eller et stort tap på bilen skal inntreffe er lav. Det er dette vanlige forsikringsselskaper utnytter, og du må betale en årlig forsikring som er høy.  Det forsikringsselskapet ikke forteller deg er at verditapet på bilen ikke samsvarer med forsikringssummen du betaler. Sagt med andre ord lønner det seg ikke med forsikring så lenge du har muligheten til å dekke det som må dukke opp av saker og tap på bilen i en lengre periode. Derfor har vi etablert ztl.me slik at du likevel kan nyte godt av fordelene selvforsikring gir. ",
  },
  {
    title: "Hva er ztl.me?",
    content:
      "ztl.me er et selvforsikringsselskap som eies av kundene selv. Fordelen for kundene i ztl.me er at kundene selv eier alle innbetalte midler. Enkelt forklart betyr det at alle midlene i selskapet som ikke går til å erstatte skade eller tap beholdes av kundene selv. Over flere år vil dette utgjøre betydelige summer, penger som i dag går rett i lommen på de store forsikringsselskapene og deres eiere. I tillegg vil kundene i ztl.me kunne forvente en hyggelig avkastning på innbetalte midler, samt renters rente effekt. Ifjor alene betalte nordmenn 29 milliarder kroner i bilforsikring, men bare 18,5 milliarder kroner ble benyttet til å dekke skade og tap. Forestill deg potensialet med ztl.me! Still deg selv følgende spørsmål: Har du hatt skade eller tap på bilen din som overstiger forsikringsinnbetalingene siste 10 år? Hvis svaret på dette er nei bør du bli kunde i ztl.me. ",
  },
  {
    title: "Hvordan fungerer ztl.me?",
    content:
      "ztl.me starter reisen med å utfordre forsikringsmarkedet med et solid fundament på 40000 selvforsikrere. Hvorfor akkurat 40000 selvforsikrere? Hvis man tar utgangspunkt i en gjennomsnittlig forsikringskunde i Norge sier matematiske forsikringsmodeller at man trenger 33000 kunder for å kunne drive lønnsom forsikringsvirksomhet. Dette inkluderer alle utbetalinger til skade og tap, samt drift og avkastning på egenkapitalen. Vi har derfor lagt oss på et litt høyere nivå slik at ztl.me har en ekstra god margin, noe som uansett kommer ztl.mes selvforsikrere til gode i form av avkastning. ytterligere til gode.",
  },
  {
    title: "Det norske forsikringsmarkedet",
    content:
      "Nordmenn bruker årlig xxx millarder på å forsikre sine verdier. Den største andelen er xx. I dag domineres privatmarkedet av fire selskaper som til sammen har 77,1 prosent av markedet. Forsikringsgiganten Gjensidig har alene 26,2% av markedet, mens If har 21,6 %, Fremtind 14,8 % og Tryg 14,1%. Hvorfor er det slik? For å kunne drive et forsikringsselskap må selskapet ha en konsesjon fra finanstilsynet. I utgangspunktet er kravet 260 millioner i egenkapital, samt at man til enhver tid har halvparten av egenkapitalen tilgjengelig - eller sagt på en annen måte 130 millioner kroner på bok. Det siste er i endring i disse dagers hvor nye forskriftene tar utgangspunkt i selskapet assets - altså verdien på objektene som er forsikret, og ikke egenkapitalen. Dette gjør at kravet til egenkapitalen reelt sett er langt høyere enn 260 millioner kroner. Dette fører til at det ikke er en naturlig konkurranse i markedet. De siste årene har det ikke kommet nye aktører. Fakta er at eksisterende aktører flytter sine norske hovedkontorer til ande land (f.eks. Sverige) for å unngå de nye forskritene og kravene til penger på bok. ",
  },
  {
    title: "Hvem står bak ztl.me?",
    content:
      "Atle Timenes er en seriegrunder som tidligere har etablert det norske robotselskapet wheel.me og CRM-selskapet CRM as. Atle har også jobbet mange år med forsikring, blant annet for Gjensidige forsikring. Atle er 53 år og har en mastergrad fra BI.  Abyl Iksanov har bakgrunn som gründer og CTO i wheel.me. Abyl er fra Kasakstan og kom til Norge i 2018. ",
  },
  {
    title: "ztl.me Holding AS",
    content:
      "Atle og Abyl har etablert selskapet xxx AS, som har utviklet en ny plattform for administrasjon av forsikringer. ztl.me har inngått en avtale om benytte denne. ztl.me betaler xxx as 45 kroner pr. kunde pr. måned, samt et forvaltningshonorar på xxxx prosent av kapitalplasseringer som gjøres gjennom plattformen. ",
  },
];

export const FAQ = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 p-4 max-w-5xl mx-auto">
      <div className="flex flex-col w-full max-w-3xl m-4 pb-4">
        <h1 className="font-dm font-bold text-3xl">FAQ</h1>
      </div>
      {textData.map((data, index) => (
        <Question key={index} title={data.title} content={data.content} />
      ))}
    </div>
  );
};

const Question = ({ title, content }: { title: string; content: string }) => {
  const [opened, setOpened] = useState(false);
  const questionRef = useRef(null);

  const handleClick = () => {
    setOpened(!opened);
    if (questionRef.current) {
      const element = questionRef.current as HTMLElement;
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col w-full max-w-3xl" ref={questionRef}>
      <div className="flex flex-row w-full max-w-3xl border-b-2 border-black mt-4 mb-2 pb-6 justify-between">
        <h2 className="font-dm text-xl">{title}</h2>
        {opened ? (<UpOutlined onClick={handleClick} />) : (<DownOutlined onClick={handleClick} />)}
      </div>
      {opened && (
        <div className="">
          <p className="font-dm text-lg text-gray-500">{content}</p>
        </div>
      )}
    </div>
  );
};
