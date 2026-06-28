import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_c1vhvlg';
const EMAILJS_TEMPLATE_ID = 'template_h9p501n';
const EMAILJS_PUBLIC_KEY = 'YKNjup_aOPGnMYqHT';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          // Reset success message after 5 seconds
          setTimeout(() => setSubmitSuccess(false), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitError(true);
          // Reset error message after 5 seconds
          setTimeout(() => setSubmitError(false), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-mono text-indigo-500 dark:text-teal-400 font-bold mb-2">
            Connect With Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Contact
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl glassmorphism dark:glassmorphism border border-slate-100 dark:border-slate-800/80 shadow-md text-left"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-850 dark:text-slate-100 mb-3">
                  Let's discuss opportunities!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  I'm actively seeking internship roles or entry-level positions where I can write Java systems, work on React apps, and collaborate on cool tech solutions. Drop a line, and I will get back to you!
                </p>
              </div>

              <div className="space-y-6">
                {/* Email details */}
                <a
                  href="mailto:rohitdeore2004@gmail.com"
                  className="flex items-center gap-4 group p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/40 border border-transparent hover:border-slate-200/50 dark:hover:border-slate-800/80 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Me</h4>
                    <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-350 mt-0.5">
                      rohitdeore2004@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location details */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl border border-transparent">
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</h4>
                    <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-350 mt-0.5">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels card links */}
            <div className="border-t border-slate-150 dark:border-slate-800/80 pt-6 mt-8">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-4">
                Find Me On
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Rd10code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/deorerohit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 border border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-8 rounded-2xl glassmorphism dark:glassmorphism border border-slate-100 dark:border-slate-800/80 shadow-md flex flex-col"
          >
            <form onSubmit={handleSubmit} className="space-y-6 text-left flex-grow flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Form Alert Message */}
                <AnimatePresence mode="wait">
                  {submitSuccess && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-start gap-3 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Thank you!</span> Your message has been sent successfully. Rohit will get back to you shortly.
                      </div>
                    </motion.div>
                  )}
                  {submitError && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 flex items-start gap-3 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        Something went wrong. Please try again or email me directly.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name Input field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-slate-200/50 dark:border-slate-800 focus:ring-indigo-500/20 focus:border-indigo-500'
                      } text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-4 transition-all`}
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 text-xs text-red-500 font-medium mt-1.5 pl-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email Input field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-slate-200/50 dark:border-slate-800 focus:ring-indigo-500/20 focus:border-indigo-500'
                      } text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-4 transition-all`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-xs text-red-500 font-medium mt-1.5 pl-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message Textarea field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Rohit, we would love to schedule an interview with you regarding..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-slate-200/50 dark:border-slate-800 focus:ring-indigo-500/20 focus:border-indigo-500'
                      } text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-4 transition-all resize-none`}
                    />
                    {errors.message && (
                      <span className="flex items-center gap-1 text-xs text-red-500 font-medium mt-1.5 pl-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800/80 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
