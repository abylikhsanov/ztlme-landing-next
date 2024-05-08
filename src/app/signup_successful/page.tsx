'use client'

import "../globals.css"
import { useEffect , useState} from 'react';
import { useRouter } from 'next/navigation';
import { GetAuthStatus } from "@/api/BackendAPI";
import { Header } from "@/components/landing_page/Header"
import { HeroSignedUp } from "@/components/signup_successful/HeroSignedUp"
import { Footer } from "@/components/landing_page/Footprint"
import {handleJoinButtonClick, handleSeDokumentClick} from "@/methods/HandleButtonClicks";

const SignupPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function checkAuthentication() {
            try {
                const isAuthenticated = await GetAuthStatus();
                if (!isAuthenticated) {
                    router.push('/');
                } else {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Failed to check authentication:', error);
                router.push('/');
            } finally {
                setIsLoading(false);
            }
        }

        checkAuthentication();
    }, [router]);  // Include router in the dependencies array if it's used inside the effect

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
        return <p>Redirecting...</p>;
    }
    return (
        <div>
            <Header handleClick={handleJoinButtonClick}/>
            <HeroSignedUp handleClick={handleSeDokumentClick}/>
            <Footer />
        </div>
    )
}

export default SignupPage