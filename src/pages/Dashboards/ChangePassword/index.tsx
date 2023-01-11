import Button from '@component/Shared/Button'
import DashboarHeading from '@component/Shared/DashboardHeading'
import useAuth from '@hooks/auth'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-hot-toast'

const ChangePassword = (): JSX.Element => {
  const auth = useAuth()
  const id = auth.user?.sub
  const role = auth.user?.role

  const token = localStorage.getItem('jwt')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  return (
    <div>
      <DashboarHeading heading='Change' headingBold='Password' />
      <div className='bg-white rounded-md w-full mt-12 p-5'>
        <h3 className='font-semibold'>Change Password</h3>
        <div className='w-full md:w-[400px] mt-10'>
          <Formik
            initialValues={{
              password: '',
              newPassword: '',
              confirmPassword: ''
            }}
            validate={(values) => {
              const errors: any = {}
              if (values.password.trim().length === 0) {
                errors.password = 'Provide Old Password'
              }
              if (values.newPassword.trim().length === 0) {
                errors.newPassword = 'New password is required'
              } else if (values.password === values.newPassword) {
                errors.newPassword = 'Old Password cant be the same with the new password'
              } else if (
                !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(
                  values.newPassword
                )
              ) {
                errors.newPassword =
                  'At least 1 upper case 1 lowercase 1 number 1 Special Chars and must be 8 chars minimum'
              }
              if (values.confirmPassword.trim().length === 0) {
                errors.confirmPassword = 'Confirm password cannot be empty'
              }
              if (values.newPassword !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords should match'
              }
              return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
              // check the user role
              if (role === 'employee') {
                try {
                  const { data } = await axios.post(
                    `http://127.0.0.1:5000/employee/change-password/${id}`,
                    {
                      old_password: values.password,
                      new_password: values.newPassword
                    },
                    config
                  )

                  toast.success('Changed Succefully')
                } catch (err) {
                  toast.error('ann error accuer')
                }
              } else {
                toast.error('company')
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor='password' className='block text-gray-900'>
                  Old Password <span className='text-red-500'>*</span>
                </label>
                <Field
                  type='password'
                  name='password'
                  placeholder='Old Password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full mt-2'
                />
                <div className='min-h-[20px] mb-2'>
                  <ErrorMessage
                    name='password'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>

                <label htmlFor='newPassword' className='block text-gray-900'>
                  New Password <span className='text-red-500'>*</span>
                </label>
                <Field
                  type='password'
                  name='newPassword'
                  placeholder='New Password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full mt-2'
                />
                <div className='min-h-[20px] mb-2'>
                  <ErrorMessage
                    name='newPassword'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>

                <label htmlFor='newPassword' className='block text-gray-900'>
                  New Password <span className='text-red-500'>*</span>
                </label>
                <Field
                  type='password'
                  name='confirmPassword'
                  placeholder='New Password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full mt-2'
                />
                <div className='min-h-[20px] mb-2'>
                  <ErrorMessage
                    name='confirmPassword'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  additionalClasses='w-32 mt-5 h-10 rounded-lg'
                >
                  Update
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
