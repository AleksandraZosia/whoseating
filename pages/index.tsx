import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import LongButton from "../components/atoms/LongButton"
import MenuList from "../components/molecules/MenuList"
import Link from "next/link"
import ClickableIcon from "../components/atoms/ClickableIcon"
import React from "react"
import SecondaryHeader from "../components/atoms/SecondaryHeader"
import Benefit from "../components/atoms/Benefit"
import Description from "../components/atoms/Description"
import {
  padString,
  calcFrequency,
  calcVarietyPoints,
} from "../bussiness_logic/data_functions"
import { EXAMPLE_INPUT } from "../bussiness_logic/constans"
import Section from "../components/layouts/Section"

const Home: NextPage = () => {
  const [menu, setMenu] = React.useState<boolean>(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>WHOseating: your science-based nutrition assistant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MenuList close={() => setMenu(false)} open={menu} />

        <section className={`${styles.top} "margin"`}>
          <ClickableIcon
            src="/menu_black.svg"
            alt="menu"
            handleClick={() => setMenu(!menu)}
          />

          <h1 className="mb-2.5  mt-0.5 font-black text-lg leading-none text-darkgreen ">
            WHO's eating healthy?
          </h1>

          <LongButton href="/eating-habits/summary" text={"START"} />
        </section>
        <Section>
          <SecondaryHeader title="About" />
          <Description
            text="
            About text what is it for and why do we need it . Long text. About
            text what is it for and why do we need it . Long text.About text
            what is it for and why do we need it . Long text.About text what is
            it for and why do we need it . Long text. Clarificaiton. Long
            text.About text what is it for and why do we need it . Long
            text.About text what is it for and why do we need it . Long
            text.About text what is it for and why do we need it . Long
            text.About text what is it for and why do we need it ."
          />
        </Section>
        <Section>
          <SecondaryHeader title="Benefits" />
          <div className="grid grid-cols-3 py-2 gap-2">
            {["a", "b", "c", "d", "e", "f"].map((item) => (
              <Benefit name={item} key={item} />
            ))}
          </div>
        </Section>
        <Section>
          <SecondaryHeader title="WHO's recommendation short description" />
          <Description text="Very short description of what WHO recommends. Very short description of what WHO recommends. Very short description of what WHO recommends. Very short description of what WHO recommends." />
          <LongButton text="Read Full Description" href={"/about"} />
        </Section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
