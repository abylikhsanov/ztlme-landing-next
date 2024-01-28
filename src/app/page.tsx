'use client'

import "../app/globals.css"

import {Header} from "@/components/landing_page/Header"
import {Hero} from "@/components/landing_page/Hero"
import {Calculator} from "@/components/landing_page/Calculator"
import {Why} from "@/components/landing_page/Why"
import {FAQ} from "@/components/landing_page/FAQ"
import {Footer} from "@/components/landing_page/Footprint"

import {GetLoginLink} from "@/api/BackendAPI"
import MaxWidthComponent from "@/components/MaxWidthComponent";
import {HeaderButtons} from "@/components/landing_page/HeaderButtons";

const LandingPage = () => {

    const handleSignUpClick = async () => {
        try {
            const link = await GetLoginLink();
            window.location.href = link;

        } catch (error) {

        }
    }

    return (
        <>
            <Header handleClick={handleSignUpClick}/>
                <Hero handleClick={handleSignUpClick}/>
                <Why/>
                <Calculator/>
                <FAQ/>
                <Footer/>
        </>
    )
}

export default LandingPage;