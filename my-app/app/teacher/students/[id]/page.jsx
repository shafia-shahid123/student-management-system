"use client";

import { useParams } from "next/navigation";

import { students } from "@/data/students";

import {
  FaUserGraduate,
  FaEnvelope,
  FaIdCard,
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";


export default function StudentProfile() {

  const params = useParams();

  const studentId = params.id;



  const student = students.find(
    (item) =>
      item.registration === studentId
  );



  if (!student) {

    return (

      <main className="
      flex-1
      min-h-screen
      p-8
      ">

        <div className="
        rounded-3xl
        bg-white
        p-8
        text-center
        shadow-md
        ">

          <h1 className="
          text-2xl
          font-bold
          text-slate-700
          ">

            Student Not Found

          </h1>

        </div>

      </main>

    );

  }



  return (

    <main className="
    flex-1
    min-h-screen
    bg-slate-50
    p-6
    md:p-8
    ">


      {/* Header */}


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
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-white/20
          "
          >

            <FaUserGraduate
            className="
            text-5xl
            "
            />


          </div>



          <div>


            <h1 className="
            text-3xl
            font-bold
            ">

              {student.name}

            </h1>


            <p className="
            mt-2
            text-white/80
            ">

              Student Profile

            </p>


          </div>


        </div>


      </div>






      {/* Information Cards */}



      <div
      className="
      mt-8
      grid
      gap-6
      md:grid-cols-2
      "
      >



        <ProfileCard
          icon={<FaIdCard />}
          title="Registration"
          value={student.registration}
        />



        <ProfileCard
          icon={<FaEnvelope />}
          title="Email"
          value={student.email}
        />



        <ProfileCard
          icon={<FaGraduationCap />}
          title="Department"
          value={student.department}
        />



        <ProfileCard
          icon={<FaBookOpen />}
          title="Course"
          value={student.course}
        />



        <ProfileCard
          icon={<FaGraduationCap />}
          title="Semester"
          value={student.semester}
        />



        <ProfileCard
          icon={<FaGraduationCap />}
          title="CGPA"
          value={student.cgpa}
        />



      </div>






      {/* Future Modules */}


      <div
      className="
      mt-8
      rounded-3xl
      border
      border-indigo-100
      bg-white
      p-6
      shadow-sm
      "
      >


        <h2
        className="
        text-xl
        font-bold
        text-indigo-900
        "
        >

          Academic Management

        </h2>



        <div
        className="
        mt-5
        grid
        gap-4
        md:grid-cols-3
        "
        >


          <div className="
          rounded-2xl
          bg-indigo-50
          p-5
          text-center
          font-semibold
          text-indigo-700
          ">

            Results

          </div>



          <div className="
          rounded-2xl
          bg-indigo-50
          p-5
          text-center
          font-semibold
          text-indigo-700
          ">

            Attendance

          </div>



          <div className="
          rounded-2xl
          bg-indigo-50
          p-5
          text-center
          font-semibold
          text-indigo-700
          ">

            Assignments

          </div>



        </div>


      </div>



    </main>

  );

}





function ProfileCard({
  icon,
  title,
  value,
}) {


  return (

    <div
    className="
    flex
    items-center
    gap-4
    rounded-3xl
    border
    border-indigo-100
    bg-white
    p-6
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



      <div>

        <p className="
        text-sm
        text-slate-500
        ">

          {title}

        </p>


        <p className="
        font-semibold
        text-slate-800
        ">

          {value}

        </p>


      </div>



    </div>

  );

}