import type { NextPage } from "next"
import Head from "next/head"
import TopSection from "../components/molecules/TopSection"
import React from "react"
import MenuList from "../components/molecules/MenuList"

const About: NextPage = () => {
  const [menu, setMenu] = React.useState<boolean>(false)
  return (
    <>
      <Head>
        <title>WHOseating: About Us</title>
      </Head>
      <main className="min-h-screen">
        <MenuList close={() => setMenu(false)} open={menu} />

        <TopSection title="About us" close={() => setMenu(!menu)} />
      </main>
    </>
  )
}

export default About
