import React from 'react';
import styles from "@/app/contact/contact.module.css"
import {AiOutlineMail} from "react-icons/ai";
import Link from "next/link";
import {MdVoiceChat} from "react-icons/md";
import {CgCommunity} from "react-icons/cg";

const ContactCard = () => {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.grid_card}>
                            <i><AiOutlineMail/></i>
                            <h3>Mail</h3>
                            <p className={styles.last_para}>
                                Email your queries.
                            </p>
                            <Link href="/">
                                Email Now
                            </Link>
                        </div>
                        <div className={styles.grid_card}>
                            <i><MdVoiceChat/></i>
                            <h3>Call Us</h3>
                            <p className={styles.last_para}>
                                Reach us on our toll free number.
                            </p>
                            <Link href="/">
                                Call Now
                            </Link>
                        </div>
                        <div className={styles.grid_card}>
                            <i><CgCommunity/></i>
                            <h3>Community Forum</h3>
                            <p className={styles.last_para}>
                                Join our community.
                            </p>
                            <Link href="/">
                                Join Now
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactCard;