"use client";

import { useParams, useRouter } from "next/navigation";

import {
  FaBookOpen,
  FaClipboardList,
  FaQuestionCircle,
  FaCalendarCheck,
  FaChartBar,
  FaArrowLeft,
} from "react-icons/fa";

export default function ManageCourse() {
  const router = useRouter();
  const params = useParams();

  const course = decodeURIComponent(params.course);

  const managementCards = [
    {
      title: "Manage Lectures",
      description: "Upload and organize lecture notes and PDFs.",
      icon: <FaBookOpen className="text-3xl text-indigo-600" />,
      path: "lectures",
    },
    {
      title: "Manage Assignments",
      description: "Create and manage assignments for students.",
      icon: <FaClipboardList className="text-3xl text-violet-600" />,
      path: "assignments",
    },
    {
      title: "Manage Quizzes",
      description: "Create quizzes and online assessments.",
      icon: <FaQuestionCircle className="text-3xl text-cyan-600" />,
      path: "quizzes",
    },
    {
      title: "Attendance",
      description: "Mark and review student attendance.",
      icon: <FaCalendarCheck className="text-3xl text-green-600" />,
      path: "attendance",
    },
    {
      title: "Results",
      description: "Upload marks and publish student results.",
      icon: <FaChartBar className="text-3xl text-orange-500" />,
      path: "results",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-8">
      {/* Back Button */}
      <button
        onClick={() => router.push("/teacher/courses")}
        className="mb-6 flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-2 font-medium text-indigo-600 transition hover:bg-indigo-50"
      >
        <FaArrowLeft />
        Back to My Courses
      </button>

      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold">{course}</h1>

        <p className="mt-2 text-white/80">
          Manage all course resources from one place.
        </p>
      </div>

      {/* Management Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {managementCards.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5">{item.icon}</div>

            <h2 className="text-xl font-bold text-slate-800">
              {item.title}
            </h2>

            <p className="mt-2 text-slate-500">
              {item.description}
            </p>

            <button
              onClick={() =>
                router.push(`/teacher/courses/${course}/${item.path}`)
              }
              className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}