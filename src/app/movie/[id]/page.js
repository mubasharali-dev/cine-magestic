import React from 'react';
import styles from '@/app/styles/common.module.css'
import Image from "next/image";
import Link from "next/link";

const Page = async ({params}) => {
    const id = params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ee00e45feemshe2d2f41490e2b1bp1003a5jsn8909457f8c2f',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    const movie_data = data[0].details;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.movie_title}>
                    Netflix / <span> {movie_data.type} </span>
                </div>
                <div className={styles.card_section}>
                    <Image src={movie_data.backgroundImage.url} alt={movie_data.title} width={500} height={300}/>
                </div>
                <div className={styles.card_data}>
                    <h3>{movie_data.title}</h3>
                    <p>{movie_data.synopsis}</p>
                </div>
                <Link href={"/movie"} style={{ paddingBottom: "30px"}}>
                    <div className={styles.hero_button}>
                        Go Back
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Page;