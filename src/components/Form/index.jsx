import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { getRandomPhoneNumbers } from '../../actions/phoneNumberActions';

import './form.scss';

const Form = ({ getPhoneNumbers }) => (
  <Formik
    initialValues = {{ number: '' }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        const generatedNumbers = getRandomPhoneNumbers(values.number);
        getPhoneNumbers(generatedNumbers);
        setSubmitting(false);
        resetForm();
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      number: Yup
        .number()
        .typeError('Must be a number')
        .required('Number is required')
        .positive('Must be a positive numbers')
        .integer('Must be an integer'),
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <input
            id="number"
            placeholder="Enter the number of phone numbers you want"
            type="text"
            value={values.number}
            onChange={handleChange}
            className={
              errors.number && touched.number ? 'text-input error' : 'text-input'
            }
          />
            {errors.number && touched.number && (
              <div className="input-feedback">{errors.number}</div>
            )}
          <button
            className="submitButton"
            type="submit"
            disabled={isSubmitting}
          >
            { isSubmitting ? 'Generating...' : 'Generate' }
          </button>
        </form>
      )
    }}

  </Formik>
)

export default Form;
