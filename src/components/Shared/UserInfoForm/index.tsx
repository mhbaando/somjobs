/* eslint-disable multiline-ternary */
/* eslint-disable no-useless-escape */
import Button from '@component/Shared/Button'
import ImageUpploader from '@component/Shared/Image'
import useAuth from '@hooks/auth'
import isEmpty from '@utils/isEmpty'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const UserInfoForm = (): JSX.Element => {
  // TODO: sanitize user input
  const auth = useAuth()
  const naviagte = useNavigate()
  const [imageFile, setImageFile] = useState(null)
  const [imageUpploadError, setImageUpploadError] = useState('')

  const token: string = localStorage.getItem('jwt')!
  const { sub }: string = jwtDecode(token) // id of the logged in user
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const defaultValues = {
    id: '',
    full_name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    image: imageFile,
    title: '',
    linkedin_link: '',
    github_link: '',
    summary: ''
  }

  // read data from the back end
  const [userData, setUserData] = useState(defaultValues)
  useEffect(() => {
    // send get request
    if (auth.user?.owner !== null) {
      const getData = async (): Promise<any> => {
        try {
          const { data } = await axios.get(`http://127.0.0.1:5000/employee/profile/${sub}`, config)
          setUserData(data.user)
          setImageFile(data.user.image)
        } catch (err: any) {
          toast.error('Failed To Rerive data')
        }
      }

      void getData()
    }
  }, [])

  return (
    <Formik
      initialValues={{
        ...userData
      }}
      enableReinitialize={true}
      validate={(values) => {
        const errors: any = {}
        if (values.full_name.trim().length === 0) {
          errors.full_name = 'Full Name is required'
        }
        if (values.email.trim().length === 0) {
          errors.email = 'Email Is Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid Email Address'
        }
        if (values.phone.length === 0) {
          errors.phone = 'Phone is required'
        }
        if (values.title.length === 0) {
          errors.title = 'Your Provison is required'
        }
        if (values.city.length === 0) {
          errors.city = 'City is required'
        }
        return errors
      }}
      onSubmit={async (values) => {
        // check are we uppdaing or creating new user
        if (auth.user?.owner !== null) {
          // update user
          const idToUpdate = userData.id
          try {
            const { data } = await axios.patch(
              `http://127.0.0.1:5000/employee/profile/${idToUpdate}`,
              { ...values, id: idToUpdate },
              config
            )

            setUserData(data.user)
            // setImageFile(data.user.image)
            toast.success('Updated Succefully')
          } catch (err) {
            console.log(err)
            toast.error('an error accured')
          }
        } else {
          // create new user
          try {
            const { data } = await axios.post(
              'http://127.0.0.1:5000/employee/profile',
              { ...values, id: sub },
              config
            )
            // update the toke with the new owner
            localStorage.setItem('jwt', data.token)
            naviagte('/employee')
            toast.success('User Registered Succefully')
          } catch (err) {
            toast.error('an error accured')
          }
        }
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
              <label htmlFor='full_name' className='block mb-2 text-gray-900'>
                Full Name
              </label>
              <Field
                type='text'
                name='full_name'
                placeholder='Geedi Axmed'
                className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
                // onChange={() => setFieldValue('full_name', values.full_name)}
              />
              <div className='h-5'>
                <ErrorMessage
                  name='full_name'
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
              <label htmlFor='full_name' className='block mb-2 text-gray-900'>
                Job Title
              </label>
              <Field
                type='text'
                name='title'
                placeholder='e.g Mechanic'
                className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
              />
              <div className='h-5'>
                <ErrorMessage
                  name='title'
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
              <label htmlFor='full_name' className='block mb-2 text-gray-900'>
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
              <label htmlFor='full_name' className='block mb-2 text-gray-900'>
                Proffesional Summary
              </label>
              <Field name='summary'>
                {({ field, meta }: any) => {
                  return (
                    <textarea
                      placeholder='Porffessional Summary'
                      className='bg-gray-50 border !outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full h-36 resize-none'
                      value={meta.value}
                      onChange={field.onChange('summary')}
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
                name='github_link'
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
                name='linkedin_link'
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
              {auth.user?.owner !== null ? 'Update' : isSubmitting ? 'Saving ...' : 'save'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default UserInfoForm
