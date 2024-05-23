"use client";

import {useState, useRef, useEffect} from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {StickyScroll} from "@/lib/sticky-scroll-reveal";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {TextGenerateEffect} from "@/lib/text-generate-effect";

export const ScrollComponent = () => {
    const sectionRef = useRef<null | HTMLDivElement>(null);
    const triggerRef = useRef<null | HTMLDivElement>(null);
    const [firstFeatureOpened, setFirstFeatureOpened] = useState(false);
    const [secondFeatureOpened, setSecondFeatureOpened] = useState(false);
    const [thirdFeatureOpened, setThirdFeatureOpened] = useState(false);
    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section id={"Why"} className="overflow-hidden">
            <div ref={triggerRef}>
                <div className="h-screen w-400vw flex flex-row relative" ref={sectionRef}>
                    {/* Feature 1 */}
                    <div className="h-screen w-screen flex flex-col justify-center items-center">
                        <h1 className="font-bold leading-normal font-dm text-4xl mb-6">Ny måte?</h1>
                        <div
                            className="p-8 text-md md:text-lg lg:text-xl font-dm text-center text-gray-600 leading-relaxed space-y-6">
                            <p>Visste du at nesten halvparten av de betalte bilpremiene går til forsikringsselskapene
                                nesten hvert år?</p>
                            <p>Forsikringsmarkedet er stort, kjedelig, kundefiendtlig, gammeldags, dyrt og har ikke
                                innovert sin modell</p>
                            <p>siden før WW1 – og dominert av noen få store aktører. Det eneste formålet med ZTL.ME er å
                                radikalt endre dette.</p>
                        </div>
                    </div>
                    {/* Feature 1.5 */}
                    <div className="h-screen w-screen flex flex-col justify-center items-center p-6">
                        <h1 className="font-bold leading-normal font-dm text-4xl mb-6">Kooperativ</h1>
                        <div className="p-8 text-md md:text-lg lg:text-xl font-dm text-center text-gray-600 leading-relaxed space-y-2">
                            <p>ztl.me er et kooperativ som vil involvere selvassurandører til å gå sammen ved å betale
                                inn</p>
                            <p>et årlig bidrag til kooperativet og hvert medlem eier da en liten prosentandel av
                                kooperativet.</p>
                            <p>Den samlede betalingen fra alle medlemmer vil da bli brukt til å dekke bilen din på en
                                mye bedre</p>
                            <p>måte enn du gjør i dag. Gitt at forsikringsselskaper historisk sett hadde overskudd på
                                bilpremier,</p>
                            <p>er det faktisk ikke nødvendig gitt at et stort nok medlem vil melde seg inn i et
                                selvforsikringskooperativ.</p>
                        </div>

                    </div>
                    {/* Feature 2 */}
                    <div className="h-screen w-screen flex flex-col justify-center items-center p-6">
                        <h1 className="font-bold leading-normal font-dm text-4xl mb-6">Forestill deg Mary</h1>
                        <div
                            className="p-8 text-md md:text-lg lg:text-xl font-dm text-center text-gray-600 leading-relaxed space-y-2">
                            <p>Mary jobber som CVC-investor i et stort energiselskap. Hun har forsikret bilen sin med et
                                tradisjonelt
                                forsikringsselskap og betaler 10000 NOK per år. På vei hjem fra jobb stoppet hun ved
                                matbutikken. Noen
                                kjørte på Marys Tesla da den var parkert, og ripet opp fordøren. Bilen trenger nå en
                                lakkering, som vil
                                koste ca. 5000 NOK.</p>
                            <p>Mary ringer sitt tradisjonelle forsikringsselskap, som kan dekke kostnaden. Men Mary må
                                betale 8000 NOK
                                i egenandel og vil få sin bonus redusert fra 80% til 70%. Dette vil koste henne ekstra
                                2000 NOK per år
                                de neste 4 årene, forutsatt at hun ikke har flere skader.</p>
                            <p>Mary bruker 4 timer på telefonen med kundeservice (hvorav 3 timer på å lytte til deres
                                ventemusikk
                                Lonely av Akon). Lakkeringen, hvis dekkes av forsikringsselskapet, vil totalt koste Mary
                                minst 13000 NOK
                                over 4 år, pluss innsatsen og bryet med å få tilbakebetalt pengene (de samme pengene hun
                                må betale
                                tilbake i løpet av de kommende månedene).</p>
                            <p>Som et resultat bestemmer Mary seg for å ikke bruke forsikringsdekningen og betale
                                lakkeringen på 5000
                                NOK selv, samtidig som hun fortsatt betaler forsikringsselskapet 10000 NOK i år.</p>
                            <p>På den positive siden mottok Mary et kundedividende på 2000 NOK fra forsikringsselskapet
                                før jul.</p>
                        </div>

                    </div>
                    {/* Feature 3 */}

                    <div className="h-screen w-screen flex flex-col justify-center items-center p-6">
                        <h1 className="font-bold leading-normal font-dm text-4xl mb-6 p-6">Marys Erfaring med
                            ztl.me</h1>
                        <div
                            className="p-8 text-md md:text-lg lg:text-xl font-dm text-center text-gray-600 leading-relaxed space-y-2">
                            <p>Mary, en CVC-investor i et stort energiselskap, selvforsikrer sin Tesla med ZTL.ME og
                                betaler 9900 NOK
                                årlig.</p>
                            <p>Nylig ble bilen hennes ripet opp igjen mens den var parkert. Lakkeringen var estimert til
                                5000
                                NOK. Mary dokumenterte skaden via ZTL.ME-appen og ble tilbudt en umiddelbar
                                Vipps-overføring på
                                4000 NOK eller full refusjon ved reparasjon. </p>
                            <p>Hun valgte overføringen på 4000 NOK, og brukte bare 2 minutter på
                                telefonen. Heldigvis tilbød lakkeringsverkstedet en rabatt, og hun betalte kun 4150
                                NOK.</p>
                            <p>Mary bestemte seg for å dekke dette selv i stedet for å bruke forsikringen, mens hun
                                fortsatte å
                                betale den årlige premien på 9500 NOK. </p>
                            <p>Til tross for hendelsen mottok Mary et kundedividende på 2000 NOK fra ZTL.ME før jul, som
                                kunne ha
                                vært 6000 NOK hvis hun ikke hadde vært uheldig. </p>
                            <p>I stedet for å håndtere lange forsikringssamtaler, kunne Mary nyte verdifull tid med
                                barna sine, og
                                forvandle en utfordring til en hjertelig opplevelse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const AWhy = () => {
    return (
        <div className="">
            <StickyScroll content={content}/>
        </div>
    );
};

export const Why = () => {
    const [firstFeatureOpened, setFirstFeatureOpened] = useState(false);
    const [secondFeatureOpened, setSecondFeatureOpened] = useState(false);
    const [thirdFeatureOpened, setThirdFeatureOpened] = useState(false);

    return (
        <div className="flex flex-col m-12 max-w-7xl mx-auto">
            <div className="flex flex-col items-center p-8 max-w-4xl mx-auto rounded-xl mb-24 bg-gray-50 shadow-xl">
                <h1 className="font-bold leading-normal font-dm text-4xl mb-6">Hvorfor ztl.me?</h1>
                <p className="text-md md:text-lg lg:text-xl font-dm text-center text-gray-600 leading-relaxed">
                    Visste du at nesten halvparten av de betalte bilpremiene går til forsikringsselskapene
                    nesten hvert år?
                    Forsikringsmarkedet er stort, kjedelig, kundefiendtlig, gammeldags, dyrt og har ikke
                    innovert sin modell
                    siden før WW1 – og dominert av noen få store aktører. Det eneste formålet med ZTL.ME er å
                    radikalt endre dette.
                    ztl.me er et kooperativ som vil involvere selvassurandører til å gå sammen ved å betale
                    inn
                    et årlig bidrag til kooperativet og hvert medlem eier da en liten prosentandel av
                    kooperativet.
                    Den samlede betalingen fra alle medlemmer vil da bli brukt til å dekke bilen din på en
                    mye bedre
                    enn du gjør i dag. Gitt at forsikringsselskaper historisk sett hadde overskudd på
                    bilpremier,
                    er det faktisk ikke nødvendig gitt at et stort nok medlem vil melde seg inn i et
                    selvforsikringskooperativ.
                </p>
                {/* Add a button or call to action if applicable */}
                {/* <button className="mt-6 bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300">Learn More</button> */}
            </div>

            <div>
                {/* First feature */}
                <Features
                    header="Forestill deg Mary"
                    text="Mary, en CVC-investor i et stort energiselskap, har en bilforsikring som koster henne 10 000 NOK per år. 
                    En dag blir hennes parkerte Tesla påkjørt, og lakkeringskostnaden er estimert til 5000 NOK. 
                    Hennes forsikringsselskap vil dekke skaden, men Mary må betale en egenandel på 8000 NOK og får sin bonus redusert fra 80% til 70%, 
                    noe som vil koste henne 2000 NOK ekstra per år de neste 4 årene. Etter å ha brukt 4 timer på telefon med kundeservice, 
                    innser Mary at forsikringen vil koste henne totalt 13 000 NOK over 4 år. Hun bestemmer seg derfor for å betale 
                    5000 NOK for lakkeringen selv og beholder sin forsikring til 10 000 NOK per år. 
                    Positivt nok mottok hun et kundedividende på 2000 NOK før jul."
                    smallText="Mary, en CVC-investor i et stort energiselskap, har en bilforsikring som koster henne 10 000 NOK per år."
                    featureOpened={firstFeatureOpened}
                    setFirstFeatureOpened={setFirstFeatureOpened}
                    reversedOrder={false}
                    image="/body_1.png"
                />
            </div>

            <div>
                {/* Second feature */}
                <Features
                    header="Marys Erfaring med ztl.me"
                    text="Mary, en CVC-investor i et stort energiselskap, selvforsikrer sin Tesla med ZTL.ME og betaler 9900 NOK årlig. Nylig ble bilen hennes ripet opp igjen mens den var parkert. Lakkeringen var estimert til 5000 NOK. Mary dokumenterte skaden via ZTL.ME-appen og ble tilbudt en umiddelbar Vipps-overføring på 4000 NOK eller full refusjon ved reparasjon.
                    Hun valgte overføringen på 4000 NOK og brukte bare 2 minutter på app. Heldigvis tilbød lakkeringsverkstedet en rabatt, og hun betalte kun 4150 NOK.
                    Til tross for hendelsen mottok Mary et kundedividende på 2000 NOK fra ZTL.ME før jul, som kunne ha vært 6000 NOK hvis hun ikke hadde vært uheldig.
                    I stedet for å håndtere lange forsikringssamtaler, kunne Mary nyte verdifull tid med barna sine, og forvandle en utfordring til en hjertelig opplevelse."
                    smallText="Med ztl.me betaler Mary mindre og får mer penger tilbake"
                    featureOpened={secondFeatureOpened}
                    setFirstFeatureOpened={setSecondFeatureOpened}
                    reversedOrder={true}
                    image="/body_2.png"
                />
            </div>

            <div>
                {/* Third feature */}
                <Features
                    header="Avktastning?"
                    text="Hvert år har ztl.me 10 % av den gjenværende uavhentede premien for å investere i finanspapirer med lav risiko. 
                    Du som medlem av andelslaget får din del av avkastningen. Enkelt sagt samler vi alle dine årlige bidrag og beregner din 
                    andelsandel mot den totale innbetalte premiepotten, og det er din andel"
                    smallText="Du får ikke bare tilbakebetaling gjenværende premie men også avkastning"
                    featureOpened={thirdFeatureOpened}
                    setFirstFeatureOpened={setThirdFeatureOpened}
                    reversedOrder={false}
                    image="/body_3.png"
                />
            </div>
        </div>
    );
};

const content = [
    {
        title: "Hvorfor ztl.me?",
        description:
            "ztl.me starter reisen med å utfordre forsikringsmarkedet med et solid fundament på 40 000\n" +
            "                selvforsikrere. Hvorfor akkurat 40 000 selvforsikrere? Hvis\n" +
            "                man tar utgangspunkt i en gjennomsnittlig forsikringskunde i Norge sier matematiske\n" +
            "                forsikringsmodeller at man trenger 33 000 kunder for å kunne drive\n" +
            "                lønnsom forsikringsvirksomhet. Dette inkluderer alle utbetalinger til skade og tap, samt drift og\n" +
            "                avkastning på egenkapitalen. Vi har derfor lagt oss\n" +
            "                på et litt høyere nivå slik at ztl.me har en ekstra god margin, noe som uansett kommer ztl.mes\n" +
            "                selvforsikrere til gode i form av avkastning.\n" +
            "                Ytterligere til gode.",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image src="/body_1.png" width={300} height={300} className="h-full w-full object-cover"
                       alt="linear board demo"/>
            </div>
        ),
    },
    {
        title: "Trygghet med fordeler",
        description:
            "Det solide fundamentet til ztl.me tilbyr et beskyttelsesnivå som er sammenlignbart med et hvilket som helst tradisjonelt forsikringsselskap. Som vi viste gjennom bileksempelet er det store summer som er ubenyttede, og som utgjør kjernen i forsikringsselskapene forretningsmodell. I motsetning til de store tradisjonelle forsikringsselskapene hvor disse midlene havne i eiernes lommer, fordeles midlene på ztl.mes selvforsikrere.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image src="/body_2.png" width={300} height={300} className="h-full w-full object-cover"
                       alt="linear board demo"/>
            </div>
        ),
    },
    {
        title: "",
        description: "",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image src="/body_3.png" width={300} height={300} className="h-full w-full object-cover"
                       alt="linear board demo"/>
            </div>
        ),
    },
    {
        title: "",
        description: "",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image src="/body_1.png" width={300} height={300} className="h-full w-full object-cover"
                       alt="linear board demo"/>
            </div>
        ),
    },
];

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
