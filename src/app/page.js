import React from 'react';
import HeroSection from "@/app/components/HeroSection";
import Footer from "@/app/components/Footer";

const Page = ({title, imageUrl, width, height}) => {
    return (
        <>
          <HeroSection title={"LET'S WATCH MOVIE TOGETHER"} imageUrl={"/images/hero-section.png"} width={500} height = {500} />
            <Footer/>

        </>
    );
};

export default Page;