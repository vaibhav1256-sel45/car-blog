'use client'
import { useForm } from "react-hook-form";
import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextArea";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: "onChange" });

  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = () => {
    setShowAlert(true);
    reset();
    setTimeout(() => setShowAlert(false), 4000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
       className="
     w-full
    max-w-full
    sm:max-w-xl
    md:max-w-2xl
    lg:max-w-3xl
    bg-[#232536]
    p-4 sm:p-6 md:p-8
    rounded-xl shadow-lg mx-auto
    flex flex-col justify-center
  "
      noValidate
    >
      <ContactInput
        label="Name"
        name="name"
        placeholder="Your Name"
        register={register}
        error={errors.name}
        validation={{
          required: "Name is required",
          minLength: { value: 3, message: "Name must be at least 3 characters" },
          maxLength: { value: 20, message: "Name must be at most 20 characters" },
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Name must not contain numbers or special characters",
          },
        }}
        onKeyDown={(e) => {
          if (/\d/.test(e.key)) e.preventDefault();
        }}
      />
      <ContactInput
        label="Email"
        name="email"
        type="email"
        placeholder="you@email.com"
        register={register}
        error={errors.email}
        validation={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        }}
      />
      <ContactInput
        label="Subject"
        name="subject"
        placeholder="Subject"
        register={register}
        error={errors.subject}
        validation={{
          required: "Subject is required",
          minLength: { value: 5, message: "Subject must be at least 5 characters" },
          maxLength: { value: 100, message: "Subject must be at most 100 characters" },
        }}
      />
      <ContactTextarea
        label="Message"
        name="message"
        placeholder="Your message..."
        register={register}
        error={errors.message}
        validation={{
          required: "Message is required",
          minLength: { value: 10, message: "Message must be at least 10 characters" },
          maxLength: { value: 1000, message: "Message must be at most 1000 characters" },
        }}
      />

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3 rounded bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-red-600 hover:to-red-700 text-white font-semibold transition-all duration-200 mt-4 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <FiSend className="text-lg" />
        <span>Send Message</span>
      </button>

      {showAlert && (
        <div
          className="mt-6 p-4 rounded bg-green-600 text-white text-center font-semibold shadow animate-fade-in"
          aria-live="polite"
        >
          Thank you! Your message has been sent.
        </div>
      )}
    </form>
  );
}
