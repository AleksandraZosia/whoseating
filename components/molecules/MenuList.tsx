import ClickableIcon from "../atoms/ClickableIcon"
import React from "react"
import SecondaryHeader from "../atoms/SecondaryHeader"
import { setActivePage } from "../../store/slices/pageSlice"
import { useDispatch, useSelector } from "../../store/store"
import Link from "next/link"
interface Props {
  close?: () => void
}

const MenuList = ({ close }: Props) => {
  const options = [
    { name: "Home", id: 1, url: "/" },
    { name: "My Eating Habits", id: 2, url: "/eating-habits/summary" },
    { name: "About WHO Dietary", id: 3, url: "/about" },
  ]
  const active = useSelector((state) => state.page.page)
  const dispatch = useDispatch()
  return (
    <div className="bg-green text-white  min-h-screen">
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
          onClick={() => {
            dispatch(setActivePage(option.url))
          }}
        >
          <Link href={option.url}>
            <SecondaryHeader title={option.name} onClick={close} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MenuList
