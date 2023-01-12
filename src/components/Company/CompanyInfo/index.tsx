import React, { useEffect, useState } from 'react'
import Button from '@component/Shared/Button'
import ImageUpploader from '@component/Shared/Image'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import ReactFlagsSelect from 'react-flags-select'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-hot-toast'

const CompanyInfo = (): JSX.Element => {
  // TODO: sanitize user input
  const [imageFile, setImageFile] = useState({})
  const [imageUpploadError, setImageUpploadError] = useState('')

  const companyId = localStorage.getItem('company_id')
  const token: string = localStorage.getItem('jwt')!
  const { sub }: string = jwtDecode(token) // id of the logged in user
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const defaultValues = {
    name: '',
    email: '',
    website: '',
    image: {},
    country: '',
    city: ''
  }

  const [companyData, setCompanyData] = useState(defaultValues)
  useEffect(() => {
    const id = localStorage.getItem('company_id')
    const getCompanyData = async (): Promise<void> => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:5000/company/${id}`, config)
        setCompanyData(data.company)
        setImageFile(data.company.image)
      } catch (err) {
        toast.error('an error accured ')
      }
    }

    if (id != null) {
      void getCompanyData()
    }
  }, [])

  return (
    <div className='w-full'>
      <Formik
        initialValues={{
          ...companyData
        }}
        enableReinitialize={true}
        validate={(values) => {
          const errors: any = {}
          if (values.name.trim().length === 0) {
            errors.name = 'Company name is required'
          }
          if (values.email.trim().length === 0) {
            errors.email = 'Company email is required'
          }
          if (values.website.trim().length === 0) {
            errors.website = 'Company website is required'
          }
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          if (!values.image) {
            errors.image = 'Company Logo is required'
          }
          if (values.country.trim().length === 0) {
            errors.country = 'Select a Country'
          }
          if (values.city.trim().length === 0) {
            errors.city = 'City is Required'
          }
          return errors
        }}
        onSubmit={async (values, { setSubmitting }) => {
          if (companyId !== null) {
            try {
              const { data } = await axios.patch(
                `http://127.0.0.1:5000/company/update/${companyId}`,
                {
                  ...values
                },
                config
              )
              toast.success('Company Updated Succefully')
            } catch (err) {
              toast.error('an error accured')
            }
          } else {
            try {
              const { data } = await axios.post(
                `http://127.0.0.1:5000/company/profile/${sub}`,
                {
                  ...values
                },
                config
              )
              toast.success('Company Registered Succefully')
              localStorage.setItem('company_id', data.company_id)
            } catch (err) {
              toast.error('an error accured')
            }
          }
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <h3 className='mb-5 text-xl font-semibold'>Company Info</h3>
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
                  Company Name
                </label>
                <Field
                  type='text'
                  name='name'
                  placeholder='Premier Bank'
                  className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
                />
                <div className='h-5'>
                  <ErrorMessage
                    name='name'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='fullname' className='block mb-2 text-gray-900'>
                  Company Email
                </label>
                <Field
                  type='email'
                  name='email'
                  placeholder='info@premierbank.so'
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
                <label htmlFor='fullname' className='block mb-2 text-gray-900'>
                  Company Website
                </label>
                <Field
                  type='text'
                  name='website'
                  placeholder='https://premierbank.so'
                  className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
                />
                <div className='h-5'>
                  <ErrorMessage
                    name='website'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>
              </div>
              <div>
                <label htmlFor='fullname' className='block mb-2 text-gray-900'>
                  Country
                </label>
                <ReactFlagsSelect
                  selected={values.country}
                  searchable
                  onSelect={(code) => setFieldValue('country', code)}
                  className='bg-gray-50 rounded-md '
                  alignOptionsToRight
                />
                <div className='h-5'>
                  <ErrorMessage
                    name='country'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>
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
            </div>
            <div className='w-full flex justify-end'>
              <Button
                type='submit'
                additionalClasses='px-10 py-3 rounded-md mt-5'
                disabled={isSubmitting}
              >
                {companyId !== null ? 'Update' : isSubmitting ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CompanyInfo
