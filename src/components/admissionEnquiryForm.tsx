"use client"
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AdmissionMail } from '@/action';
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { usePathname } from 'next/navigation';

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
  mobileNumber: Yup.string().required('Mobile Number is required').matches(/^[6-9][0-9]{9}$/)
  .required("Please enter your phone number")
  .min(10, "Please enter your valid number")
  .max(10, "Please enter your valid number"),
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



const AdmissionEnquiryForm: React.FC = () => {
  const params = usePathname()
  console.log("🚀 ~ params:", params)
  const [visible, setVisible] = useState(false);
  const [useclass,setClassname]=useState("")
  useEffect(() => {
    let timer:any;
    if (visible) {
      timer = setTimeout(() => {
        setVisible(false);
      }, 60000); // 60000 milliseconds = 1 minute
    }
    return () => clearTimeout(timer); // Cleanup the timer on component unmount or when visible changes
  }, [visible]);

  const [loading, setLoading] = useState(false)
  return (
    <div className="bg-white p-8 shadow-md rounded-xl flex flex-col items-center sm:p-3   ">
      <h2 className="text-4xl font-bold mb-4 text-orMain font-playfair sm:text-xl sm:mb-2 sm:items-center">Admission Enquiry</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values: FormValues, { resetForm }) => {
          console.log(values, "values")
          try {
            setLoading(true);
            const formData = new FormData();
            formData.set("grade", values.grade);
            formData.set("childName", values.childName);
            formData.set("parentName", values.parentName);
            formData.set("email", values.email);
            formData.set("mobileNumber", values.mobileNumber);
            formData.set("city", values.city);

            const serviceId = "service_ec0qqvd";
                    const templateId = "template_8b8vkcv";
                    const publicKey = "hFnSve2iMMNl4kGz3";
                    
                    const emaildata={
                        service_id: serviceId,
                        template_id: templateId,
                        user_id: publicKey,
                        template_params: {
                          grade:values.grade,
                          childName:values.childName,
                          parentName:values.parentName,
                          email:values.email,
                          mobileNumber:values.mobileNumber,
                          city:values.city,
                        }
                    }
                    const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", emaildata);
                    console.log(res.data)

            const response = await AdmissionMail(formData);
            if (res) {
              toast.success("Successfully submited!")
              setVisible(true);
              if(params==="/best-preschool-in-kondapur"){
                setClassname("admenqsuccessmsgpreschool")
              }
              if(params==="/"){
                setClassname("admenqsuccessmsg")
              }
              console.log("cls",useclass);
              
              resetForm({
                values: {
                  grade: '',
                  childName: '',
                  parentName: '',
                  email: '',
                  mobileNumber: '',
                  city: ''

                },
              });
            }
          } catch (error) {
            console.log(error, "error");
            // toast.error("Something went wrong,please try again")
          } finally {
            setLoading(false);

            // resetForm();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className=' w-full sm:text-xs sm:w-4/5 font-roboto'>
            <div className="mb-4 sm:mb-2 ">
              <Field as="select" name="grade" className="border border-black  p-2 w-full rounded-md sm:p-2 formbg" placeholder="Select Grade">
                <option value="" disabled>Select Grade</option>
                <option value="Daycare">Daycare</option>
                <option value="Play group">Play group</option>
                <option value="IK-1">IK-1</option>
                <option value="IK-2">IK-2</option>
                <option value="IK-3">IK-3</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                {/* Add more grade options as needed */}
              </Field>
              <ErrorMessage name="grade" component="div" className='text-xs text-red-600' />
            </div>

            <div className="mb-4">
              <Field type="text" name="childName" placeholder="Child Name" className="border w-full border-black p-2 rounded-md sm:p-2 formbg" />
              <ErrorMessage name="childName" component="div" className='text-xs text-red-600'/>
            </div>

            <div className="mb-4">
              <Field type="text" name="parentName" placeholder="Parent Name" className="border w-full border-black p-2 rounded-md sm:p-2 formbg" />
              <ErrorMessage name="parentName" component="div" className='text-xs text-red-600' />
            </div>

            <div className="mb-4">
              <Field type="email" name="email" placeholder="Email Address" className="border w-full border-black p-2 rounded-md sm:p-2 formbg" />
              <ErrorMessage name="email" component="div" className='text-xs text-red-600'/>
            </div>

            <div className="mb-4">
              <Field type="tel" name="mobileNumber" placeholder="Mobile Number" className="border w-full border-black p-2 rounded-md sm:p-2 formbg" />
              <ErrorMessage name="mobileNumber" component="div" className='text-xs text-red-600' />
            </div>

            <div className="mb-4">
              <Field type="text" name="city" placeholder="City" className="border w-full border-black p-2 rounded-md sm:p-2 formbg" />
              <ErrorMessage name="city" component="div" className='text-xs text-red-600' />
            </div>

            <button className='bg-orMain text-white px-4 py-2 rounded text-xl w-full font-bold sm:p-1 sm:w-full sm:text-sm ' type="submit" disabled={isSubmitting}>
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ClipLoader size={20} color="#000" />
                </div>
              ) : (
                "Submit"
              )}
            </button>
            {visible && <span className={`w-full flex py-4 justify-center ${visible?useclass:""} `}>form submitted Successfully</span>}
          </Form>
        )}
      </Formik>
      <Toaster toastOptions={{
        style: {
          maxWidth: 500,
          fontSize: "14px"
        }
      }} />
    </div>
  )
}


export default AdmissionEnquiryForm;
