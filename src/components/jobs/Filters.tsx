/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import { Formik, Form, Field } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'

import { FiFilter } from 'react-icons/fi'
import Button from '@shared/components/Button'

const JobFilters = (): React.ReactElement => {
  const jobTypes = ['Full Time', 'Part Time', 'Contract']
  const joblevel = ['Junior', 'Mid-Senior', 'Senior']

  const DateTimeRendere = forwardRef(({ value, onClick }, ref) => (
    <button
      onClick={(val) => onClick('datePosted', val)}
      ref={ref}
      className='bg-blue-50 py-2 px-3 rounded-md'
    >
      {value}
    </button>
  ))

  return (
    <div className='flex items-start justify-start mt-8 w-full'>
      <Formik
        initialValues={{ jobType: '', datePosted: new Date(), level: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setTimeout(() => {
            setSubmitting(false)
          }, 4000)
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <Form className='flex items-center gap-5'>
            <Field
              name='jobType'
              component='select'
              className='text-gray-900 text-sm rounded-lg block p-2 !outline-none bg-blue-50'
            >
              <option value='' label='Select type' />
              {jobTypes.map((job, i) => (
                <option key={job} value={job} label={job} />
              ))}
            </Field>
            <Field
              name='level'
              component='select'
              className='text-gray-900 text-sm rounded-lg block p-2 !outline-none bg-blue-50'
            >
              <option value='' label='Select level' />
              {joblevel.map((job) => (
                <option key={job} value={job} label={job} />
              ))}
            </Field>
            <Field
              name='datePosted'
              type='text'
              render={() => (
                <DatePicker
                  name='datePosted'
                  selected={values.datePosted}
                  onChange={(date) => setFieldValue('datePosted', date)}
                  customInput={<DateTimeRendere />}
                  dateFormat='MMM-dd-yyyy'
                />
              )}
            />
            <Button
              type='submit'
              handleClick={handleSubmit}
              additionalClasses='px-2 py-2 rounded-full !bg-blue-100 scale-100 hover:scale-90 duration-300 transition-all ease-in-out '
            >
              <FiFilter className='text-lg text-primaryBlue' />
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default JobFilters
