/* eslint-disable no-useless-escape */
import Button from '@component/Shared/Button'
import ImageUpploader from '@component/Shared/Image'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'

const UserInfoForm = (): JSX.Element => {
  // TODO: sanitize user input
  const [imageFile, setImageFile] = useState({})
  const [imageUpploadError, setImageUpploadError] = useState('')

  const defaultValues = {
    fullname: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    image: {},
    jobTitle: '',
    linkedinLink: '',
    githubLink: '',
    describtion: ''
  }

  return (
    <Formik
      initialValues={defaultValues}
      validate={(values) => {
        const errors: any = {}
        if (values.fullname.trim().length === 0) {
          errors.fullname = 'Full Name is required'
        }
        if (values.email.trim().length === 0) {
          errors.email = 'Email Is Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid Email Address'
        }
        if (values.phone.length === 0) {
          errors.phone = 'Phone is required'
        }
        if (values.jobTitle.length === 0) {
          errors.jobTitle = 'Your Provison is required'
        }
        if (values.city.length === 0) {
          errors.city = 'City is required'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setTimeout(() => {
          setSubmitting(false)
        }, 4000)
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <ImageUpploader
            imageFile={imageFile}
            setImageFile={setImageFile}
            imageUpploadError={imageUpploadError}
            setImageUpploadError={setImageUpploadError}
            parentStyle='flex items-start gap-5 flex-col md:flex-row md:items-end mb-12'
            imgStyle='bg-whiteBlue w-32 h-32 rounded-md object-cover object-center'
            setFieldValue={setFieldValue}
          />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-10'>
            <div>
              <label htmlFor='fullname' className='block mb-2 text-gray-900'>
                Full Name
              </label>
              <Field
                type='text'
                name='fullname'
                placeholder='Geedi Axmed'
                className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
              />
              <div className='h-5'>
                <ErrorMessage
                  name='fullname'
                  component='p'
                  className='text-red-500 text-sm pt-1 pl-1'
                />
              </div>
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-gray-900'>
                Email
              </label>
              <Field
                type='email'
                name='email'
                placeholder='geedi@gmail.com'
                className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
              />
              <div className='h-5'>
                <ErrorMessage
                  name='email'
                  component='p'
                  className='text-red-500 text-sm pt-1 pl-1'
                />
              </div>
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-gray-900'>
                Phone
              </label>
              <Field
                type='text'
                name='phone'
                placeholder='615101010'
                className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
              />
              <div className='h-5'>
                <ErrorMessage
                  name='phone'
                  component='p'
                  className='text-red-500 text-sm pt-1 pl-1'
                />
              </div>
            </div>
            <div>
              <label htmlFor='fullname' className='block mb-2 text-gray-900'>
                Job Title
              </label>
              <Field
                type='text'
                name='jobTitle'
                placeholder='e.g Mechanic'
                className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
              />
              <div className='h-5'>
                <ErrorMessage
                  name='jobTitle'
                  component='p'
                  className='text-red-500 text-sm pt-1 pl-1'
                />
              </div>
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-gray-900'>
                Country
              </label>
              <ReactFlagsSelect
                selected={values.country}
                searchable
                onSelect={(code) => setFieldValue('country', code)}
                className='bg-gray-50 rounded-md '
                alignOptionsToRight
              />
            </div>
            <div>
              <label htmlFor='fullname' className='block mb-2 text-gray-900'>
                City
              </label>
              <Field
                type='text'
                name='city'
                placeholder='Mogadishu'
                className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
              />
              <div className='h-5'>
                <ErrorMessage
                  name='city'
                  component='p'
                  className='text-red-500 text-sm pt-1 pl-1'
                />
              </div>
            </div>
            <div className='md:col-start-1 md:col-end-3 mb-4'>
              <label htmlFor='fullname' className='block mb-2 text-gray-900'>
                Proffesional Summary
              </label>
              <Field name='describtion'>
                {({ field, meta }: any) => {
                  return (
                    <textarea
                      placeholder='Porffessional Summary'
                      className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full h-36 resize-none'
                      value={meta.value}
                      onChange={field.onChange('describtion')}
                    />
                  )
                }}
              </Field>
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-gray-900'>
                Github Link
              </label>
              <Field
                type='text'
                name='githubLink'
                placeholder='https://github.com'
                className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-gray-900'>
                LinkedIn Link
              </label>
              <Field
                type='text'
                name='linkedinLink'
                placeholder='https://linkedin.com/in/username'
                className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
              />
            </div>
          </div>

          <div className='w-full flex justify-end'>
            <Button
              type='submit'
              additionalClasses='px-10 py-3 rounded-md mt-5'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default UserInfoForm
