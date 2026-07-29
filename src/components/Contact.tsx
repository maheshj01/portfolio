import React, { FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

const inputClass =
  "w-full rounded-lg border border-[var(--rule-strong)] bg-[var(--surface)] px-3.5 py-2.5 text-[var(--ink)] placeholder:text-[var(--muted)] outline-none transition-colors focus:border-[var(--brand)] disabled:opacity-60";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, submitting: true }));
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID ?? "",
          process.env.REACT_APP_EMAIL_TEMPLATE ?? "",
          formRef.current,
          process.env.REACT_APP_EMAIL_PUBLIC
        )
        .then(
          () => {
            setStatus({
              submitted: true,
              submitting: false,
              info: { error: false, msg: "Thank you, your message has been sent." },
            });
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            setStatus({
              submitted: false,
              submitting: false,
              info: { error: true, msg: "An error occurred. Please try again later." },
            });
            setTimeout(
              () => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } }),
              3000
            );
            console.error("Error sending email:", error);
          }
        );
    }
  };

  return (
    <section id="contact" className="section-shell py-16">
      <div className="section-head">
        <h2 className="section-title text-2xl md:text-3xl">Let&rsquo;s connect</h2>
        <span className="section-rule" aria-hidden="true" />
        <span className="font-mono text-xs text-[var(--muted)]">say hello</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl"
      >
        <p className="mb-6 text-[var(--ink-soft)]">
          Have a project, role, or idea in mind? Drop a note and I&rsquo;ll get back to you.
        </p>

        {status.info.error && (
          <div className="mb-5 rounded-lg border border-[var(--rule-strong)] bg-[var(--surface-2)] px-4 py-3 text-sm text-[var(--ink)]">
            {status.info.msg}
          </div>
        )}

        {status.submitted ? (
          <div className="rounded-lg border border-[var(--brand)] bg-[var(--brand-tint)] px-4 py-3 text-sm font-medium text-[var(--brand)]">
            {status.info.msg}
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              disabled={status.submitting}
              className={inputClass}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              disabled={status.submitting}
              className={inputClass}
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              disabled={status.submitting}
              rows={5}
              className={`${inputClass} resize-y`}
              required
            />
            <button
              type="submit"
              disabled={status.submitting}
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-2.5 font-semibold text-[var(--brand-contrast)] transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
            >
              {status.submitting ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}

export default ContactForm;
