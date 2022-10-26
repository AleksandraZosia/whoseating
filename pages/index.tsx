import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import LongButton from "../components/atoms/LongButton"
import MenuList from "../components/molecules/MenuList"
import { useDispatch, useSelector } from "../store/store"
import { getProductsState, addProduct } from "../store/slices/productsSlice"
import ClickableIcon from "../components/atoms/ClickableIcon"
import React from "react"
import SecondaryHeader from "../components/atoms/SecondaryHeader"
import Benefit from "../components/atoms/Benefit"
import Description from "../components/atoms/Description"
import { AnimatePresence, motion } from "framer-motion"
import { padString } from "../bussiness_logic/data_functions"

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const time = new Date()

  const { products } = useSelector(getProductsState)
  const [menu, setMenu] = React.useState<boolean>(false)
  console.log(products)
  return (
    <div className={styles.container}>
      <Head>
        <title>WHOseating: your science-based nutrition assistant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AnimatePresence>
          {menu ? (
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 1 }}
              transition={{ duration: 0 }}
              exit={{ x: 0 }}
            >
              <MenuList close={() => setMenu(!menu)} />{" "}
            </motion.div>
          ) : (
            <>
              <section className={styles.top}>
                <ClickableIcon
                  src="/menu.svg"
                  alt="menu"
                  handleClick={() => setMenu(!menu)}
                />

                <h1 className="mb-2.5 mx-6 mt-0.5 font-black">
                  WHO's eating healthy?
                </h1>
                <LongButton
                  text={padString("START")}
                  href={"/eating-habits/add-meals/add-meals"}
                />
              </section>
              <section className={styles.about}>
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
              </section>
              <section>
                <SecondaryHeader title="Benefits" />
                <div className="grid grid-cols-3 py-2 gap-2">
                  {["a", "b", "c", "d", "e", "f"].map((item) => (
                    <Benefit name={item} key={item} />
                  ))}
                </div>
              </section>
              <section>
                <SecondaryHeader title="WHO's recommendation short description" />
                <Description text="Very short description of what WHO recommends. Very short description of what WHO recommends. Very short description of what WHO recommends. Very short description of what WHO recommends." />
                <LongButton text="Read Full Description" href={"/about"} />
              </section>
            </>
          )}
        </AnimatePresence>
        )
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
