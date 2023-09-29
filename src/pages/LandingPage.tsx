import { Header } from "../components/Header"
import { Hero } from "@/components/Hero"
import { Calculator } from "@/components/Calculator"
import { Why } from "@/components/Why"

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Why />
            <Calculator />
        </div>
    )
}

export default LandingPage;