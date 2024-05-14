'use client'

import "../app/globals.css"

import {useState, useEffect} from "react";
import {Header} from "@/components/landing_page/Header"
import {Hero} from "@/components/landing_page/Hero"
import {Calculator} from "@/components/landing_page/Calculator"
import {Why} from "@/components/landing_page/Why"
import {FAQ} from "@/components/landing_page/FAQ"
import {Footer} from "@/components/landing_page/Footprint"
import {SignUpModal} from "@/components/landing_page/PopUp";
import {HeroSignedUp} from "@/components/signup_successful/HeroSignedUp";
import {GetUrlRoot} from "@/api/BackendAPI";

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState("main");
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleModal = () => {
        setShowModal(!showModal);
    }
    
    const handleJoinClickEmpty = () => {
        
    }

    const handleSeDokumentClick = async () => {
        try {
            window.location.href = `${GetUrlRoot()}/api/Signature/sign`;
        } catch (error) {
            console.error(`During handleJoinButtonClick exception happened: ${error}`);
        }
    }
    
    const handlePageChange = (page: string) => {
        console.log(`Setting page to ${page}`);
        setCurrentPage(page);
    }
    
    const renderPage = () => {
        switch (currentPage) {
            case "main":
                return (
                    <div>
                        {showModal && <SignUpModal onClose={handleModal} setPage={handlePageChange}/>}
                        <Hero handleClick={handleModal}/>
                        <Why/>
                        <Calculator/>
                        <FAQ/>
                    </div>
                )
            case "signupSuccessful":
                return (
                    <div>
                        <HeroSignedUp handleClick={handleSeDokumentClick} />
                    </div>
                )
            case "signupUnsuccessful":
                return (
                    <div>
                        Your score is too low, you cannot join us
                    </div>
                )
            case "signedDocument":
                return (
                    <div>
                        Document is signed, welcome!
                    </div>
                )
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            console.log(position);
            setScrollPosition(position);
            
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header handleClick={handleModal}/>
            {renderPage()}
            <Footer/>
        </>
    )
}

export default LandingPage;