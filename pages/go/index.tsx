import type { NextPage } from 'next'
import Head from 'next/dist/shared/lib/head'
import React from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import * as links from "../../public/url_shortener.json"
import style from "../../styles/Go.module.css"

const QuickLinkHome: NextPage = () => {
  return (
    <>
        <Head>
            <title>Scarlett Robotics | Quick Links</title>
        </Head>
        <div className={style.centerContainer}>
            <Title />
            <h1>Quick Links</h1>
            <p>Edit the links on <a href="https://github.com/ScarlettRobotics/ScarlettRobotics.github.io/edit/main/public/url_shortener.json">GitHub</a></p>

            <table>
                <tbody>
                {
                    //@ts-ignore - the actual data is in the default key, but typscript doesn't seem to realize it exists
                    Object.keys(links["default"]).map((key, index) =>
                        
                        <tr key={key} className={style.tableRow}>
                            <td className={style.linkTitle}>{key}</td>
                            <td className={style.linkValue}>
                                <a href={
                                    // @ts-ignore - typescript doesn't like how the key is a string, and not a specific string
                                    links[key]}>{links[key]}
                                </a>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default QuickLinkHome;
