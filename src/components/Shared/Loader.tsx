import { InfinitySpin } from 'react-loader-spinner'

const Loader = (): React.ReactElement => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center'>
      <InfinitySpin width='200' color='#1967D2' />
    </div>
  )
}
export default Loader
