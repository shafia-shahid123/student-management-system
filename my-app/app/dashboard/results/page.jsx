"use client";

import { useEffect, useState } from "react";

import {
  FaCheckCircle,
  FaGraduationCap,
  FaBookOpen,
} from "react-icons/fa";

export default function StudentResults() {

  const [student, setStudent] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {

  const data = localStorage.getItem("student");

  if (!data) return;

  const loggedInStudent = JSON.parse(data);

  setStudent(loggedInStudent);

  const allResults =
    JSON.parse(localStorage.getItem("studentResults")) || {};

  const result =
    allResults[loggedInStudent.registration];

  if (result) {

    setResults([
      {
        subject: result.course,

        // Since the teacher page currently saves only total marks,
        // we'll display them in the Total column.
        mid: "-",

        final: "-",

        total: result.marks,

        grade: result.grade,

        status: result.status,
      },
    ]);

  } else {

    setResults([]);

  }

}, []);



  if (!student) {

    return (

      <div className="flex min-h-screen items-center justify-center">

        <h1 className="animate-pulse text-xl font-semibold text-indigo-600">
          Loading Results...
        </h1>

      </div>

    );

  }

  return (

    <main className="flex-1 bg-slate-50 p-6 md:p-8">

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

        <div className="flex items-center gap-5">

          <FaGraduationCap className="text-5xl text-cyan-200" />

          <div>

            <h1 className="text-3xl font-bold">
              Semester Results
            </h1>

            <p className="mt-2 text-white/80">
              View your latest published results.
            </p>

          </div>

        </div>

      </div>

      {/* Summary */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow">

          <h3 className="text-slate-500">
            Student
          </h3>

          <p className="mt-2 text-xl font-bold">
            {student.name}
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow">

          <h3 className="text-slate-500">
            Registration
          </h3>

          <p className="mt-2 text-xl font-bold">
            {student.registration}
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow">

          <h3 className="text-slate-500">
            CGPA
          </h3>

          <p className="mt-2 text-xl font-bold text-indigo-600">
            {student.cgpa}
          </p>

        </div>

      </div>

      {/* Results */}

      <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Subject
              </th>

              <th className="px-6 py-4 text-center">
                Mid
              </th>

              <th className="px-6 py-4 text-center">
                Final
              </th>

              <th className="px-6 py-4 text-center">
                Total
              </th>

              <th className="px-6 py-4 text-center">
                Grade
              </th>

              <th className="px-6 py-4 text-center">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {results.length === 0 ? (

              <tr>

                <td
                  colSpan="6"
                  className="py-10 text-center text-slate-500"
                >
                  No published results available.
                </td>

              </tr>

            ) : (

              results.map((result) => (

                <tr
                  key={result.subject}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="px-6 py-4 font-semibold">

                    <div className="flex items-center gap-2">

                      <FaBookOpen className="text-indigo-500" />

                      {result.subject}

                    </div>

                  </td>

                  <td className="px-6 py-4 text-center">
                    {result.mid}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {result.final}
                  </td>

                  <td className="px-6 py-4 text-center font-semibold">
                    {result.total}
                  </td>

                  <td className="px-6 py-4 text-center">

                    <span className="rounded-full bg-indigo-100 px-3 py-1 font-semibold text-indigo-700">

                      {result.grade}

                    </span>

                  </td>

                  <td className="px-6 py-4 text-center">

                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-semibold ${
                        result.status === "Pass"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >

                      <FaCheckCircle />

                      {result.status}

                    </span>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* Overall */}

      <div className="mt-8 rounded-3xl bg-white p-8 shadow">

        <div className="grid gap-6 md:grid-cols-3">

          <div>

            <h3 className="text-slate-500">
              Semester
            </h3>

            <p className="mt-2 text-2xl font-bold">
              {student.semester}
            </p>

          </div>

          <div>

            <h3 className="text-slate-500">
              CGPA
            </h3>

            <p className="mt-2 text-2xl font-bold text-indigo-600">
              {student.cgpa}
            </p>

          </div>

          <div>

            <h3 className="text-slate-500">
              Overall Result
            </h3>

            <p
  className={`mt-2 text-2xl font-bold ${
    results.length > 0 && results.every((r) => r.status === "Pass")
      ? "text-green-600"
      : "text-red-600"
  }`}
>
  {results.length === 0
    ? "-"
    : results.every((r) => r.status === "Pass")
    ? "PASS"
    : "FAIL"}
</p>

          </div>

        </div>

      </div>

    </main>

  );

}