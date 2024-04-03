"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  grade: string;
  childName: string;
  parentName: string;
  email: string;
  mobileNumber: string;
  city: string;
}

const validationSchema = Yup.object().shape({
  grade: Yup.string().required('Grade is required'),
  childName: Yup.string().required('Child Name is required'),
  parentName: Yup.string().required('Parent Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobileNumber: Yup.string().required('Mobile Number is required'),
  city: Yup.string().required('City is required'),
});

const initialValues: FormValues = {
  grade: '',
  childName: '',
  parentName: '',
  email: '',
  mobileNumber: '',
  city: '',
};

const onSubmit = (values: FormValues, actions: any) => {
  // Submit logic goes here
  console.log(values);
  actions.setSubmitting(false);
};

const AdmissionEnquiryForm: React.FC = () => (
  <div className="bg-white p-8 shadow-md rounded-xl">
    <h2 className="text-2xl font-bold mb-4">Admission Enquiry</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-4">
            <Field as="select" name="grade" className="border border-black p-2 w-full rounded-md" placeholder="Select Grade">
              <option value="" disabled>Select Grade</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              {/* Add more grade options as needed */}
            </Field>
            <ErrorMessage name="grade" component="div" />
          </div>

          <div className="mb-4">
            <Field type="text" name="childName" placeholder="Child Name" className="border w-full border-black p-2 rounded-md" />
            <ErrorMessage name="childName" component="div" />
          </div>

          <div className="mb-4">
            <Field type="text" name="parentName" placeholder="Parent Name" className="border w-full border-black p-2 rounded-md" />
            <ErrorMessage name="parentName" component="div" />
          </div>

          <div className="mb-4">
            <Field type="email" name="email" placeholder="Email Address" className="border w-full border-black p-2 rounded-md" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div className="mb-4">
            <Field type="tel" name="mobileNumber" placeholder="Mobile Number" className="border w-full border-black p-2 rounded-md" />
            <ErrorMessage name="mobileNumber" component="div" />
          </div>

          <div className="mb-4">
            <Field type="text" name="city" placeholder="City" className="border w-full border-black p-2 rounded-md" />
            <ErrorMessage name="city" component="div" />
          </div>

          <button className='bg-orMain text-white px-4 py-2 rounded text-xs w-full font-bold' type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default AdmissionEnquiryForm;
