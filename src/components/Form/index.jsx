import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Form = () => (
  <Formik
    initialValues = {{ number: '' }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
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
          <label htmlFor="number" style={{ display: 'block' }}>
            Number of phone numbers
          </label>
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

// {({ handleSubmit, handleChange, values }) => (
//   <form onSubmit={handleSubmit}>
//     <input
//       onChange={handleChange} 
//       value={values.name}
//       type="text"
//       placeholder="Name">
//     </input>
//     <button>Submit</button>
//   </form>
// )}