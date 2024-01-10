'use client'

import "../app/globals.css"

import { Header } from "@/components/landing_page/Header"
import { Hero } from "@/components/signedup_page/Hero"
import { Footer } from "@/components/landing_page/Footprint"

import { GetLoginLink } from "@/api/BackendAPI"

const handleViewDocumentClick = () => {

}

const SignupPage = () => {
    return (
        <div>
            <Header handleClick={handleViewDocumentClick}/>
            <Hero />
            <Footer />
        </div>
    )
}

export default SignupPage