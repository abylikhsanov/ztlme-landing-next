"use client";

import {useState} from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button"
import { StickyScroll} from "@/lib/sticky-scroll-reveal";

export const Why = () => {
    return (
        <div className="">
            <StickyScroll content={content} />
        </div>
    )
}

export const Ahy = () => {
    const [firstFeatureOpened, setFirstFeatureOpened] = useState(false);
    const [secondFeatureOpened, setSecondFeatureOpened] = useState(false);
    const [thirdFeatureOpened, setThirdFeatureOpened] = useState(false);

    return (
        <div className="flex flex-col m-12 max-w-7xl mx-auto">
            <div
                        className="flex flex-col items-center p-8 max-w-4xl mx-auto rounded-xl mb-24 bg-gray-50 shadow-xl">
                <h1 className="font-bold leading-normal font-dm text-4xl mb-6">Hvorfor ztl.me?</h1>
                <p className="text-md md:text-lg lg:text-xl font-dm text-center text-gray-600 leading-relaxed">
                    ztl.me starter reisen med å utfordre forsikringsmarkedet med et solid fundament på 40 000
                    selvforsikrere. Hvorfor akkurat 40 000 selvforsikrere? Hvis
                    man tar utgangspunkt i en gjennomsnittlig forsikringskunde i Norge sier matematiske
                    forsikringsmodeller at man trenger 33 000 kunder for å kunne drive
                    lønnsom forsikringsvirksomhet. Dette inkluderer alle utbetalinger til skade og tap, samt drift og
                    avkastning på egenkapitalen. Vi har derfor lagt oss
                    på et litt høyere nivå slik at ztl.me har en ekstra god margin, noe som uansett kommer ztl.mes
                    selvforsikrere til gode i form av avkastning.
                    Ytterligere til gode.
                </p>
                {/* Add a button or call to action if applicable */}
                {/* <button className="mt-6 bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300">Learn More</button> */}
            </div>

            <div>
                {/* First feature */}
                <Features
                    header="Trygghet med fordeler"
                    text="Det solide fundamentet til ztl.me tilbyr et beskyttelsesnivå som er sammenlignbart med et hvilket som helst tradisjonelt forsikringsselskap. Som vi viste gjennom bileksempelet er det store summer som er ubenyttede, og som utgjør kjernen i forsikringsselskapene forretningsmodell. I motsetning til de store tradisjonelle forsikringsselskapene hvor disse midlene havne i eiernes lommer, fordeles midlene på ztl.mes selvforsikrere."
                    smallText="Det solide fundamentet til ztl.me tilbyr et beskyttelsesnivå som er sammenlignbart med et hvilket som helst tradisjonelt forsikringsselskap."
                    featureOpened={firstFeatureOpened}
                    setFirstFeatureOpened={setFirstFeatureOpened}
                    reversedOrder={false}
                    image="/body_1.png"
                />
            </div>

            <div>
                {/* Second feature */}
                <Features
                    header="Vårt løfte"
                    text="Når du flytter dine forsikringer til ztl.me gir vi deg en garanti:  du vil betale det samme eller mindre som du gjør i dag, og ha like gode betingelser. 
        I tillegg har du mulighet til å få tilbake en del av pengen med avkastning! Det kan ikke forsikringsselskapene tilby. 
        Grunnen er at det er selvforsikrerne i ztl.me som eier midlene selv.  Jo fortere du flytter forsikringen din til ztl.me, jo mer lønnsomt kan det bli."
                    smallText="Du vil betale det samme eller mindre som du gjør i dag"
                    featureOpened={secondFeatureOpened}
                    setFirstFeatureOpened={setSecondFeatureOpened}
                    reversedOrder={true}
                    image="/body_2.png"
                />
            </div>

            <div>

                {/* Third feature */}
                <Features
                    header="Styrk felleskapet"
                    text="De store tradisjonelle forsikringsselskapene skiller ikke på kunde i form av lojalitet, størrelse eller atferd. 
        Alle innbetalingen går til eierne uansett. Har du en skade på f.eks. bil kan du oppleve at forsikringspremien blir høyere, men det påvirker ikke en annen kunde som ikke har skade.
        Hovedfokus er på profitt, ikke på dine faktiske behov. I ztl.me vil en skadefri eller skadebegensende atferd lønne seg for alle. Da blir det mer å fordele til felleskapet. 
        I en tid hvor prisene stiger og ting blir dyrere tror vi på at dette er en modell som styrker fellesskapet og bidrar til demokratisering av forsikringer"
                    smallText="I ztl.me vil en skadefri eller skadebegensende atferd lønne seg for alle."
                    featureOpened={thirdFeatureOpened}
                    setFirstFeatureOpened={setThirdFeatureOpened}
                    reversedOrder={false}
                    image="/body_3.png"
                />
            </div>
</div>
)
    ;
};

const content = [
    {
        title: "Hvorfor ztl.me?",
        description: "ztl.me starter reisen med å utfordre forsikringsmarkedet med et solid fundament på 40 000\n" +
            "                selvforsikrere. Hvorfor akkurat 40 000 selvforsikrere? Hvis\n" +
            "                man tar utgangspunkt i en gjennomsnittlig forsikringskunde i Norge sier matematiske\n" +
            "                forsikringsmodeller at man trenger 33 000 kunder for å kunne drive\n" +
            "                lønnsom forsikringsvirksomhet. Dette inkluderer alle utbetalinger til skade og tap, samt drift og\n" +
            "                avkastning på egenkapitalen. Vi har derfor lagt oss\n" +
            "                på et litt høyere nivå slik at ztl.me har en ekstra god margin, noe som uansett kommer ztl.mes\n" +
            "                selvforsikrere til gode i form av avkastning.\n" +
            "                Ytterligere til gode.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/body_1.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Trygghet med fordeler",
        description:
            "Det solide fundamentet til ztl.me tilbyr et beskyttelsesnivå som er sammenlignbart med et hvilket som helst tradisjonelt forsikringsselskap. Som vi viste gjennom bileksempelet er det store summer som er ubenyttede, og som utgjør kjernen i forsikringsselskapene forretningsmodell. I motsetning til de store tradisjonelle forsikringsselskapene hvor disse midlene havne i eiernes lommer, fordeles midlene på ztl.mes selvforsikrere.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/body_2.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "",
        description: "",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/body_3.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "",
        description: "",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/body_1.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
]

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
                    <Button variant="default" className="mt-4 mx-auto bg-blue-600"
                            onClick={() => setFirstFeatureOpened(!featureOpened)}>
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
                    <Button variant="default" className="mt-4 mx-auto bg-blue-600"
                            onClick={() => setFirstFeatureOpened(!featureOpened)}>
                        {featureOpened ? "Lukk" : "Les mer"}
                    </Button>
                </div>
            )}
            {reversedOrder ? (
                <div className="md:w-1/2 flex justify-center items-center md:order-1">
                    <Image className="rounded-lg" src={image} alt="Body 1" layout="responsive" height={400}
                           width={600}/>
                </div>
            ) : (
                <div className="md:w-1/2 flex justify-center items-center">
                    <Image className="rounded-lg" src={image} alt="Body 1" layout="responsive" height={400}
                           width={600}/>
                </div>
            )}
        </div>
    );
};
