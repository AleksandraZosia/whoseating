interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return <section className="margin dark:text-beige">{children}</section>
}

export default Section
