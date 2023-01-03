import Button from '@component/Shared/Button'
import React, { useCallback } from 'react'
import Dropzone from 'react-dropzone'
interface ICVDropZone {
  setCvFile: (cfFile: any) => void
}
const CVDropZone: React.FC<ICVDropZone> = ({ setCvFile }): JSX.Element => {
  const MAX_SIZE = 5242880
  const onDrop = useCallback((acceptedFiles: any[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => {
        setCvFile(file)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])
  return (
    <Dropzone
      accept={{ 'application/pdf': ['.pdf'] }}
      maxFiles={1}
      minSize={0}
      maxSize={MAX_SIZE} // 5mp max allowed size
      onDrop={onDrop}
    >
      {({ getInputProps, getRootProps, isDragActive, fileRejections }) => {
        const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > MAX_SIZE
        return (
          <section className='w-full border border-dashed rounded-md h-56 flex items-center justify-center'>
            <div
              {...getRootProps()}
              className='w-full h-full flex items-center justify-center flex-col'
            >
              <input {...getInputProps()} />
              <h3 className='text-primaryBlue text-center'>Drop files here to upload</h3>
              <p className='text-sm text-garyish text-center mb-3 transition-all duration-300 ease-in-out'>
                {isDragActive
                  ? 'Relase Here'
                  : 'To upload file size is (Max 5Mb) and allowed pdf files are allowed'}
              </p>
              {isFileTooLarge && <p className='text-red-500 my-2'>File is too large</p>}
              <div className='w-full flex items-center justify-center'>
                <Button type='button' additionalClasses='px-5 py-2 rounded-md'>
                  Upload Resume
                </Button>
              </div>
            </div>
          </section>
        )
      }}
    </Dropzone>
  )
}

export default CVDropZone
