"use client";

import { useState } from "react";

import {
  FaHeadset,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (submitted) {
      setSubmitted(false);
    }

  }

  function handleSubmit(e) {

    e.preventDefault();

    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  }

  return (

    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-100
      via-indigo-50
      to-purple-100
      px-6
      py-12
      md:px-12
      "
    >

      <section
        className="
        mx-auto
        max-w-3xl
        "
      >

        {/* Header */}

        <div className="text-center">

          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-indigo-100
            px-4
            py-2
            text-sm
            font-semibold
            text-indigo-700
            "
          >

            <FaHeadset />

            Student Support

          </div>



          <h1
            className="
            mt-5
            text-4xl
            font-extrabold
            text-slate-900
            "
          >

            Contact{" "}

            <span
              className="
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-blue-500
              bg-clip-text
              text-transparent
              "
            >

              Us

            </span>

          </h1>



          <p
            className="
            mx-auto
            mt-4
            max-w-xl
            text-slate-600
            leading-7
            "
          >

            We'd love to hear from you. Send us your questions,
            feedback, or suggestions and our support team will
            get back to you as soon as possible.

          </p>

        </div>






        {/* Contact Form */}

        <div
          className="
          mt-10
          rounded-3xl
          border
          border-indigo-100
          bg-white/90
          p-8
          shadow-xl
          shadow-indigo-200/40
          backdrop-blur-sm
          "
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input

              type="text"

              name="name"

              value={formData.name}

              onChange={handleChange}

              placeholder="Your Name"

              required

              className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              outline-none
              transition-all
              duration-200
              focus:border-indigo-500
              focus:ring-4
              focus:ring-indigo-100
              "

            />



            <input

              type="email"

              name="email"

              value={formData.email}

              onChange={handleChange}

              placeholder="Your Email"

              required

              className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              outline-none
              transition-all
              duration-200
              focus:border-indigo-500
              focus:ring-4
              focus:ring-indigo-100
              "

            />




            <textarea

              rows="5"

              name="message"

              value={formData.message}

              onChange={handleChange}

              placeholder="Your Message"

              required

              className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              outline-none
              transition-all
              duration-200
              focus:border-indigo-500
              focus:ring-4
              focus:ring-indigo-100
              "

            />




            <button

              type="submit"

              className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
              hover:shadow-indigo-300/40
              "

            >

              <FaPaperPlane />

              Send Message

            </button>



            {
              submitted && (

                <div
                  className="
                  rounded-xl
                  border
                  border-green-200
                  bg-green-50
                  px-4
                  py-3
                  text-green-700
                  "
                >

                  ✅ Your message has been sent successfully.

                </div>

              )
            }

          </form>

        </div>







        {/* Contact Info */}

        <div
          className="
          mt-8
          flex
          flex-wrap
          justify-center
          gap-4
          "
        >

          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-white/80
            px-5
            py-3
            shadow-sm
            backdrop-blur-sm
            "
          >

            <FaEnvelope className="text-indigo-600" />

            <span className="text-slate-700">
              support@studentportal.com
            </span>

          </div>




          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-white/80
            px-5
            py-3
            shadow-sm
            backdrop-blur-sm
            "
          >

            <FaPhone className="text-violet-600" />

            <span className="text-slate-700">
              +92 300 1234567
            </span>

          </div>





          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-white/80
            px-5
            py-3
            shadow-sm
            backdrop-blur-sm
            "
          >

            <FaMapMarkerAlt className="text-cyan-600" />

            <span className="text-slate-700">
              University Campus
            </span>

          </div>

        </div>

      </section>

    </main>

  );

}