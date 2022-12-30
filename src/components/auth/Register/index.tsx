import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { AiOutlineUser } from 'react-icons/ai'

import Button from '@shared/components/Button'
const RegisterForm = (): React.ReactElement => {
  return (
    <div className='flex items-center  justify-center w-full h-full relative z-10'>
      <div className='flex flex-col items-center justify-center w-full h-full '>
        <div className='py-5  p-6 rounded-lg bg-white md:w-[320px] w-full'>
          <h2 className='text-lg font-semibold py-5 '>Create a Free SomJobs Account</h2>
          <div className='w-full flex items-center justify-between gap-2'>
            <Button type='button' additionalClasses='!bg-secondaryDark w-1/2 py-2 rounded-md'>
              <span>
                <AiOutlineUser />
              </span>
              Candidate
            </Button>
            <Button type='button' additionalClasses='w-1/2 !bg-yellow-400 px-9 py-2 rounded-md'>
              <span>
                <AiOutlineUser />
              </span>
              Empolyer
            </Button>
          </div>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors: any = {}
              if (values.email.length === 0) {
                errors.email = 'Email Is Required'
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid Email Address'
              }
              if (values.password.length === 0) {
                errors.password = 'Password is Required'
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false)
              }, 4000)
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor='email' className='block mb-2 text-gray-900'>
                  Email
                </label>
                <Field
                  type='email'
                  name='email'
                  placeHolder='Email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
                />
                <ErrorMessage
                  name='email'
                  component='p'
                  className='text-red-500 text-sm pt-1 pl-1'
                />
                <Field
                  type='password'
                  name='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full mt-2'
                />
                <ErrorMessage
                  name='password'
                  component='p'
                  className='text-red-500 text-sm pt-1 pl-1'
                />
                <div className='w-full flex items-center justify-end mt-3'>
                  <Link to={'/'} className='text-sm font-semibold text-primaryDark'>
                    Forget Password
                  </Link>
                </div>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  additionalClasses='w-full mt-5 h-10 rounded-lg'
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          <div className='w-full flex items-center justify-center'>
            <p className='text-sm text-gray-500 mt-4'>
              Dont have an account?
              <span>
                <Link to='/register' className='font-bold'>
                  Signup
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
