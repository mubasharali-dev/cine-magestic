import React from 'react';
import styles from '@/app/styles/common.module.css'
import Link from "next/link";
import Image from "next/image";

const MovieCard = (currentElem) => {
    const {id, type, title, synopsis} = currentElem.jawSummary;
    return (
        <section style = {{paddingBottom: "20px"}}>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={currentElem.jawSummary.backgroundImage.url} alt={title} width={500} height={500}/>
                </div>
                <div className={styles.card_data}>
                    <h3>{title.substring(0,18)}</h3>
                    <p>{synopsis.length > 66 ? synopsis.substring(0, 66) + '...' : synopsis}</p>
                    <Link href={`/movie/${id}`}>
                        <button className={styles.hero_button}>Watch Now</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MovieCard;