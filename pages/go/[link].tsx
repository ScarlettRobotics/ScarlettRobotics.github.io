import { NextPage } from 'next';
import Head from 'next/dist/shared/lib/head';
import React from 'react';
import Title from '../../components/Title';
import * as links from "../../public/url_shortener.json"
import style from "../../styles/Go.module.css"

const QuickLink: NextPage = (props:any) => {
    const target = props.target;
    const targetName = props.targetNanme;
    
    if(typeof window != "undefined") window.location = target;

    return(
        <div className={style.centerContainer}>
            <Head>
                <title>Redirecting...</title>
            </Head>

            <Title />
            <h1>{targetName}</h1>
            <p style={{margin: "0px"}}>Please Wait...</p>
            <p style={{margin: "0px"}}>If you are not redirected automatically, <a href={target}>click here</a>.</p>
        </div>
    );
}

export default QuickLink;

export async function getStaticProps(context:any) {
    const targetName = context.params.link;
    // @ts-ignore
    const target = links[targetName];
    return { props: { targetName: targetName, target: target } };
}

export async function getStaticPaths() {
    // @ts-ignore
    const paths = Object.keys(links["default"]).map((key) => {
      return { params: { link: key } };
    });
  
    return {
        paths,
        fallback: false,
    };
}