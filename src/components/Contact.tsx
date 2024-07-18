// src/components/ContactForm.js
import React, { useState } from 'react';
import { useDarkMode } from "../contexts/AppThemeProvider";
import { Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";

function ContactForm() {
    const { darkMode } = useDarkMode();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
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
                <Form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <Form.Group className="mb-4">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
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
                            onChange={handleChange}
                            className={`w-full p-2 rounded-md ${currentTheme.input} ${currentTheme.text}`}
                            rows={5}
                            required
                        />
                    </Form.Group>
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full py-2 rounded-md font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Send Message
                    </Button>
                </Form>
            </motion.div>
        </section>
    );
}

export default ContactForm;