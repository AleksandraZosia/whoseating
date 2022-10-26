interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return <section>{children}</section>
}

export default Section
