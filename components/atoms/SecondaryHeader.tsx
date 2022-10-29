interface Props {
  title?: string
  onClick?: () => void
}

const SecondaryHeader = ({ title, onClick }: Props) => {
  return (
    <h2
      className="text-secondaryHeader text-darkgreen dark:text-beige"
      onClick={onClick}
    >
      {title}
    </h2>
  )
}

export default SecondaryHeader
