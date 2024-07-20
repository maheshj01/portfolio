import React, { FormEvent, useRef, useState } from 'react';
import { useDarkMode } from "../contexts/AppThemeProvider";
import { Button, Form, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface Status {
    submitted: boolean;
    submitting: boolean;
    info: { error: boolean; msg: string | null };
}

function ContactForm() {
    const { darkMode } = useDarkMode();
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<Status>({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const themeStyles = {
        light: {
            text: "text-gray-800",
            input: "bg-white border-gray-300 focus:border-blue-600 focus:ring-2",
        },
        dark: {
            text: "text-gray-100",
            input: "bg-gray-700 border-gray-600 placeholder-gray-100 focus:bg-gray-600 focus:text-white focus:border-gray-100",
        }
    };

    const currentTheme = darkMode ? themeStyles.dark : themeStyles.light;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

        if (formRef.current) {
            emailjs.sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_ID ?? '',
                process.env.REACT_APP_EMAIL_TEMPLATE ?? '',
                formRef.current,
                process.env.REACT_APP_EMAIL_PUBLIC
            )
                .then(() => {
                    setStatus({
                        submitted: true,
                        submitting: false,
                        info: { error: false, msg: "Thank you, your message has been sent." }
                    });
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                }, (error) => {
                    setStatus({
                        submitted: false,
                        submitting: false,
                        info: { error: true, msg: "An error occurred. Please try again later." }
                    });
                    console.error('Error sending email:', error);
                });
        }
    };

    return (
        <section id="contact" className={`py-20`}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-4"
            >
                <h2 className={`text-4xl font-bold text-center mb-8 ${currentTheme.text}`}>Let's Connect</h2>
                {status.info.error && (
                    <Alert variant="danger" className="mb-4">
                        {status.info.msg}
                    </Alert>
                )}
                {status.submitted ? (
                    <div className='flex justify-center'>
                        {status.info.msg}
                    </div>
                ) : (
                    <Form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <Form.Group className="mb-4">
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={status.submitting}
                                className={`w-full p-2 rounded-md ${currentTheme.input} ${currentTheme.text}`}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                disabled={status.submitting}
                                onChange={handleChange}
                                className={`w-full p-2 rounded-md ${currentTheme.input} ${currentTheme.text}`}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Control
                                as="textarea"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                disabled={status.submitting}
                                onChange={handleChange}
                                className={`w-full p-2 rounded-md ${currentTheme.input} ${currentTheme.text}`}
                                rows={5}
                                required
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={status.submitting}
                            className="w-full py-2 rounded-md font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            {status.submitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </Form>
                )}
            </motion.div>
        </section>
    );
}

export default ContactForm;