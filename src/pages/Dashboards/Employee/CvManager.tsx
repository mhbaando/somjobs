/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react'

import CVDropZone from '@component/Employee/CVDropZone'
import DashboarHeading from '@component/Shared/DashboardHeading'
import PdfLogo from '@assets/logo/pdf.png'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const CvManager = (): JSX.Element => {
  const [cvFile, setCvFile] = useState<any>()
  const token = localStorage.getItem('jwt')
  const { owner }: any = jwtDecode(token!)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  // useEffect(() => {
  //   const token = localStorage.getItem('jwt')
  //   const { owner }: any = jwtDecode(token!)
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   const upploadcv = async (): Promise<void> => {
  //     try {
  //       const { data } = await axios.post(
  //         'http://127.0.0.1:5000/employee/uppload',
  //         {
  //           id: owner,
  //           cv: cvFile
  //         },
  //         config
  //       )
  //     } catch (err) {
  //       toast.error('Un Able to appload ')
  //     }
  //   }

  //   if (cvFile) {
  //     console.log(owner, cvFile)
  //     void upploadcv()
  //   }
  // }, [cvFile])

  const handleSubmit = (e: any): void => {
    e.preventDefault()
    const upploadcv = async (): Promise<void> => {
      try {
        const { data } = await axios.post(
          'http://127.0.0.1:5000/employee/uppload',
          {
            id: owner,
            cv: cvFile
          },
          config
        )
      } catch (err) {
        toast.error('Un Able to appload ')
      }
    }

    void upploadcv()
  }
  return (
    <div>
      <DashboarHeading heading='CV' headingBold='Manager' />
      <div className='mt-12 bg-white rounded-md w-full  p-5'>
        <h3 className='font-semibold'>All in one place</h3>
        <div className='mt-12'>
          <form encType='multipart/form-data' onSubmit={handleSubmit}>
            <CVDropZone setCvFile={setCvFile} cvFile={cvFile} />
            <button>submit</button>
          </form>
        </div>

        {cvFile && (
          <div className='flex items-center mt-12'>
            <div className='bg-whiteBlue rounded-md w-32 h-32 flex flex-col items-center justify-center p-5'>
              <img src={PdfLogo} alt='pdf' className=' w-12 h-12 object-cover object-center mb-5' />
              <p className='text-sm text-garyish'>.pdf</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
// {cvFile.path.split('.')[0].slice(0, 5)}
export default CvManager
