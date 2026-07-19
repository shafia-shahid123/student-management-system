"use client";

import { useEffect, useState } from "react";

import {
  FaBookOpen,
  FaFilePdf,
  FaUpload,
  FaClipboardList,
  FaQuestionCircle,
} from "react-icons/fa";

import { useRouter } from "next/navigation";


export default function TeacherLectures() {

  const router = useRouter();

  const [teacher, setTeacher] = useState(null);
  const [lecture, setLecture] = useState(null);


  useEffect(() => {

    const data = localStorage.getItem("teacher");

    if(data){
      setTeacher(JSON.parse(data));
    }

  }, []);



  function uploadLecture(e){

    const file = e.target.files[0];

    if(file){

      setLecture(file);

      alert("Lecture uploaded successfully");

    }

  }



  if(!teacher){

    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );

  }



  return (

    <main className="space-y-8 p-6 md:p-8">


      {/* Header */}

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


        <div className="flex items-center gap-5">

          <div className="rounded-2xl bg-white/20 p-4">

            <FaBookOpen className="text-4xl"/>

          </div>


          <div>

            <h1 className="text-4xl font-bold">
              Upload Lectures
            </h1>


            <p className="mt-2 text-white/80">

              {teacher.course}

            </p>


          </div>


        </div>


      </section>





      {/* Upload Card */}

      <section className="
      rounded-3xl
      bg-white
      p-8
      shadow-lg
      ">


        <h2 className="text-2xl font-bold text-slate-800">

          Lecture Material

        </h2>


        <p className="mt-2 text-slate-500">

          Upload PDF lectures for your students.

        </p>



        <label className="
        mt-6
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        rounded-2xl
        border-2
        border-dashed
        border-indigo-300
        bg-indigo-50
        p-10
        ">


          <FaUpload className="text-4xl text-indigo-600"/>


          <p className="mt-4 font-semibold text-indigo-700">

            Upload Lecture PDF

          </p>


          <input
          type="file"
          accept=".pdf"
          hidden
          onChange={uploadLecture}
          />


        </label>




        {
          lecture && (

            <div className="
            mt-6
            flex
            items-center
            gap-4
            rounded-xl
            bg-green-50
            p-4
            ">

              <FaFilePdf className="text-3xl text-red-500"/>


              <div>

                <p className="font-semibold">

                  {lecture.name}

                </p>


                <p className="text-sm text-green-600">

                  Uploaded

                </p>


              </div>


            </div>

          )
        }



      </section>




      {/* Sub Options */}

      <section className="grid gap-6 md:grid-cols-2">


        <button

        onClick={() =>
          router.push("/teacher/my-course/assignments")
        }

        className="
        rounded-2xl
        bg-violet-100
        p-6
        text-left
        "

        >

          <FaClipboardList className="text-3xl text-violet-600"/>

          <h3 className="mt-3 font-bold">
            Upload Assignments
          </h3>


        </button>





        <button

        onClick={() =>
          router.push("/teacher/my-course/quizzes")
        }

        className="
        rounded-2xl
        bg-cyan-100
        p-6
        text-left
        "

        >

          <FaQuestionCircle className="text-3xl text-cyan-600"/>


          <h3 className="mt-3 font-bold">
            Upload Quizzes
          </h3>


        </button>


      </section>



    </main>

  );

}