/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react'
import { AiOutlineFilePdf } from 'react-icons/ai'

import CVDropZone from '@component/Employee/CVDropZone'
import DashboarHeading from '@component/Shared/DashboardHeading'
import PdfLogo from '@assets/logo/pdf.png'

const CvManager = (): JSX.Element => {
  const [cvFile, setCvFile] = useState<any>()
  return (
    <div>
      <DashboarHeading heading='CV' headingBold='Manager' />
      <div className='mt-12 bg-white rounded-md w-full  p-5'>
        <h3 className='font-semibold'>All in one place</h3>
        <div className='mt-12'>
          <CVDropZone setCvFile={setCvFile} />
        </div>

        {cvFile && (
          <div className='flex items-center mt-12'>
            <div className='bg-whiteBlue rounded-md w-32 h-32 flex flex-col items-center justify-center p-5'>
              <img src={PdfLogo} alt='pdf' className=' w-12 h-12 object-cover object-center mb-5' />
              <p className='text-sm text-garyish'>{cvFile.path.split('.')[0].slice(0, 5)}.pdf</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CvManager
