import { NextPage } from 'next';
import Head from 'next/dist/shared/lib/head';
import { useRouter } from 'next/router'
import React from 'react';
import Title from '../../components/Title';
import * as links from "../../public/url_shortener.json"
import style from "../../styles/Go.module.css"

const QuickLink: NextPage = () => {
    const router = useRouter();

    const targetName: string = router.query.link as string; 
    // @ts-ignore
    const target = targetName in links ? links[targetName] : null;

    if(target != null) {
        window.location = target;
    }

    return(
        <div className={style.centerContainer}>
            <Head>
                <title>{target != null ? `Redirecting...` : `Scarlett Robotics | Quick Links`}</title>
            </Head>
            <Title />
            <h1>{target != null ? targetName : "Invalid Link"}</h1>
            {
                target != null ?
                <>
                    <p style={{margin: "0px"}}>Please Wait...</p>
                    <p style={{margin: "0px"}}>If you are not redirected automatically, <a href={target}>click here</a>.</p>
                </> :
                <p>Go back to the <a href="./">list of links</a></p>
            }
        </div>
    );
}

export default QuickLink;