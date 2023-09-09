import React from 'react';
import HeroSection from "@/app/components/HeroSection";
import Footer from "@/app/components/Footer";

const About = () => {
    return (
        <>
          <HeroSection title = {"Our story"} imageUrl = {"/about.png"} width = {400} height = {300}/>
            <Footer/>
        </>
    );
};

export default About;