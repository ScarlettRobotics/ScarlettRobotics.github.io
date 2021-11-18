import Head from "next/dist/shared/lib/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Title from "../components/Title";
import style from "../styles/Go.module.css";

const Error404 = () => {
    const router = useRouter();
    return(
        <div className={style.centerContainer}>
            <Head>
                <title>Scarlett Robotics | Not Found</title>
            </Head>
            <Title />
            <h1>404: Not Found</h1>
            <p>{`The requested resource ${router.asPath} was not found.`}</p>
            <Link href="/">Go Home</Link>
        </div>
    );
}

export default Error404;