"use client";

import { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaFilePdf,
  FaClipboardList,
  FaQuestionCircle,
} from "react-icons/fa";

import Link from "next/link";

export default function MyCourse() {

  const [teacher,setTeacher] = useState(null);

  useEffect(()=>{
    const data = localStorage.getItem("teacher");

    if(data){
      setTeacher(JSON.parse(data));
    }

  },[]);


  if(!teacher){
    return (
      <div className="p-8">
        Loading Course...
      </div>
    )
  }


  return (
    <main className="p-8">

      <section className="
      rounded-3xl
      bg-gradient-to-r
      from-indigo-600
      via-violet-600
      to-blue-600
      p-8
      text-white
      shadow-xl
      ">

        <FaBookOpen className="text-5xl mb-4"/>

        <h1 className="text-4xl font-bold">
          {teacher.course}
        </h1>

        <p className="mt-2">
          Course Code: {teacher.courseCode}
        </p>

      </section>


      <div className="mt-8 grid gap-6 md:grid-cols-3">


        <Link href="/teacher/my-course/lectures">
          <div className="
          rounded-2xl
          bg-white
          p-6
          shadow-md
          hover:-translate-y-2
          transition
          ">
            <FaFilePdf className="text-4xl text-red-500"/>
            <h2 className="mt-4 font-bold text-xl">
              Lectures
            </h2>
          </div>
        </Link>



        <Link href="/teacher/my-course/assignments">
          <div className="
          rounded-2xl
          bg-white
          p-6
          shadow-md
          hover:-translate-y-2
          transition
          ">
            <FaClipboardList className="text-4xl text-violet-500"/>
            <h2 className="mt-4 font-bold text-xl">
              Assignments
            </h2>
          </div>
        </Link>



        <Link href="/teacher/my-course/quizzes">
          <div className="
          rounded-2xl
          bg-white
          p-6
          shadow-md
          hover:-translate-y-2
          transition
          ">
            <FaQuestionCircle className="text-4xl text-cyan-500"/>
            <h2 className="mt-4 font-bold text-xl">
              Quizzes
            </h2>
          </div>
        </Link>


      </div>

    </main>
  );
}