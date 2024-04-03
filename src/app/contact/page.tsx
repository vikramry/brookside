"use client"
import ContactCards from "@/components/contactPaceCards"
import * as Yup from "yup";
import { Field, Form, Formik, FormikProps } from "formik";
import { useState } from "react";
import { contactMail } from "@/action";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
    const [loading, setLoading] = useState(false)
    const SignupSchema = Yup.object().shape({
        name: Yup.string().required("Please enter your name"),
        email: Yup.string()
            .email("Invalid email")
            .required("Please enter your email"),
        phone: Yup.string()
            .matches(/^[0-9]/)
            .required("Please enter your phone number")
            .min(10, "Please enter your valid number")
            .max(10, "Please enter your valid number"),
        subject: Yup.string(),
        message: Yup.string()

    });
    return (
        <div className="bg-white">
            <div>

                <div>
                    <img src="/assets/images/contactbg.png" />
                </div>
                <div className="md:p-20 bg-white">
                    <div className="shadow-xl bg-white md:p-20 p-10 rounded-2xl flex flex-row flex-wrap md:gap-28 gap-10 justify-center ">
                        <div className="flex flex-col gap-y-5" >
                            <h1 className="md:text-[40px] text-[20px] font-semibold">We’d love to hear from you</h1>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    phone: '',
                                    subject: '',
                                    message: ''
                                }}
                                validationSchema={SignupSchema}
                                enableReinitialize={true}
                                onSubmit={async (values, { resetForm }) => {
                                    console.log(values, "values")
                                    try {
                                        setLoading(true);
                                        const formData = new FormData();
                                        formData.set("name", values.name);
                                        formData.set("email", values.email);
                                        formData.set("phone", values.phone);
                                        formData.set("subject", values.subject);
                                        formData.set("message", values.message);


                                        const response = await contactMail(formData);
                                        if (response.error) {
                                            throw new Error(response.error);
                                        } else {
                                            toast.success("Successfully submited!")
                                            resetForm({
                                                values: {
                                                    name: '',
                                                    email: '',
                                                    phone: '',
                                                    subject: '',
                                                    message: ''
                                                },
                                            });
                                        }
                                    } catch (error) {
                                        console.log(error, "error");
                                        toast.error("Something went wrong,please try again")
                                    } finally {
                                        setLoading(false);

                                        // resetForm();
                                    }
                                }}
                            >
                                {(props) => (
                                    <Form>
                                        <div className="flex flex-col gap-y-5">
                                            <Field name="name">
                                                {({ field, form: { touched, errors }, meta }: any) => (
                                                    <input {...field} type="text" placeholder="Your name*" className="border-2 bg-gray-50 p-2 rounded" style={{
                                                        border: `${meta.touched && meta.error
                                                            ? "2px solid red"
                                                            : "1px solid gray"
                                                            }`,
                                                    }} />

                                                )}
                                            </Field>
                                            <Field name="email">
                                                {({ field, form: { touched, errors }, meta }: any) => (
                                                    <input {...field} type="email" placeholder="Your email*" className="border-2 bg-gray-50 p-2 rounded" style={{
                                                        border: `${meta.touched && meta.error
                                                            ? "2px solid red"
                                                            : "1px solid gray"
                                                            }`,
                                                    }} />

                                                )}
                                            </Field>

                                            <Field name="phone">
                                                {({ field, form: { touched, errors }, meta }: any) => (

                                                    <input {...field} type="number" placeholder="Phone*" className="border-2 bg-gray-50 p-2 rounded" style={{
                                                        border: `${meta.touched && meta.error
                                                            ? "2px solid red"
                                                            : "1px solid gray"
                                                            }`,
                                                    }} />

                                                )}
                                            </Field>

                                            <Field name="subject">
                                                {({ field, form: { touched, errors }, meta }: any) => (
                                                    <input {...field} type="text" placeholder="Your subject" className="border-2 bg-gray-50 p-2 rounded" style={{
                                                        border: `${meta.touched && meta.error
                                                            ? "2px solid red"
                                                            : "1px solid gray"
                                                            }`,
                                                    }} />

                                                )}
                                            </Field>
                                            <Field name="message">
                                                {({ field, form: { touched, errors }, meta }: any) => (
                                                    <textarea {...field} className="border-2 bg-gray-50 p-2 rounded h-[140px]"
                                                        placeholder="Write your message..."
                                                        style={{
                                                            resize: 'vertical',
                                                            border: `${meta.touched && meta.error
                                                                ? "2px solid red"
                                                                : "1px solid gray"
                                                                }`,
                                                        }}
                                                    />
                                                )}
                                            </Field>

                                            <button type="submit" className="bg-[#F3A20C] rounded-md p-2 text-white font-bold text-sm h-12"> {loading ? (
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
                                                "SEND YOUR MESSAGE"
                                            )}</button>
                                        </div>

                                    </Form>
                                )}
                            </Formik>
                            {/* <input type="text" placeholder="Your name*" className="border-2 bg-gray-50 p-2 rounded" />
                            <input type="number" placeholder="Phone*" className="border-2 bg-gray-50 p-2 rounded" />
                            <input type="email" placeholder="Your email*" className="border-2 bg-gray-50 p-2 rounded" />
                            <input type="text" placeholder="Your subject" className="border-2 bg-gray-50 p-2 rounded" />
                            <textarea className="border-2 bg-gray-50 p-2 rounded h-[140px]"
                                style={{ resize: 'vertical' }}
                                placeholder="Write your message..."
                                value=''
                            // onChange={}
                            />
                            <button className="bg-[#F3A20C] rounded-md p-2">SEND YOUR MESSAGE</button> */}

                        </div>
                        <div className="mapouter"><div className="gmap_canvas"><iframe className="rounded-2xl md:w-[460px] md:h-[535px]  h-[500px]" id="gmap_canvas" src="https://maps.google.com/maps?q=The%20Brookfield%20International%20school%20kondapur&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no" ></iframe></div></div>

                    </div>
                </div>
                <ContactCards />
            </div>
            <Toaster toastOptions={{
                style: {
                    maxWidth: 500,
                    fontSize: "14px"
                }
            }} />        </div>
    )
}

export default page
