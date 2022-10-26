import React from "react"
import Link from "next/link"

interface Props {
  text: string
  href: string
  styling?: string
}

const LongButton = ({ text, href, styling }: Props) => {
  return (
    <div className="bg-opacity-[0.85] py-0.5 rounded-2xl text-xs bg-green text-white w-11/12 text-center">
      <Link href={href}>{text}</Link>
    </div>
  )
}

export default LongButton
