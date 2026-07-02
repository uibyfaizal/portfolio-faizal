// import React from 'react'
import Container from '../components/common/Container';
import HeroContent from '../components/hero/HeroContent';
import HeroImage from '../components/hero/HeroImage';


const Hero = () => {
    return (
        <section className='min-h-screen flex items-center'>
            <Container>
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Left Content */}
                    <HeroContent />

                    {/* RIght Content */}
                    <HeroImage />
                </div>
            </Container>
        </section>
    )
}

export default Hero