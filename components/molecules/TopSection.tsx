import Image from "next/image"
import ClickableIcon from "../atoms/ClickableIcon"
import MainHeader from "../atoms/MainHeader"
import Link from "next/link"

interface Props {
  title?: string
  close?: () => void
}

const TopSection = ({ title, close }: Props) => {
  return (
    <div className="flex w-screen justify-start gap-4 px-6 pt-6 items-center">
      {!close ? (
        <Link href="/eating-habits/add-meals/add-meals">
          <Image
            src="/back_arrow.svg"
            alt="go back"
            height={25}
            width={25}
            className="dark:invert"
          />
        </Link>
      ) : (
        <ClickableIcon
          src="/menu_black.svg"
          alt="open menu"
          handleClick={close}
        />
      )}
      <MainHeader title={title} />
    </div>
  )
}

export default TopSection
