/* eslint-disable multiline-ternary */

import slugify from 'react-slugify'
import Dropzone from 'react-dropzone'
import { ErrorMessage, Field } from 'formik'
import Button from '@component/Shared/Button'
import RichTextEditor from '../RichTextEditor'

const JobDetails = ({ setFieldValue, setPerviewURL, previewURL }: any): JSX.Element => {
  return (
    <>
      <div className='w-full grid grid-cols-2 gap-10'>
        {/* name */}
        <div>
          <label htmlFor='fullname' className='block mb-2 text-gray-900'>
            Job Name <span className='text-red-500'>*</span>
          </label>
          <Field
            type='text'
            name='name'
            placeholder='e.g Senior FrontEnd Developer'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
            onChange={(e: any) => {
              setFieldValue('slug', slugify(e.target.value))
              setFieldValue('name', e.target.value)
            }}
          />
          <div className='h-5 mb-2'>
            <ErrorMessage name='name' component='p' className='text-red-500 text-sm ' />
          </div>
        </div>
        {/* slug */}
        <div>
          <label htmlFor='fullname' className='block mb-2 text-gray-900'>
            Slug <span className='text-red-500'></span>
          </label>
          <Field
            type='text'
            name='slug'
            placeholder='senior-software-engineer'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
            disabled
          />
        </div>
      </div>

      {/* Job Background Image */}
      <Dropzone
        accept={{ 'image/png': ['.png'], 'image/jpg': ['.jpg', '.jpeg'] }}
        maxFiles={1}
        maxSize={1024000}
        onDrop={(acceptedFiles) => {
          setFieldValue('image', acceptedFiles)
          acceptedFiles.forEach((file) => setPerviewURL(URL.createObjectURL(file)))
        }}
      >
        {({ getRootProps, getInputProps, isDragActive, fileRejections }) => {
          const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > 1024000
          return (
            <section className='w-full h-[350px] border border-dashed rounded-md overflow-hidden'>
              <div
                {...getRootProps()}
                className='relative w-full h-full flex flex-col items-center justify-center'
              >
                <input {...getInputProps()} />
                {previewURL.length > 0 ? (
                  <img
                    src={previewURL}
                    alt='upploaded pic'
                    className='absolute top-0 left-0 w-full h-full object-cover object-center'
                  />
                ) : (
                  <>
                    <h3 className='text-primaryBlue text-center'>Drop files here to upload</h3>
                    <p className='text-sm text-garyish text-center mb-3 transition-all duration-300 ease-in-out'>
                      {isDragActive
                        ? 'Relase Here'
                        : 'To upload file size is (Max 5Mb) and allowed pdf files are allowed'}
                    </p>
                    {isFileTooLarge && <p className='text-red-500 mt-1'>File is too large</p>}
                    <Button type='button' additionalClasses='px-5 py-2 rounded-md mt-5'>
                      Upload Image
                    </Button>
                  </>
                )}
              </div>
            </section>
          )
        }}
      </Dropzone>

      {/* Description */}
      <div className='mt-10'>
        <label htmlFor='fullname' className='block mb-2 text-gray-900'>
          Job Description <span className='text-red-500'>*</span>
        </label>
        <RichTextEditor setFieldValue={setFieldValue} />
      </div>
    </>
  )
}

export default JobDetails
