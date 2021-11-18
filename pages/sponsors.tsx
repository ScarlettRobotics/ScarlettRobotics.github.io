import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import test from "../public/test.jpg"

const Sponsors = () => {
    return (
        <>
            <Head>
                <title>Scarlett Robotics | About</title>
            </Head>
            <Header />
            <PageTitle title="Sponsors" background={test}/>
        </>
    )
}

export default Sponsors;