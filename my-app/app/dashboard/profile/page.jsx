"use client";

import { useEffect, useState } from "react";

import {
  FaUserGraduate,
  FaEnvelope,
  FaIdCard,
  FaUniversity,
  FaBookOpen,
} from "react-icons/fa";

export default function Profile() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("student");

    if (data) {
      setStudent(JSON.parse(data));
    }
  }, []);

  if (!student) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <h2 className="animate-pulse text-xl font-semibold text-slate-600">
          Loading Profile...
        </h2>
      </div>
    );
  }

  return (
    <main className="flex-1 bg-slate-100 p-6 md:p-8">

      {/* Profile Banner */}

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
        <div className="flex flex-col items-center gap-6 md:flex-row">

          {/* Avatar */}

          <div
            className="
              flex
              h-32
              w-32
              items-center
              justify-center
              rounded-full
              border-4
              border-white/40
              bg-white/20
              text-5xl
              font-bold
            "
          >
            {student.name.charAt(0).toUpperCase()}
          </div>

          <div>

            <p className="uppercase tracking-[4px] text-indigo-200">
              Student Portal
            </p>

            <h1 className="mt-2 text-4xl font-extrabold">
              {student.name}
            </h1>

            <p className="mt-2 text-lg text-white/80">
              {student.department} • Semester {student.semester}
            </p>

          </div>

        </div>
      </section>

      {/* Information */}

      <section className="mt-8 grid gap-6 lg:grid-cols-2">

        {/* Personal Information */}

        <div
          className="
            rounded-3xl
            bg-white
            p-8
            shadow-lg
          "
        >
          <div className="mb-6 flex items-center gap-3">

            <FaUserGraduate className="text-3xl text-indigo-600" />

            <h2 className="text-2xl font-bold text-slate-800">
              Personal Information
            </h2>

          </div>

          <div className="space-y-5">

            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-slate-500">Full Name</span>
              <span className="font-semibold text-slate-800">
                {student.name}
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-slate-500">Email</span>
              <span className="font-semibold text-slate-800">
                {student.email}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500">
                Registration No.
              </span>

              <span className="font-semibold text-slate-800">
                {student.registration}
              </span>
            </div>

          </div>

        </div>

        {/* Academic Information */}

        <div
          className="
            rounded-3xl
            bg-white
            p-8
            shadow-lg
          "
        >
          <div className="mb-6 flex items-center gap-3">

            <FaUniversity className="text-3xl text-violet-600" />

            <h2 className="text-2xl font-bold text-slate-800">
              Academic Information
            </h2>

          </div>

          <div className="space-y-5">

            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-slate-500">Department</span>

              <span className="font-semibold text-slate-800">
                {student.department}
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-slate-500">Semester</span>

              <span className="font-semibold text-slate-800">
                {student.semester}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500">CGPA</span>

              <span
                className="
                  rounded-full
                  bg-indigo-100
                  px-4
                  py-1
                  font-bold
                  text-indigo-700
                "
              >
                {student.cgpa}
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* Status */}

      <section
        className="
          mt-8
          rounded-3xl
          bg-white
          p-8
          shadow-lg
        "
      >

        <h2 className="mb-6 text-2xl font-bold text-slate-800">
          Student Status
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-indigo-50 p-6 text-center">

            <FaBookOpen className="mx-auto text-3xl text-indigo-600" />

            <p className="mt-3 text-slate-500">
              Academic Standing
            </p>

            <h3 className="mt-2 text-xl font-bold text-indigo-700">
              Excellent
            </h3>

          </div>

          <div className="rounded-2xl bg-violet-50 p-6 text-center">

            <FaUniversity className="mx-auto text-3xl text-violet-600" />

            <p className="mt-3 text-slate-500">
              Enrollment
            </p>

            <h3 className="mt-2 text-xl font-bold text-violet-700">
              Active
            </h3>

          </div>

          <div className="rounded-2xl bg-cyan-50 p-6 text-center">

            <FaEnvelope className="mx-auto text-3xl text-cyan-600" />

            <p className="mt-3 text-slate-500">
              University Email
            </p>

            <h3 className="mt-2 text-lg font-bold text-cyan-700 break-all">
              {student.email}
            </h3>

          </div>

        </div>

      </section>

    </main>
  );
}