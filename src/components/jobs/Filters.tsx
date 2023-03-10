/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import { Formik, Form, Field } from 'formik'

import { FiFilter } from 'react-icons/fi'
import Button from '@component/Shared/Button'
import { level, type } from '@utils/JobsUtil'

const JobFilters = (): React.ReactElement => {
  interface Props {
    children?: string
    onClick?: (name: string, val: any) => void
    value?: any
  }

  const DateTimeRendere = forwardRef<HTMLButtonElement, Props>(({ value, onClick }, ref) => (
    <button
      onClick={(val) => onClick!('datePosted', val)}
      ref={ref}
      className='bg-blue-50 py-2 px-3 rounded-md text-sm'
    >
      {value}
    </button>
  ))

  return (
    <div className='flex items-start justify-start mt-8 w-full'>
      <Formik
        initialValues={{ jobType: '', datePosted: new Date(), level: '' }}
        onSubmit={(values, { setSubmitting }) => {
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
              {type.map((job, i) => (
                <option key={job} value={job} label={job} />
              ))}
            </Field>
            <Field
              name='level'
              component='select'
              className='text-gray-900 text-sm rounded-lg block p-2 !outline-none bg-blue-50'
            >
              <option value='' label='Select level' />
              {level.map((job) => (
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
                  maxDate={new Date()}
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
