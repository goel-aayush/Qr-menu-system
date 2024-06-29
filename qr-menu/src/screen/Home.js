import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero-sction'
import App from '../components/MenuPage'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <HeroSection />
            </div>
            <div>
                <App />
            </div>
            <div>
                <Reviews />
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}

export default Home