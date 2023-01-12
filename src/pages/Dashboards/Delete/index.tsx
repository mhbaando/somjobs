import Button from '@component/Shared/Button'
import DashboarHeading from '@component/Shared/DashboardHeading'
import useAuth from '@hooks/auth'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const DeleteUser = (): JSX.Element => {
  const auth = useAuth()
  const id = auth.user?.sub
  const role = auth.user?.role
  const navigate = useNavigate()

  const token = localStorage.getItem('jwt')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  return (
    <div>
      <DashboarHeading
        heading='Delete'
        headingBold='Account'
        subHeading='This operation is not reversable'
        additionalClass='!text-red-500'
      />
      <div className='bg-white w-full rounded-md mt-12 p-5 border border-red-500'>
        <h3 className='text-xl font-semibold text-red-500'>Danger Zone</h3>
        <p className='text-sm text-gray-400'>
          Are you sure you want to delete your account? This opperation is not reverse able, all
          your data will be gone, and it&apos;s no recoverable
        </p>

        <div className='mt-10 w-full md:w-[400px]'>
          <Formik
            initialValues={{ password: '' }}
            validate={(values) => {
              const errors: any = {}
              if (values.password.length === 0) {
                errors.password = 'Password is Required'
              }
              return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
              if (role === 'employee') {
                try {
                  const { data } = await axios.post(
                    `http://127.0.0.1:5000/employee/delete-user/${id}`,
                    {
                      password: values.password
                    },
                    config
                  )
                  navigate('/')
                  auth.logout()
                  toast.success('Delete succeefully')
                } catch (err) {
                  toast.error('an error accured')
                }
              } else {
                try {
                  const { data } = await axios.post(
                    `http://127.0.0.1:5000/company/delete-user/${id}`,
                    {
                      password: values.password
                    },
                    config
                  )
                  navigate('/')
                  auth.logout()
                  toast.success('Delete succeefully')
                } catch (err) {
                  toast.error('an error accured')
                }
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor='password' className='block mb-2 text-gray-900'>
                  Passowrd
                </label>
                <Field
                  type='password'
                  name='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full mt-2'
                  placeholder='Password'
                />
                <div className='h-5'>
                  <ErrorMessage
                    name='password'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  additionalClasses='w-32 !bg-red-500 mt-5 h-10 rounded-lg'
                >
                  Delete
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default DeleteUser
