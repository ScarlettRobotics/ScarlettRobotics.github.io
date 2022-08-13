import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

import styles from "../styles/Page.module.css";

import robot from "../public/robot.jpg"

const Sponsors = () => {
    return (
        <>
            <Head>
                <title>Scarlett Robotics | Sponsors</title>
            </Head>
            <Header />
            <PageTitle title="Sponsors" background={robot}/>
            <main className={styles.mainContent}>
                <h1>Our Current Sponsors</h1>
                <p>Thanks so much to our sponsors for the 2021/2022 season!</p>
                <a href="https://google.ca">Test</a>
            </main>
        </>
    )
}

export default Sponsors;