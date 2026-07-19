"use client";

import { useRouter } from "next/navigation";

import {
  FaBookOpen,
  FaUserTie,
  FaClock,
  FaLayerGroup,
} from "react-icons/fa";

export default function CourseCard({
  title,
  instructor,
  duration,
  level,
  buttonText = "View Details",
  onClick,
}) {

  const router = useRouter();


  const handleClick = () => {


    // Custom action if provided
    if (onClick) {
      onClick();
      return;
    }



    // Enrollment logic

    if (buttonText === "Enroll Now") {


      const existingCourses =
        JSON.parse(
          localStorage.getItem("enrolledCourses")
        ) || [];



      if (!existingCourses.includes(title)) {


        const updatedCourses = [
          ...existingCourses,
          title,
        ];


        localStorage.setItem(
          "enrolledCourses",
          JSON.stringify(updatedCourses)
        );


        alert(
          `${title} enrolled successfully!`
        );


      } else {


        alert(
          "You are already enrolled in this course."
        );


      }


      return;

    }




    // Default View Details

    router.push(`/courses/${title}`);


  };



  return (
    <div
      className="
        group rounded-3xl border border-indigo-100
        bg-white p-6 shadow-md transition-all
        duration-300 hover:-translate-y-2
        hover:shadow-xl hover:shadow-indigo-100
      "
    >


      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-2xl bg-indigo-100
        "
      >

        <FaBookOpen className="text-2xl text-indigo-600" />

      </div>




      <h2 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h2>



      <div className="mt-5 space-y-3 text-sm text-slate-600">


        <div className="flex items-center gap-3">
          <FaUserTie className="text-indigo-500" />
          <span>{instructor}</span>
        </div>



        <div className="flex items-center gap-3">
          <FaClock className="text-violet-500" />
          <span>{duration}</span>
        </div>



        <div className="flex items-center gap-3">
          <FaLayerGroup className="text-cyan-600" />
          <span>{level}</span>
        </div>


      </div>





      <button
        onClick={handleClick}
        className="
          mt-6 w-full rounded-xl
          bg-gradient-to-r from-indigo-600 to-violet-600
          py-3 font-semibold text-white
          shadow-lg shadow-indigo-200/40
          transition hover:scale-[1.02]
        "
      >

        {buttonText}

      </button>



    </div>
  );
}