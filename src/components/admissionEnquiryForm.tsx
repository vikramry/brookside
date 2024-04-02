import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  grade: Yup.string().required('Grade is required'),
  childName: Yup.string().required('Child Name is required'),
  parentName: Yup.string().required('Parent Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobileNumber: Yup.string().required('Mobile Number is required'),
  city: Yup.string().required('City is required'),
});

const initialValues = {
  grade: '',
  childName: '',
  parentName: '',
  email: '',
  mobileNumber: '',
  city: '',
};
//@ts-ignore
const onSubmit = (values, actions) => {
  // Submit logic goes here
  console.log(values);
  actions.setSubmitting(false);
};

const AdmissionEnquiryForm = () => (
  <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
    <h2>Admission Enquiry</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="grade">Select Grade*</label>
            <Field type="text" name="grade" />
            <ErrorMessage name="grade" component="div" />
          </div>

          <div>
            <label htmlFor="childName">Child Name</label>
            <Field type="text" name="childName" />
            <ErrorMessage name="childName" component="div" />
          </div>

          <div>
            <label htmlFor="parentName">Parent Name</label>
            <Field type="text" name="parentName" />
            <ErrorMessage name="parentName" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="mobileNumber">Mobile Number</label>
            <Field type="tel" name="mobileNumber" />
            <ErrorMessage name="mobileNumber" component="div" />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <Field type="text" name="city" />
            <ErrorMessage name="city" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default AdmissionEnquiryForm;
