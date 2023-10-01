'use client'

import { Header } from "../components/Header"
import { Hero } from "@/components/Hero"
import { Calculator } from "@/components/Calculator"
import { Why } from "@/components/Why"

import { GetLoginLink } from "@/api/BackendAPI"

const LandingPage = () => {

    const handleSignUpClick = async () => {
        try {
            const link = await GetLoginLink();
            window.location.href = link;
      
          } catch (error) {
      
          }
    }

    return (
        <div>
            <Header handleClick={handleSignUpClick}/>
            <Hero handleClick={handleSignUpClick}/>
            <Why />
            <Calculator />
        </div>
    )
}

export default LandingPage;