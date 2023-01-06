import { SlLocationPin } from 'react-icons/sl'
import { BsSearch, BsBriefcase } from 'react-icons/bs'
import { Field, Form, Formik } from 'formik'

import headerbg from '@assets/misc/jobsbg.png'
import Button from '@component/Shared/Button'

const Hero = (): React.ReactElement => {
  const jobCategories = ['Software', 'Accounting', 'Bussiness']

  return (
    <section className='section w-full relative'>
      <div className='max-w-6xl mx-auto h-[300px] '>
        <img
          src={headerbg}
          alt='Jobs header bg'
          className='absolute top-0 left-0 -z-10  h-full object-cover object-center'
        />
        <div className='flex items-center justify-center h-full'>
          <Formik
            initialValues={{ jobname: '', joblocation: '', allcetogries: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false)
              }, 4000)
            }}
          >
            {({ isSubmitting }) => (
              <Form className='flex flex-col w-10/12 md:flex-row items-center justify-between max-w-5xl md:w-full mx-auto bg-white p-4 rounded-md gap-5'>
                <div className='relative flex items-center w-full'>
                  <BsSearch className='flex absolute' />
                  <Field
                    type='text'
                    name='jobname'
                    placeholder='Job title or keywords'
                    className='!outline-none pl-6 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
                  />
                </div>
                <div className='relative flex items-center w-full'>
                  <SlLocationPin className='flex absolute' />
                  <Field
                    type='text'
                    name='joblocation'
                    placeholder='City or postcode'
                    className='!outline-none pl-6 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
                  />
                </div>

                <div className='relative flex items-center w-full'>
                  <BsBriefcase className='flex absolute' />
                  <Field
                    name='allcetogries'
                    component='select'
                    className='text-gray-900 pl-6 text-sm rounded-lg block p-2.5 w-full !outline-none'
                  >
                    <option value='' label='Select a category' />
                    {jobCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </Field>
                </div>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  additionalClasses='w-1/2 mt-1 h-12 rounded-lg'
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Hero
