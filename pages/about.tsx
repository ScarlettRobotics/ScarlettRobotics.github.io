import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

import styles from "../styles/Page.module.css";

import test from "../public/test.jpg"

const About = () => {
    //Calculate number of years the robotics club has been running, as well as a suffix (th, st, nd, rd)
    let years = 0;
    let suffix = "th";
    if(typeof window != "undefined") {
        const date = new Date();
        date.setMonth(date.getMonth() + 6);
        console.log(date);
        years = date.getFullYear() - 2012;

        if(Math.floor(years / 10) % 10 != 1) {
            switch(years % 10) {
                case 1:
                    suffix = "st";
                    break;
                case 2:
                    suffix = "nd";
                    break;
                case 3:
                    suffix = "rd";
                    break;
            }
        }
    }

    return (
        <>
            <Head>
                <title>Scarlett Robotics | About</title>
            </Head>
            <Header />
            <PageTitle title="About" background={test}/>
            <main className={styles.mainContent}>
                <h1>What is the Scarlett Robotics Team?</h1>
                <p>The students at Scarlett Robotics are proud to announce that we are entering our {years + suffix} year of
                    participating in the FIRST Robotics Competition. FIRST Robotics is a US-based, sponsor-led
                    robotics organization that encourages young people across North America and the Globe to
                    participate in robotics. Two years ago our team won the Canadian Rockies Regional in Calgary
                    and competed in the FRC World Championships in Houston, Texas. It was an amazing
                    experience and put us in perspective of what our club can achieve and become.
                    This competition will reveal the world of engineering, industrial design, and project
                    management to an enthusiastic group of students. Our team is organized into teams of project
                    managers, electrical technicians, industrial designers, mechanical technicians and programmers.
                    This is a student-led initiative, made up of about 30 students from grades 10, 11, and 12 at our
                    high school, while the school administration is primarily there for general support and
                    encouragement.</p>
                <h1>What are our goals?</h1>
                <ol>
                    <li><b>To involve! </b>
                        - We wish to involve as many students as possible in this club and give them
                        opportunities to discover more about STEM. At the high school level, there are not many
                        STEM related clubs or extra curricular activities that students can pursue. Our robotics
                        team gives students the unique opportunity to get involved in something that can help
                        them discover their passions.</li>
                    <li><b>To train! </b>
                        - Not only do we want our team to succeed in competition, but we want to
                        train new team members and help them obtain the skills that are needed to fuel the team’s
                        success in the future. This is a goal that we prioritize above winning! For students to gain
                        something from their experience of being a part of our team, they need to feel as if they
                        are in a nurturing environment where they know their ideas will be considered. We want
                        people to feel included, and to ultimately learn many new things that will help them
                        succeed in the future.</li>
                    <li><b>To win! </b>
                        - We work extremely hard all year long to ensure that our robot is the best! We
                        spend time brainstorming, planning, designing and building; combining the ideas of
                        many members to make a robot that we all believe will help us succeed at competition.</li>
                </ol>
                <h1>What does our Robot do?</h1>
                <p>The actual robot will follow several key specifications set for the competition but
                    generally will be a wheeled vehicle capable of undertaking several tasks. These tasks might
                    include picking up a ball and shooting them into baskets or other game-type skills.</p>
                <iframe>Your browser doesn't support embedded videos.</iframe>
            </main>
        </>
    )
}

export default About;