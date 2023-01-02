import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'

import Button from '@component/Shared/Button'
const RegisterForm = (): React.ReactElement => {
  const accountType = ['Candidadate', 'Employer']
  const [selectedType, setSelectedType] = useState(accountType[0])

  return (
    <div className='flex items-center  justify-center w-full h-full relative z-10'>
      <div className='flex flex-col items-center justify-center w-full h-full '>
        <div className='px-6 pb-2 rounded-lg bg-white md:w-[400px] w-full'>
          <h2 className='text-lg font-semibold pt-5 '>Create a Free Account</h2>
          <p className='pb-5 text-sm'>
            <span className='text-red-500'>*</span> Means required
          </p>
          <div className='w-full flex items-center justify-between gap-5 mb-5  '>
            {accountType.map((acnt, i) => {
              return (
                <Button
                  key={i}
                  type='button'
                  additionalClasses={`${
                    selectedType === acnt ? '!bg-secondaryDark' : 'bg-yellow-100 text-secondaryDark'
                  } w-1/2 py-2 rounded-md transition-all duration-300 ease-in-out`}
                  handleClick={() => {
                    setSelectedType(acnt)
                  }}
                >
                  <span className='mr-2'>{i === 0 ? <AiOutlineUser /> : <BsBriefcase />}</span>
                  {acnt}
                </Button>
              )
            })}
          </div>
          <Formik
            initialValues={{ fullname: '', email: '', password: '', confirmpassword: '' }}
            validate={(values) => {
              const errors: any = {}
              if (values.fullname.trim().length === 0) {
                errors.fullname = 'Name is required'
              }
              if (values.email.trim().length === 0) {
                errors.email = 'Email Is Required'
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid Email Address'
              }
              if (values.password.trim().length === 0) {
                errors.password = 'Password is Required'
              } else if (
                !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(
                  values.password
                )
              ) {
                errors.password =
                  'At least 1 upper case 1 lowercase 1 number 1 Special Chars and must be 8 chars minimum'
              }
              if (values.confirmpassword.trim().length === 0) {
                errors.confirmpassword = 'Confirm password cannot be empty'
              }
              if (values.password !== values.confirmpassword) {
                errors.confirmpassword = 'Passwords should match'
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
                <label htmlFor='fullname' className='block mb-2 text-gray-900'>
                  Full Name <span className='text-red-500'>*</span>
                </label>
                <Field
                  type='text'
                  name='fullname'
                  placeHolder='john@gmail.com'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
                />
                <div className='h-5 mb-2'>
                  <ErrorMessage name='fullname' component='div' className='text-red-500 text-sm ' />
                </div>
                <label htmlFor='email' className='block mb-2 text-gray-900'>
                  Email <span className='text-red-500'>*</span>
                </label>
                <Field
                  type='email'
                  name='email'
                  placeHolder='john@gmail.com'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
                />
                <div className='h-5 mb-2'>
                  <ErrorMessage name='email' component='p' className='text-red-500 text-sm ' />
                </div>

                <label htmlFor='password' className='block text-gray-900'>
                  Password <span className='text-red-500'>*</span>
                </label>
                <Field
                  type='password'
                  name='password'
                  placeHolder='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full mt-2'
                />
                <div className='min-h-[20px] mb-2'>
                  <ErrorMessage
                    name='password'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>

                <label htmlFor='password' className='block text-gray-900'>
                  Confirm Password <span className='text-red-500'>*</span>
                </label>
                <Field
                  type='password'
                  name='confirmpassword'
                  placeHolder='retype password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full mt-2'
                />
                <div className='h-5'>
                  <ErrorMessage
                    name='confirmpassword'
                    component='p'
                    className='text-red-500 text-sm pt-1 pl-1'
                  />
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  additionalClasses='w-full mt-5 h-10 rounded-lg'
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
          <div className='w-full flex items-center justify-center'>
            <p className='text-sm text-gray-500 mt-4'>
              Already Have an Account{' '}
              <span>
                <Link to='/login' className='font-bold text-primaryBlue'>
                  Login
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
