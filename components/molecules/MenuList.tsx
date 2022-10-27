import ClickableIcon from "../atoms/ClickableIcon"
import React from "react"
import SecondaryHeader from "../atoms/SecondaryHeader"
import Link from "next/link"
interface Props {
  close?: () => void
  open: boolean
}

const MenuList = ({ close, open }: Props) => {
  const options = [
    { name: "Home", id: 1, url: "/" },
    { name: "Today's meals", id: 2, url: "/eating-habits/add-meals/add-meals" },
    { name: "My Stats", id: 3, url: "/eating-habits/summary" },
    { name: "About WHO Dietary", id: 4, url: "/about" },
  ]
  const active = window?.location.pathname
  return (
    <div
      className={` fixed z-50 inset-y-0 w-3/4 -left-40 transition duration-600 ease-linear ${
        open ? " translate-x-40" : "-translate-x-40"
      }`}
    >
      <div className={`fixed inset-0`} onClick={close} />
      <div>
        <div className="fixed left-0 h-full shadow-lg max-w-screen-sm bg-green text-white  min-h-screen">
          <ClickableIcon
            src="/close.svg"
            alt="close"
            handleClick={close}
            h={20}
            w={20}
          />
          {options.map((option) => (
            <div
              key={option.id}
              className={active == option?.url ? "bg-darkgreen px-3" : "px-3"}
            >
              <Link href={option.url}>
                <SecondaryHeader title={option.name} onClick={close} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuList
