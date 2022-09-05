import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

import defaultStyles from "../styles/Page.module.css";
import styles from "../styles/Sponsors.module.css";
import * as sponsors from "../public/sponsors.json"
import robot from "../public/robot.jpg"
import { NextPage } from "next";
import Link from "next/link";

type Sponsor = {
    name: string;
    logo: string;
    link: string;
    since: number;
}

const Sponsors: NextPage = (props:any) => {

    console.log(props.sponsors);

    let year = 1970;

    if(typeof window !== "undefined") {
        year = new Date().getFullYear();
    }

    return (
        <>
            <Head>
                <title>Scarlett Robotics | Sponsors</title>
            </Head>
            <Header />
            <PageTitle title="Sponsors" background={robot}/>
            <main className={defaultStyles.mainContent}>
                <h1>Our Current Sponsors</h1>
                <p>Thanks so much to our sponsors for the {year}/{year + 1} season!</p>
                <div className={styles.sponsorContainer}>
                    {props.sponsors.map((sponsor:Sponsor) => {
                        console.log(sponsor)
                        return (
                            <div key={sponsor.name} className={styles.sponsor}>
                                <img src={sponsor.logo} alt={sponsor.name} />
                                <p>{sponsor.name}</p>
                                <Link href={sponsor.link}>{sponsor.link}</Link>
                                <i>{sponsor.since}</i>
                            </div>
                        );
                    })}
                </div>
                <p>Interested in sponsoring us? Contact us at <a href="mailto:scarlettrobotics@gmail.com">scarlettrobotics@gmail.com</a>!</p>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const _sponsors = (sponsors as any)["default"];
    return {props: {
        sponsors: _sponsors
    }};
}

export default Sponsors;