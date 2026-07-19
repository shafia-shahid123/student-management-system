"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { students } from "@/data/students";

import {
  FaBookOpen,
  FaUsers,
  FaArrowRight,
  FaCog,
} from "react-icons/fa";

export default function TeacherCourses() {
  const router = useRouter();

  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("teacher");

    if (data) {
      setTeacher(JSON.parse(data));
    }
  }, []);

  if (!teacher) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="animate-pulse text-xl font-semibold text-indigo-500">
          Loading Courses...
        </h1>
      </div>
    );
  }

  const totalStudents = students.filter(
    (student) => student.course === teacher.course
  ).length;

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
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-900">
          My Course
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your assigned course and students.
        </p>
      </div>

      {/* Course Card */}

      <div className="max-w-xl">
        <div
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
          {/* Course Header */}

          <div className="flex items-center gap-4">
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
              <FaBookOpen className="text-2xl text-indigo-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-indigo-900">
                {teacher.course}
              </h2>

              <p className="text-sm text-slate-500">
                {teacher.semester}
              </p>
            </div>
          </div>

          {/* Student Count */}

          <div
            className="
              mt-7
              flex
              items-center
              gap-3
              rounded-xl
              bg-indigo-50
              p-3
            "
          >
            <FaUsers className="text-xl text-indigo-600" />

            <span className="font-semibold text-indigo-800">
              {totalStudents} Students
            </span>
          </div>

          {/* Buttons */}

          <div className="mt-6 space-y-3">
            <button
              onClick={() =>
                router.push(
                  `/teacher/students?course=${encodeURIComponent(
                    teacher.course
                  )}`
                )
              }
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-indigo-600
                py-3
                font-semibold
                text-white
                transition
                hover:bg-indigo-700
              "
            >
              View Students

              <FaArrowRight />
            </button>

            <button
              onClick={() =>
                router.push(
                  `/teacher/courses/${encodeURIComponent(
                    teacher.course
                  )}`
                )
              }
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-indigo-200
                py-3
                font-semibold
                text-indigo-600
                transition
                hover:bg-indigo-50
              "
            >
              Manage Course

              <FaCog />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}