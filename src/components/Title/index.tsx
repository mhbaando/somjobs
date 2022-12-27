interface ITitle {
  heading: string
  desc: string
}
const Title: React.FC<ITitle> = ({ heading, desc }): React.ReactElement => {
  return (
    <section className='section'>
      <div className='container w-full flex flex-col items-center justify-center'>
        <h2 className='text-3xl font-semibold mb-3'>{heading}</h2>
        <p className='text-sm text-gray-500'>{desc}</p>
      </div>
    </section>
  )
}
export default Title
