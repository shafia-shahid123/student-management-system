"use client";

import { useEffect, useState } from "react";

import DashboardCard from "@/components/DashboardCard";

import {
  FaGraduationCap,
  FaChartLine,
  FaBookOpen,
  FaUserGraduate,
  FaCalendarCheck,
  FaClipboardList,
} from "react-icons/fa";

export default function Dashboard() {

  const [student, setStudent] = useState(null);

  useEffect(() => {

    const data = localStorage.getItem("student");

    if (data) {
      setStudent(JSON.parse(data));
    }

  }, []);




  if (!student) {

    return (

      <div
        className="
        flex
        min-h-screen
        items-center
        justify-center
        "
      >

        <h1
          className="
          text-xl
          font-semibold
          text-slate-600
          animate-pulse
          "
        >
          Loading Dashboard...
        </h1>

      </div>

    );

  }




  return (

    <main
      className="
      flex-1
      p-6
      md:p-8
      "
    >

      {/* HERO */}

      <section
        className="
        relative
        overflow-hidden
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

        <div
          className="
          flex
          items-center
          justify-between
          "
        >

          <div>

            <p
              className="
              text-sm
              uppercase
              tracking-[4px]
              text-indigo-200
              "
            >
              University Portal
            </p>

            <h1
              className="
              mt-3
              text-3xl
              font-extrabold
              md:text-4xl
              "
            >
              Welcome, {student.name}
            </h1>

            <p
              className="
              mt-4
              max-w-xl
              text-white/80
              "
            >
              Track your courses, monitor your academic
              progress, and stay updated with university
              activities from one place.
            </p>

          </div>



          <div
            className="
            hidden
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-white/20
            md:flex
            "
          >

            <FaGraduationCap
              className="
              text-5xl
              text-cyan-200
              "
            />

          </div>

        </div>

      </section>





      {/* Dashboard Cards */}

      <section
        className="
        mt-8
        grid
        gap-6
        md:grid-cols-3
        "
      >

        <DashboardCard
          title="Current CGPA"
          value={student.cgpa}
          icon={<FaChartLine />}
          color="cyan"
        />

        <DashboardCard
          title="Semester"
          value={student.semester}
          icon={<FaBookOpen />}
          color="violet"
        />

        <DashboardCard
          title="Department"
          value={student.department}
          icon={<FaUserGraduate />}
          color="blue"
        />

      </section>





      {/* Attendance & Activity */}

      <section
        className="
        mt-8
        grid
        gap-6
        md:grid-cols-2
        "
      >

        {/* Attendance */}

        <div
          className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-md
          "
        >

          <div className="flex items-center gap-4">

            <FaCalendarCheck
              className="
              text-3xl
              text-cyan-500
              "
            />

            <div>

              <h2
                className="
                text-xl
                font-bold
                text-slate-800
                "
              >
                Attendance
              </h2>

              <p className="text-slate-500">
                92% Overall Attendance
              </p>

            </div>

          </div>

          <div
            className="
            mt-5
            h-3
            rounded-full
            bg-slate-200
            "
          >

            <div
              className="
              h-full
              w-[92%]
              rounded-full
              bg-cyan-500
              "
            />

          </div>

        </div>





        {/* Activity */}

        <div
          className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-md
          "
        >

          <div className="flex items-center gap-4">

            <FaClipboardList
              className="
              text-3xl
              text-violet-500
              "
            />

            <div>

              <h2
                className="
                text-xl
                font-bold
                text-slate-800
                "
              >
                Recent Activity
              </h2>

              <p className="text-slate-500">
                Assignments, exams and notices
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}