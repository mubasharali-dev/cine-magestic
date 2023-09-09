'use client';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import styles from '@/app/contact/contact.module.css';
import buttonStyles from '@/app/styles/common.module.css';
import * as Yup from 'yup';
import {useState} from "react";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    contact: Yup.string().required('Contact is required'),
    message: Yup.string().required('Message is required'),
});


const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        contact: '',
        message: '',
    };

    const [submitting, setSubmitting] = useState(false);
    const [user, setUser] = useState(null);

    const onSubmit = async (values, {resetForm}) => {
        setSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.status === 201) {
                // Handle success (e.g., show a success message)
                console.log('Form data stored successfully');
                setUser({
                    name: '',
                    email: '',
                    contact: '',
                    message: '',
                })

            } else {
                // Handle error (e.g., show an error message)
                console.error('Error storing form data');
            }
        } catch (error) {
            console.error('Error storing form data:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <h3>Contact Us</h3>
            <Formik initialValues={initialValues} validationSchema={validationSchema} // Set the validation schema
                    onSubmit={onSubmit}>
                <Form className={styles.contact_form}>
                    <div className={styles.input_field}>
                        <label className={styles.label} htmlFor="name">Name:</label>
                        <Field type="text" id="name" name="name"/>
                    </div>
                    <ErrorMessage name="name" component="div" className={styles.error_msg}/>

                    <div className={styles.input_field}>
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email"/>
                    </div>
                    <ErrorMessage name="email" component="div" className={styles.error_msg}/>

                    <div className={styles.input_field}>
                        <label className={styles.label} htmlFor="contact">Contact:</label>
                        <Field type="number" id="contact" name="contact"/>
                    </div>
                    <ErrorMessage name="contact" component="div" className={styles.error_msg}/>

                    <div className={styles.input_field}>
                        <label className={styles.label} htmlFor="message">Message:</label>
                        <Field as="textarea" id="message" name="message" rows={5}/>
                    </div>
                    <ErrorMessage name="message" component="div" className={styles.error_msg}/>

                    <div style={{paddingTop: "30px"}}>
                        <button className={buttonStyles.hero_button} type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
