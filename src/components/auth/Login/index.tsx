import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import Button from '@component/Shared/Button'

const LoginForm = (): React.ReactElement => {
  return (
    <div className='flex items-center  justify-center w-full h-full relative z-10'>
      <div className='flex flex-col items-center justify-center w-full h-full '>
        <div className='py-5  p-6 rounded-lg bg-white md:w-[400px] w-full'>
          <h2 className='text-lg font-semibold py-5 '>Login to Somjobs</h2>
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
                <div className='h-5'>
                  <ErrorMessage
                    name='email'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>
                <Field
                  type='password'
                  name='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full mt-2'
                  placeHolder='Password'
                />
                <div className='h-5'>
                  <ErrorMessage
                    name='password'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>
                <div className='w-full flex items-center justify-end mt-3'>
                  <Link to={'/'} className='text-sm font-semibold text-primaryDark'>
                    Forget Password
                  </Link>
                </div>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  additionalClasses='w-full mt-1 h-10 rounded-lg'
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
          <div className='w-full flex items-center justify-center'>
            <p className='text-sm text-gray-500 mt-4'>
              Dont have an account ?{' '}
              <span>
                <Link to='/register' className='font-bold text-primaryBlue'>
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

export default LoginForm
