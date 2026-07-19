"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  FaBookOpen,
  FaArrowRight,
  FaUserTie,
  FaClock,
  FaLayerGroup,
} from "react-icons/fa";


const courseData = {
  "Web Development": {
    instructor: "John Smith",
    duration: "12 Weeks",
    level: "Beginner",
  },

  "Database Systems": {
    instructor: "Sarah Khan",
    duration: "10 Weeks",
    level: "Intermediate",
  },

  "Artificial Intelligence": {
    instructor: "David Lee",
    duration: "16 Weeks",
    level: "Advanced",
  },

  "Software Engineering": {
    instructor: "Michael Brown",
    duration: "14 Weeks",
    level: "Intermediate",
  },
};



export default function MyCourses() {

  const router = useRouter();

  const [courses, setCourses] = useState([]);



  useEffect(() => {

    const enrolledCourses =
      JSON.parse(
        localStorage.getItem("enrolledCourses")
      ) || [];


    setCourses(enrolledCourses);

  }, []);




  return (

    <main
      className="
      flex-1
      min-h-screen
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-50
      p-6
      md:p-8
      "
    >



      {/* Header */}

      <div className="mb-8">

        <h1
          className="
          text-3xl
          font-bold
          text-indigo-900
          "
        >
          My Courses
        </h1>


        <p
          className="
          mt-2
          text-slate-500
          "
        >
          View your enrolled courses and access learning materials.
        </p>


      </div>





      {/* Empty State */}

      {courses.length === 0 ? (

        <div
          className="
          rounded-3xl
          border
          border-indigo-100
          bg-white
          p-8
          text-center
          shadow-sm
          "
        >

          <FaBookOpen
            className="
            mx-auto
            text-5xl
            text-indigo-300
            "
          />


          <h2
            className="
            mt-4
            text-xl
            font-semibold
            text-slate-700
            "
          >
            No Enrolled Courses
          </h2>


          <p className="mt-2 text-slate-500">
            Explore courses and enroll to see them here.
          </p>


        </div>


      ) : (


        <div
          className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
          "
        >



          {courses.map((course) => {


            const details =
              courseData[course];



            return (

              <div
                key={course}
                className="
                rounded-3xl
                border
                border-indigo-100
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                "
              >



                {/* Icon + Title */}


                <div
                  className="
                  flex
                  items-center
                  gap-4
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
                    bg-indigo-100
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
                    text-xl
                    font-bold
                    text-indigo-900
                    "
                  >
                    {course}
                  </h2>


                </div>





                {/* Course Details */}


                <div
                  className="
                  mt-6
                  space-y-3
                  text-sm
                  text-slate-600
                  "
                >


                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <FaUserTie className="text-indigo-500"/>

                    {details?.instructor}

                  </div>



                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <FaClock className="text-violet-500"/>

                    {details?.duration}

                  </div>




                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <FaLayerGroup className="text-cyan-500"/>

                    {details?.level}

                  </div>



                </div>






                {/* Open Course Button */}


                <button
                  onClick={() =>
                    router.push(
                      `/courses/${course}`
                    )
                  }
                 className="
mt-6
flex
w-full
items-center
justify-center
gap-2
rounded-full
bg-indigo-100
py-3
font-semibold
text-indigo-700
transition
hover:bg-indigo-200
"
                >

                  Open Course

                  <FaArrowRight />

                </button>



              </div>


            );


          })}



        </div>


      )}



    </main>

  );

}