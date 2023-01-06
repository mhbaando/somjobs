/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import { ErrorMessage, Field } from 'formik'

import { level, status, type } from '@utils/JobsUtil'
import ReactFlagsSelect from 'react-flags-select'

const JobRequirements = ({ values, setFieldValue }: any): JSX.Element => {
  interface Props {
    children?: string
    onClick?: (name: string, val: any) => void
    value?: any
  }

  const DateTimeRendere = forwardRef<HTMLButtonElement, Props>(({ value, onClick }, ref) => (
    <button
      onClick={(val) => onClick!('datePosted', val)}
      ref={ref}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm text-left rounded-lg block p-2.5 w-full'
    >
      {value}
    </button>
  ))

  return (
    <div className='w-full grid grid-cols-2 gap-10 mt-10'>
      {/* type */}
      <div>
        <label htmlFor='fullname' className='block mb-2 text-gray-900'>
          Job Type <span className='text-red-500'>*</span>
        </label>
        <Field
          name='type'
          component='select'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
        >
          <option value='' label='Select type' />
          {type.map((job, i) => (
            <option key={job} value={job} label={job} />
          ))}
        </Field>
        <div className='h-5 mb-2'>
          <ErrorMessage name='type' component='p' className='text-red-500 text-sm ' />
        </div>
      </div>

      {/* Status */}
      <div>
        <label htmlFor='fullname' className='block mb-2 text-gray-900'>
          Experience Level <span className='text-red-500'>*</span>
        </label>
        <Field
          name='expereince'
          component='select'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
        >
          <option value='' label='Select level' />
          {level.map((job) => (
            <option key={job} value={job} label={job} />
          ))}
        </Field>
        <div className='h-5 mb-2'>
          <ErrorMessage name='expereince' component='p' className='text-red-500 text-sm ' />
        </div>
      </div>

      {/* Status */}
      <div>
        <label htmlFor='fullname' className='block mb-2 text-gray-900'>
          Job Status
        </label>
        <Field
          name='status'
          component='select'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
        >
          <option value='' label='Select level' />
          {status.map((job) => (
            <option key={job} value={job} label={job} />
          ))}
        </Field>
      </div>

      {/* expired Date */}
      <div>
        <label htmlFor='fullname' className='block mb-2 text-gray-900'>
          Expired Date
        </label>
        <Field name='expiredDate' type='text'>
          {() => (
            <DatePicker
              name='datePosted'
              selected={values.expiredDate}
              onChange={(date) => setFieldValue('expiredDate', date)}
              customInput={<DateTimeRendere />}
              dateFormat='MMM-dd-yyyy'
              minDate={new Date()}
            />
          )}
        </Field>
      </div>

      {/* City */}
      <div>
        <label htmlFor='fullname' className='block mb-2 text-gray-900'>
          City Name <span className='text-red-500'>*</span>
        </label>
        <Field
          type='text'
          name='city'
          placeholder='Mogadishu'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full'
        />
        <div className='h-5 mb-2'>
          <ErrorMessage name='city' component='p' className='text-red-500 text-sm ' />
        </div>
      </div>

      {/* country */}
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
        <div className='h-5 mb-2'>
          <ErrorMessage name='country' component='p' className='text-red-500 text-sm ' />
        </div>
      </div>
    </div>
  )
}

export default JobRequirements
