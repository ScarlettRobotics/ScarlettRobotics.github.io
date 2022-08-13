import type { NextPage } from 'next'
import Head from 'next/dist/shared/lib/head'
import Link from 'next/link'
import React from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import * as links from "../../public/url_shortener.json"
import style from "../../styles/Go.module.css"
import QuickLink from './[link]'

const QuickLinkHome: NextPage = () => {
  return (
    <>
        <Head>
            <title>Scarlett Robotics | Quick Links</title>
        </Head>
        <Header />
        <header className={style.centerContainer}>
            <h1>Quick Links</h1>
            <p>Edit the links on <a href="https://github.com/ScarlettRobotics/ScarlettRobotics.github.io/edit/main/public/url_shortener.json">GitHub</a></p>
        </header>
        <table>
            <tbody>
            {
                //@ts-ignore - the actual data is in the default key, but typscript doesn't seem to realize it exists
                Object.keys(links["default"]).map((key, index) =>
                    
                    <tr key={key} className={style.tableRow}>
                        <td className={style.linkTitle}>{key}</td>
                        <td className={style.linkValue}>
                            <Link href={`/go/${key}`}>
                                { // @ts-ignore
                                links[key] }
                            </Link>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
        <div className={style.centerContainer}>
            <p>Please note: changes made on github may take up to five minutes to update after the pull request is accepted due to caching.</p>
        </div>
    </>
  )
}

export default QuickLinkHome;
