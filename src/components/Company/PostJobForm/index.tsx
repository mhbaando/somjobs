import { useState } from 'react'
import { Form, Formik } from 'formik'

import JobDetails from './JobDetails'
import Button from '@component/Shared/Button'
import JobRequirements from './JobRequirements'

const PostJobForm = (): JSX.Element => {
  const [previewURL, setPerviewURL] = useState('')

  const initialVlaue = {
    name: '',
    description: {},
    image: {},
    slug: '',
    type: '',
    status: '',
    country: '',
    city: '',
    expereince: '',
    expiredDate: new Date()
  }

  return (
    <div>
      <Formik
        initialValues={initialVlaue}
        validate={(values) => {
          const errors: any = {}
          if (values.name.trim().length === 0) {
            errors.name = 'Job Name is Required'
          }
          if (values.type.trim().length === 0) {
            errors.type = 'Select One Feild'
          }
          if (values.expereince.trim().length === 0) {
            errors.expereince = 'Select One Feild'
          }
          if (values.city.trim().length === 0) {
            errors.city = 'City is required'
          }
          if (values.country.trim().length === 0) {
            errors.country = 'Select a country'
          }
          return errors
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className='mt-10'>
            <JobDetails
              setFieldValue={setFieldValue}
              previewURL={previewURL}
              setPerviewURL={setPerviewURL}
            />

            <JobRequirements values={values} setFieldValue={setFieldValue} />
            {/* Submit button here  */}
            <div className='w-full flex justify-end gap-5'>
              <Button
                type='submit'
                additionalClasses='px-10 py-3 rounded-md mt-5 hover:!bg-blue-600  hover:text-white duration transition-all easy-in-out'
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PostJobForm
