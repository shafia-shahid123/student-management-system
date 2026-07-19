"use client";

import {
  FaGraduationCap,
  FaBookOpen,
  FaCalendarCheck,
  FaClipboardList,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-50
      border
      border-indigo-100
      p-8
      shadow-xl
      "
    >

      {/* Background Glows */}

      <div
        className="
        absolute
        -right-20
        -top-20
        h-96
        w-96
        rounded-full
        bg-purple-300/30
        blur-3xl
        "
      />

      <div
        className="
        absolute
        -left-20
        bottom-0
        h-72
        w-72
        rounded-full
        bg-blue-300/30
        blur-3xl
        "
      />


      <div
        className="
        relative
        z-10
        flex
        min-h-[480px]
        flex-col
        gap-10
        lg:flex-row
        lg:items-center
        lg:justify-between
        "
      >

        {/* LEFT CONTENT */}

        <div className="max-w-xl">

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
            mt-6
            text-5xl
            font-extrabold
            leading-tight
            text-slate-900
            "
          >

            Empower Your

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

              Academic Journey

            </span>

          </h1>




          <p
            className="
            mt-5
            text-lg
            leading-8
            text-slate-600
            "
          >

            Access courses, track attendance,
            manage assignments, check results and
            stay connected with your university
            activities from one platform.

          </p>





          <div className="mt-8 flex gap-4">

            <button
              className="
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              px-7
              py-3
              font-semibold
              text-white
              shadow-xl
              shadow-indigo-300/40
              transition
              hover:scale-105
              "
            >

              Explore Courses

            </button>




            <button
              className="
              rounded-xl
              border
              border-indigo-200
              bg-white
              px-7
              py-3
              font-semibold
              text-slate-700
              transition
              hover:bg-indigo-50
              "
            >

              View Schedule

            </button>

          </div>


        </div>






        {/* RIGHT SIDE OVERVIEW */}

        <div
          className="
          w-full
          max-w-md
          rounded-3xl
          bg-white/80
          backdrop-blur-xl
          border
          border-indigo-100
          p-6
          shadow-xl
          "
        >


          <div
            className="
            flex
            items-center
            justify-between
            "
          >

            <div>

              <p className="text-sm text-slate-500">
                Academic Overview
              </p>

              <h2
                className="
                mt-1
                text-3xl
                font-bold
                text-slate-900
                "
              >

                University Hub

              </h2>

            </div>



            <div
              className="
              rounded-2xl
              bg-indigo-100
              p-4
              "
            >

              <FaGraduationCap
                className="
                text-3xl
                text-indigo-600
                "
              />

            </div>

          </div>





          <div
            className="
            mt-6
            grid
            grid-cols-2
            gap-4
            "
          >


            {/* Courses */}

            <div
              className="
              rounded-2xl
              bg-gradient-to-br
              from-white
              to-indigo-50
              border
              border-indigo-50
              p-4
              shadow-md
              "
            >

              <FaBookOpen
                className="
                text-xl
                text-indigo-600
                "
              />

              <p className="mt-3 text-sm text-slate-500">
                Courses
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                Manage
              </h3>

            </div>






            {/* Attendance */}

            <div
              className="
              rounded-2xl
              bg-gradient-to-br
              from-white
              to-cyan-50
              border
              border-cyan-50
              p-4
              shadow-md
              "
            >

              <FaCalendarCheck
                className="
                text-xl
                text-cyan-600
                "
              />

              <p className="mt-3 text-sm text-slate-500">
                Attendance
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                Track
              </h3>

            </div>






            {/* Assignments */}

            <div
              className="
              rounded-2xl
              bg-gradient-to-br
              from-white
              to-purple-50
              border
              border-purple-50
              p-4
              shadow-md
              "
            >

              <FaClipboardList
                className="
                text-xl
                text-purple-600
                "
              />

              <p className="mt-3 text-sm text-slate-500">
                Assignments
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                Submit
              </h3>

            </div>






            {/* Results */}

            <div
              className="
              rounded-2xl
              bg-gradient-to-br
              from-white
              to-green-50
              border
              border-green-50
              p-4
              shadow-md
              "
            >

              <FaGraduationCap
                className="
                text-xl
                text-green-600
                "
              />

              <p className="mt-3 text-sm text-slate-500">
                Results
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                Check
              </h3>

            </div>


          </div>

        </div>

      </div>

    </section>
  );
}
