"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  FaBookOpen,
  FaFilePdf,
  FaClipboardList,
  FaQuestionCircle,
  FaChartBar,
  FaCalendarCheck,
  FaDownload,
} from "react-icons/fa";


export default function CourseDetails() {
const params = useParams();

const course = params?.courses
  ? decodeURIComponent(params.courses)
  : "";


  const [lectures, setLectures] = useState([]);



useEffect(() => {

  const saved =
    JSON.parse(localStorage.getItem("lectures")) || {};

  setLectures(saved[course] || []);

}, [course]);




  return (

    <main
    className="
    min-h-screen
    bg-gradient-to-br
    from-indigo-50
    via-white
    to-purple-50
    px-6
    py-10
    md:px-12
    "
    >



      {/* Course Header */}


      <section
      className="
      mx-auto
      max-w-6xl
      rounded-3xl
      bg-gradient-to-r
      from-indigo-600
      via-violet-600
      to-blue-600
      p-8
      text-white
      shadow-xl
      "
      >


        <div className="
        flex
        items-center
        gap-5
        ">


          <div
          className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-white/20
          "
          >

            <FaBookOpen className="text-3xl" />

          </div>



          <div>


            <h1 className="
            text-3xl
            font-bold
            ">

              {course}

            </h1>


            <p className="
            mt-2
            text-white/80
            ">

              Access lectures, assignments and course materials.

            </p>


          </div>


        </div>


      </section>







      {/* Course Modules */}



      <section
      className="
      mx-auto
      mt-8
      grid
      max-w-6xl
      gap-6
      md:grid-cols-2
      lg:grid-cols-4
      "
      >


        <ModuleCard
          icon={<FaBookOpen />}
          title="Lectures"
          value={`${lectures.length} Available`}
        />


        <ModuleCard
          icon={<FaClipboardList />}
          title="Assignments"
          value="Coming Soon"
        />


        <ModuleCard
          icon={<FaQuestionCircle />}
          title="Quizzes"
          value="Coming Soon"
        />


        <ModuleCard
          icon={<FaChartBar />}
          title="Results"
          value="Coming Soon"
        />


      </section>








      {/* Lectures Section */}



      {/* Lectures Section */}

<section
  className="
  mx-auto
  mt-10
  max-w-6xl
  "
>

  <h2
    className="
    text-2xl
    font-bold
    text-indigo-900
    "
  >
    Course Lectures
  </h2>

  {lectures.length === 0 ? (

    <div
      className="
      mt-5
      rounded-3xl
      border
      border-indigo-100
      bg-white
      p-8
      text-center
      text-slate-500
      shadow-sm
      "
    >
      No lectures uploaded yet.
    </div>

  ) : (

    <div
      className="
      mt-5
      grid
      gap-5
      md:grid-cols-2
      "
    >

      {lectures.map((lecture, index) => (

        <div
          key={index}
          className="
          flex
          items-center
          justify-between
          rounded-3xl
          border
          border-indigo-100
          bg-white
          p-5
          shadow-sm
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
              rounded-2xl
              bg-red-50
              p-4
              text-red-500
              "
            >
              <FaFilePdf />
            </div>

            <div>

              <h3 className="font-bold text-slate-800">
                {lecture.title}
              </h3>

              <p className="text-sm text-slate-500">
                {lecture.pdf}
              </p>

            </div>

          </div>

          {lecture.pdf.startsWith("http") ? (

            <a
              href={lecture.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              items-center
              gap-2
              rounded-full
              bg-indigo-100
              px-4
              py-2
              text-sm
              font-semibold
              text-indigo-700
              transition
              hover:bg-indigo-200
              "
            >
              <FaDownload />
              View
            </a>

          ) : (

            <button
              className="
              flex
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
              <FaDownload />
              View
            </button>

          )}

        </div>

      ))}

    </div>

  )}

</section>

    </main>

  );

}






function ModuleCard({
  icon,
  title,
  value,
}) {


  return (

    <div
    className="
    rounded-3xl
    border
    border-indigo-100
    bg-white
    p-5
    shadow-sm
    "
    >

      <div
      className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-2xl
      bg-indigo-50
      text-xl
      text-indigo-600
      "
      >

        {icon}

      </div>


      <h3
      className="
      mt-4
      font-bold
      text-indigo-900
      "
      >

        {title}

      </h3>


      <p
      className="
      mt-1
      text-sm
      text-slate-500
      "
      >

        {value}

      </p>


    </div>

  );

}