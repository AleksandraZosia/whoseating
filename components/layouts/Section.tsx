interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return <section className="margin">{children}</section>
}

export default Section
