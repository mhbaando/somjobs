interface ITitle {
  heading: string
  desc: string
  align?: string
}
const Title: React.FC<ITitle> = ({ heading, desc, align }): React.ReactElement => {
  return (
    <section className='section'>
      <div
        className={`max-w-6xl mx-auto w-full flex flex-col items-${
          align != null ? align : 'center'
        } justify-center`}
      >
        <h2 className='text-2xl sm:text-3xl font-semibold mb-3 '>{heading}</h2>
        <p className={`text-sm text-gray-500 text-${align != null ? align : 'center'}`}>{desc}</p>
      </div>
    </section>
  )
}
export default Title
