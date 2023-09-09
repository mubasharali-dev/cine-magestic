import React from 'react';
import styles from '@/app/styles/common.module.css'
import MovieCard from "@/app/components/MovieCard";
import Footer from "@/app/components/Footer";

const Page = async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    });

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ee00e45feemshe2d2f41490e2b1bp1003a5jsn8909457f8c2f',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    const movie_data = data.titles;

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Shows & Movies</h1>
                    <div className={styles.card_section}>

                        {
                            movie_data.map((currentElem) => {
                                    return <MovieCard key={currentElem.id} {...currentElem}/>
                                }
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;