import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import ContactForm from "@/app/components/ContactForm";
import styles from "@/app/contact/contact.module.css"
import Footer from "@/app/components/Footer";

const Page = () => {
    return (
        <>
            <div className={styles.container}>
                <h2>Contact Us</h2>
                <ContactCard/>
                <div className={styles.contact_section}>
                    <p className={styles.last_para}>We'd love to hear <span> from you</span> </p>
                <ContactForm/>
                </div>
            </div>
            <Footer/>

        </>
    );
};

export default Page;