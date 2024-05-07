'use client'

import "../globals.css"
import { useEffect , useState} from 'react';
import { useRouter } from 'next/navigation';
import { GetAuthStatus } from "@/api/BackendAPI";
import { Header } from "@/components/landing_page/Header"
import { Hero } from "@/components/signedup_page/Hero"
import { Footer } from "@/components/landing_page/Footprint"

const handleViewDocumentClick = () => {

}

const SignupPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function checkAuthentication() {
            try {
                const isAuthenticated = await GetAuthStatus();
                if (!isAuthenticated) {
                    router.push('/signed_up');
                } else {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Failed to check authentication:', error);
                router.push('/signed_up');
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
            <Header handleClick={handleViewDocumentClick}/>
            <Hero />
            <Footer />
        </div>
    )
}

export default SignupPage