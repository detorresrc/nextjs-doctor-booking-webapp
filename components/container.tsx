interface Props {
  children: React.ReactNode
}

export const Container = ({
  children
} : Props) => {
  return (
    <div
      className='container w-full mx-auto'
      >{children}</div>
  )
}
