"use client";

import {
  FaGraduationCap,
  FaShieldAlt,
  FaUserGraduate,
  FaBookOpen,
  FaCode,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";


export default function About() {

  return (

    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-50
      px-6
      py-12
      md:px-12
      "
    >


      <section
        className="
        mx-auto
        max-w-6xl
        "
      >




        {/* Header */}

        <div
          className="
          text-center
          "
        >


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

            <FaGraduationCap />

            Student Portal

          </div>




          <h1
            className="
            mt-5
            text-4xl
            font-extrabold
            text-slate-900
            md:text-5xl
            "
          >

            About Our

            <span
              className="
              block
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-blue-500
              bg-clip-text
              text-transparent
              "
            >

              Academic Platform

            </span>


          </h1>



          <p
            className="
            mx-auto
            mt-4
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
            "
          >

            A centralized student portal designed to simplify academic
            management by providing easy access to courses, results, profiles,
            and university activities.

          </p>


        </div>








        {/* About Overview */}

        <div
          className="
          mt-10
          rounded-3xl
          border
          border-indigo-100
          bg-white
          p-8
          shadow-lg
          "
        >


          <div
            className="
            flex
            items-center
            gap-4
            "
          >

            <div
              className="
              rounded-2xl
              bg-indigo-100
              p-4
              "
            >

              <FaBookOpen
                className="
                text-2xl
                text-indigo-600
                "
              />

            </div>


            <h2
              className="
              text-2xl
              font-bold
              text-slate-900
              "
            >

              About The Portal

            </h2>


          </div>




          <p
            className="
            mt-5
            leading-8
            text-slate-600
            "
          >

            The Student Portal is a modern web application that helps students
            manage their academic activities through a simple and organized
            interface. Students can securely access their information, explore
            courses, monitor progress, and stay connected with university
            services from one platform.

          </p>


        </div>









        {/* Features */}

        <div
          className="
          mt-8
          grid
          gap-6
          md:grid-cols-3
          "
        >



          <div
            className="
            rounded-3xl
            border
            border-indigo-100
            bg-gradient-to-br
            from-white
            to-indigo-50
            p-6
            shadow-md
            "
          >

            <div
              className="
              rounded-xl
              bg-indigo-100
              p-3
              w-fit
              "
            >

              <FaShieldAlt
                className="
                text-xl
                text-indigo-600
                "
              />

            </div>


            <h3
              className="
              mt-5
              font-bold
              text-slate-900
              "
            >

              Secure Access

            </h3>


            <p className="mt-2 text-sm text-slate-600">

              Protected authentication system for managing student information.

            </p>


          </div>






          <div
            className="
            rounded-3xl
            border
            border-purple-100
            bg-gradient-to-br
            from-white
            to-purple-50
            p-6
            shadow-md
            "
          >

            <div
              className="
              rounded-xl
              bg-purple-100
              p-3
              w-fit
              "
            >

              <FaUserGraduate
                className="
                text-xl
                text-purple-600
                "
              />

            </div>



            <h3
              className="
              mt-5
              font-bold
              text-slate-900
              "
            >

              Student Experience

            </h3>



            <p className="mt-2 text-sm text-slate-600">

              A personalized dashboard designed around student needs.

            </p>


          </div>







          <div
            className="
            rounded-3xl
            border
            border-cyan-100
            bg-gradient-to-br
            from-white
            to-cyan-50
            p-6
            shadow-md
            "
          >

            <div
              className="
              rounded-xl
              bg-cyan-100
              p-3
              w-fit
              "
            >

              <FaChartLine
                className="
                text-xl
                text-cyan-600
                "
              />

            </div>




            <h3
              className="
              mt-5
              font-bold
              text-slate-900
              "
            >

              Academic Progress

            </h3>



            <p className="mt-2 text-sm text-slate-600">

              Track courses, results, and academic activities efficiently.

            </p>


          </div>



        </div>









        {/* Technologies */}

        <div
          className="
          mt-8
          rounded-3xl
          border
          border-indigo-100
          bg-white
          p-8
          shadow-lg
          "
        >


          <div
            className="
            flex
            items-center
            gap-4
            "
          >

            <div
              className="
              rounded-xl
              bg-violet-100
              p-3
              "
            >

              <FaCode
                className="
                text-xl
                text-violet-600
                "
              />

            </div>


            <h2
              className="
              text-2xl
              font-bold
              text-slate-900
              "
            >

              Technologies Used

            </h2>


          </div>





          <div
            className="
            mt-5
            flex
            flex-wrap
            gap-3
            "
          >

            <span className="rounded-xl bg-indigo-100 px-4 py-2 text-indigo-700">
              Next.js
            </span>


            <span className="rounded-xl bg-purple-100 px-4 py-2 text-purple-700">
              React.js
            </span>


            <span className="rounded-xl bg-blue-100 px-4 py-2 text-blue-700">
              Tailwind CSS
            </span>


            <span className="rounded-xl bg-cyan-100 px-4 py-2 text-cyan-700">
              JavaScript
            </span>


          </div>


        </div>









        {/* Mission */}

        <div
          className="
          mt-8
          rounded-3xl
          border
          border-indigo-100
          bg-gradient-to-br
          from-indigo-50
          to-purple-50
          p-8
          shadow-md
          "
        >


          <div
            className="
            flex
            items-center
            gap-3
            "
          >

            <FaLaptopCode
              className="
              text-3xl
              text-indigo-600
              "
            />


            <h2
              className="
              text-2xl
              font-bold
              text-slate-900
              "
            >

              Our Mission

            </h2>


          </div>




          <p
            className="
            mt-4
            leading-8
            text-slate-600
            "
          >

            Our mission is to create a reliable digital environment where
            students can easily access academic services, organize their
            educational activities, and experience a smoother university
            journey through modern technology.

          </p>


        </div>




      </section>


    </main>

  );
}