"use client";

import { useEffect, useState } from "react";
import { students } from "@/data/students";

import {
  FaChartBar,
  FaUserGraduate,
  FaBookOpen,
  FaSave,
} from "react-icons/fa";

export default function ResultsPage() {
  const [teacher, setTeacher] = useState(null);
  const [courseStudents, setCourseStudents] = useState([]);
  const [results, setResults] = useState({});

  useEffect(() => {
    const teacherData = localStorage.getItem("teacher");

    if (!teacherData) return;

    const parsedTeacher = JSON.parse(teacherData);

    setTeacher(parsedTeacher);

    // Load only students of this teacher's course
    const filteredStudents = students.filter(
      (student) => student.course === parsedTeacher.course
    );

    setCourseStudents(filteredStudents);

    // Load previously saved results from history
    const history =
      JSON.parse(localStorage.getItem("resultsHistory")) || [];

    const existingResults = history.find(
      (item) =>
        item.teacher === parsedTeacher.name &&
        item.course === parsedTeacher.course
    );

    if (existingResults) {
      setResults(existingResults.results);
    }
  }, []);

  // Update Marks
 function handleMarks(registration, value) {

  const marks = Number(value);

  let grade = "F";

  if (marks >= 90) grade = "A+";
  else if (marks >= 80) grade = "A";
  else if (marks >= 70) grade = "B";
  else if (marks >= 60) grade = "C";
  else if (marks >= 50) grade = "D";

  setResults((previous) => ({

    ...previous,

    [registration]: {

      marks,

      grade,

      status: marks >= 50 ? "Pass" : "Fail",

    },

  }));

}

  // Update Grade
  function handleGrade(registration, value) {
    setResults((previous) => ({
      ...previous,
      [registration]: {
        ...previous[registration],
        grade: value,
      },
    }));
  }

  // Save Results
  function saveResults() {

  const allResults =
    JSON.parse(localStorage.getItem("studentResults")) || {};

  courseStudents.forEach((student) => {

    const data = results[student.registration];

    if (!data) return;

    allResults[student.registration] = {

      registration: student.registration,

      name: student.name,

      course: teacher.course,

      marks: data.marks,

      grade: data.grade,

      status: data.status,

    };

  });

  localStorage.setItem(
    "studentResults",
    JSON.stringify(allResults)
  );

  alert("Results saved successfully.");

}
  return (
    <main className="space-y-8 p-6 md:p-8">

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
        <div className="flex items-center gap-5">

          <div
            className="
              rounded-2xl
              bg-white/20
              p-4
            "
          >
            <FaChartBar className="text-4xl text-cyan-200" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Manage Results
            </h1>

            <p className="mt-2 text-indigo-100">
              {teacher?.course}
            </p>
          </div>

        </div>
      </section>

      {/* Results Card */}
      <section
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-lg
        "
      >

        <div className="mb-8 flex items-center gap-3">

          <FaBookOpen
            className="
              text-2xl
              text-violet-600
            "
          />

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              Student Results
            </h2>

            <p className="text-slate-500">
              Enter marks and grades individually
            </p>

          </div>

        </div>

        <div className="space-y-5">

          {courseStudents.length === 0 ? (

            <p className="text-slate-500">
              No students found for this course.
            </p>

          ) : (

            courseStudents.map((student) => (

              <div
                key={student.registration}
                className="
                  flex
                  flex-col
                  gap-5
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-5
                  transition
                  hover:shadow-md
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >

                {/* Student */}
                <div className="flex items-center gap-4">

                  <div
                    className="
                      rounded-full
                      bg-indigo-100
                      p-3
                    "
                  >
                    <FaUserGraduate
                      className="
                        text-xl
                        text-indigo-600
                      "
                    />
                  </div>

                  <div>

                    <h3 className="font-bold text-slate-800">
                      {student.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {student.registration}
                    </p>

                  </div>

                </div>

                {/* Inputs */}
                <div className="flex items-center gap-4">

                  <input
                    type="number"
                    placeholder="Marks"
                    value={
                      results[student.registration]?.marks || ""
                    }
                    onChange={(e) =>
                      handleMarks(
                        student.registration,
                        e.target.value
                      )
                    }
                    className="
                      w-28
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-2
                      outline-none
                      transition
                      focus:border-indigo-500
                      focus:ring-4
                      focus:ring-indigo-100
                    "
                  />
<div className="rounded-xl bg-indigo-100 px-4 py-2 font-semibold text-indigo-700">

  {results[student.registration]?.grade || "-"}

</div>
<div
  className={`rounded-xl px-4 py-2 font-semibold ${
    results[student.registration]?.status === "Pass"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700"
  }`}
>

  {results[student.registration]?.status || "-"}

</div>
                  

                </div>

              </div>

            ))

          )}

        </div>

        {courseStudents.length > 0 && (

          <button
            onClick={saveResults}
            className="
              mt-8
              flex
              items-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              px-7
              py-3
              font-semibold
              text-white
              shadow-md
              transition
              hover:-translate-y-1
              hover:shadow-xl
              active:scale-95
            "
          >
            <FaSave />
            Save Results
          </button>

        )}

      </section>

    </main>
  );
}
