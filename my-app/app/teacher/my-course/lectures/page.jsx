"use client";

import { useEffect, useState } from "react";
import {
  FaFilePdf,
  FaUpload,
  FaTrash,
  FaBookOpen,
} from "react-icons/fa";

export default function LecturesPage() {

  const [teacher, setTeacher] = useState(null);
  const [lectureTitle, setLectureTitle] = useState("");
  const [fileName, setFileName] = useState("");

  const [lectures, setLectures] = useState([]);


  useEffect(() => {

    const teacherData = localStorage.getItem("teacher");

    if (teacherData) {
      setTeacher(JSON.parse(teacherData));
    }


    const savedLectures =
      JSON.parse(localStorage.getItem("lectures")) || [];

    setLectures(savedLectures);


  }, []);



  function handleUpload(e){

    e.preventDefault();


    if(!lectureTitle || !fileName){
      alert("Please enter lecture title and select file");
      return;
    }


    const newLecture = {

      id: Date.now(),

      title: lectureTitle,

      file: fileName,

      course: teacher.course,

      teacher: teacher.name,

      date: new Date().toLocaleDateString()

    };


    const updatedLectures = [
      ...lectures,
      newLecture
    ];


    setLectures(updatedLectures);


    localStorage.setItem(
      "lectures",
      JSON.stringify(updatedLectures)
    );


    setLectureTitle("");
    setFileName("");

    alert("Lecture uploaded successfully");

  }



 function deleteLecture(id){

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this lecture?"
  );

  if(!confirmDelete) return;


  const updated =
    lectures.filter(
      (lecture)=>lecture.id !== id
    );


  setLectures(updated);


  localStorage.setItem(
    "lectures",
    JSON.stringify(updated)
  );

}



  return (

    <main className="p-6 md:p-8">


      {/* Header */}

      <section
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

        <FaBookOpen className="text-5xl"/>

        <h1 className="mt-4 text-4xl font-bold">
          {teacher?.course} Lectures
        </h1>


        <p className="mt-2 text-white/80">
          Upload and manage your course lectures.
        </p>


      </section>



      {/* Upload Form */}


      <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">


        <h2 className="text-2xl font-bold text-slate-800">
          Upload New Lecture
        </h2>



        <form
        onSubmit={handleUpload}
        className="mt-6 space-y-5"
        >


          <input

          type="text"

          placeholder="Lecture title e.g Introduction to AI"

          value={lectureTitle}

          onChange={(e)=>setLectureTitle(e.target.value)}

          className="
          w-full
          rounded-xl
          border
          p-3
          "
          />



          <input

          type="file"

          accept=".pdf"

          onChange={(e)=>
            setFileName(
              e.target.files[0]?.name
            )
          }

          className="
          w-full
          rounded-xl
          border
          p-3
          "
          />



          <button
          className="
          flex
          items-center
          gap-3
          rounded-xl
          bg-indigo-600
          px-6
          py-3
          font-semibold
          text-white
          hover:bg-indigo-700
          "
          >

            <FaUpload/>

            Upload Lecture

          </button>



        </form>


      </section>




      {/* Uploaded Lectures */}


      <section className="mt-8">


        <h2 className="mb-5 text-2xl font-bold text-slate-800">
          Uploaded Lectures
        </h2>



        <div className="grid gap-5 md:grid-cols-2">


        {
          lectures.map((lecture)=>(


            <div
            key={lecture.id}
            className="
            rounded-2xl
            bg-white
            p-6
            shadow-md
            "
            >


              <FaFilePdf
              className="
              text-4xl
              text-red-500
              "
              />


              <h3 className="mt-4 text-xl font-bold">
                {lecture.title}
              </h3>


              <p className="text-slate-500">
                {lecture.file}
              </p>


              <p className="text-sm text-slate-400">
                Uploaded: {lecture.date}
              </p>



      <button
  onClick={() => deleteLecture(lecture.id)}
  className="
    mt-4
    flex
    items-center
    gap-2
    rounded-xl
    bg-red-50
    px-5
    py-2.5
    font-semibold
    text-red-600
    shadow-sm
    transition-all
    duration-200
    hover:bg-red-600
    hover:text-white
    hover:shadow-lg
    active:scale-95
  "
>
  <FaTrash className="transition-transform duration-200 group-hover:rotate-12" />

  Delete
</button>



            </div>


          ))
        }


        </div>


      </section>



    </main>

  );

}