"use client";

import { useParams, useRouter } from "next/navigation";

import {
  FaUsers,
  FaBookOpen,
  FaClipboardList,
  FaQuestionCircle,
  FaCalendarCheck,
  FaChartBar,
} from "react-icons/fa";


export default function ManageCourse() {

  const params = useParams();

  const router = useRouter();

  const course = decodeURIComponent(params.course);



  const options = [
    {
      title: "Upload Lectures",
      description: "Upload lecture notes and PDF material for students.",
      icon: <FaBookOpen />,
      path: "lectures",
    },

    {
      title: "Assignments",
      description: "Create assignments and manage submissions.",
      icon: <FaClipboardList />,
      path: "assignments",
    },

    {
      title: "Quizzes",
      description: "Create quizzes and schedule assessments.",
      icon: <FaQuestionCircle />,
      path: "quizzes",
    },

    {
      title: "Attendance",
      description: "Mark and manage student attendance.",
      icon: <FaCalendarCheck />,
      path: "attendance",
    },

    {
      title: "Results",
      description: "Upload marks and manage results.",
      icon: <FaChartBar />,
      path: "results",
    },
  ];



  return (

    <main className="
    flex-1
    min-h-screen
    bg-slate-50
    p-6
    md:p-8
    ">



      {/* Course Header */}


      <div
      className="
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

            <FaBookOpen
            className="
            text-3xl
            "
            />

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

              Manage course content, students and assessments.

            </p>


          </div>


        </div>


      </div>






      {/* Course Stats */}



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
        bg-white
        p-6
        shadow-sm
        "
        >

          <FaUsers
          className="
          text-3xl
          text-indigo-500
          "
          />


          <h2 className="
          mt-4
          text-2xl
          font-bold
          text-indigo-900
          ">

            Students

          </h2>


          <p className="
          text-slate-500
          ">

            View enrolled students

          </p>


        </div>




        <div
        className="
        rounded-3xl
        border
        border-indigo-100
        bg-white
        p-6
        shadow-sm
        "
        >

          <FaBookOpen
          className="
          text-3xl
          text-indigo-500
          "
          />


          <h2 className="
          mt-4
          text-2xl
          font-bold
          text-indigo-900
          ">

            Course

          </h2>


          <p className="
          text-slate-500
          ">

            Semester 5

          </p>


        </div>



      </div>






      {/* Management Cards */}



      <h2
      className="
      mt-10
      text-2xl
      font-bold
      text-indigo-900
      "
      >

        Course Management

      </h2>





      <div
      className="
      mt-6
      grid
      gap-6
      md:grid-cols-2
      xl:grid-cols-3
      "
      >


        {options.map((item)=>(


          <div
          key={item.title}
          className="
          rounded-3xl
          border
          border-indigo-100
          bg-white
          p-6
          shadow-sm
          transition
          hover:-translate-y-1
          hover:shadow-lg
          "
          >



            <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-indigo-50
            text-2xl
            text-indigo-600
            "
            >

              {item.icon}

            </div>




            <h3
            className="
            mt-5
            text-xl
            font-bold
            text-indigo-900
            "
            >

              {item.title}

            </h3>



            <p
            className="
            mt-2
            text-slate-500
            "
            >

              {item.description}

            </p>




            <button

            onClick={() =>
              router.push(
                `/teacher/courses/${course}/${item.path}`
              )
            }

            className="
            mt-6
            w-full
            rounded-xl
            bg-indigo-500
            py-3
            font-semibold
            text-white
            transition
            hover:bg-indigo-600
            "

            >

              Open

            </button>



          </div>


        ))}


      </div>



    </main>

  );

}