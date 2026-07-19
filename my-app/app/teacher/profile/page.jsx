"use client";

import { useEffect, useState } from "react";

import {
  FaUserCircle,
  FaEnvelope,
  FaUniversity,
  FaBookOpen,
  FaPhoneAlt,
  FaBuilding,
  FaClock,
  FaIdBadge,
  FaUserTie,
  FaUsers,
  FaClipboardList,
  FaQuestionCircle,
  FaCalendarCheck,
  FaChartBar,
} from "react-icons/fa";

export default function TeacherProfile() {
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
        <h2 className="animate-pulse text-xl font-semibold text-slate-600">
          Loading Profile...
        </h2>
      </div>
    );
  }
function InfoCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-2xl text-indigo-600">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">{label}</p>

        <h3 className="text-lg font-semibold text-slate-800">
          {value}
        </h3>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, bg, text }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${bg} ${text}`}
      >
        {icon}
      </div>

      <p className="text-slate-500">{title}</p>

      <h2 className="mt-2 text-3xl font-bold text-slate-800">
        {value}
      </h2>
    </div>
  );
}
  return (
    <main className="space-y-8 p-6 md:p-8">

      {/* Hero Section */}

      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 p-8 text-white shadow-xl">

        <div className="flex flex-col items-center gap-8 md:flex-row">

          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/20 backdrop-blur">
            <FaUserCircle className="text-8xl text-white" />
          </div>

          <div className="flex-1">

            <h1 className="text-4xl font-bold">
              {teacher.name}
            </h1>

            <p className="mt-2 text-xl text-indigo-100">
              {teacher.designation}
            </p>

            <p className="mt-2 text-white/80">
              {teacher.department}
            </p>

          </div>

        </div>

      </section>

      {/* Personal Information */}

      <section className="rounded-3xl bg-white p-8 shadow-lg">

        <div className="mb-8 flex items-center gap-4">

          <div className="rounded-xl bg-indigo-100 p-3">
            <FaUserCircle className="text-2xl text-indigo-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Personal Information
            </h2>

            <p className="text-slate-500">
              Faculty details and contact information
            </p>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <InfoCard
            icon={<FaIdBadge />}
            label="Employee ID"
            value={teacher.employeeId}
          />

          <InfoCard
            icon={<FaUserTie />}
            label="Designation"
            value={teacher.designation}
          />

          <InfoCard
            icon={<FaUniversity />}
            label="Department"
            value={teacher.department}
          />

          <InfoCard
            icon={<FaEnvelope />}
            label="Email"
            value={teacher.email}
          />

          <InfoCard
            icon={<FaPhoneAlt />}
            label="Phone Number"
            value={teacher.phone}
          />

          <InfoCard
            icon={<FaBuilding />}
            label="Office Room"
            value={teacher.office}
          />

          <InfoCard
            icon={<FaClock />}
            label="Office Hours"
            value={teacher.officeHours}
          />

        </div>

      </section>
            {/* Academic Information */}

      <section className="rounded-3xl bg-white p-8 shadow-lg">

        <div className="mb-8 flex items-center gap-4">

          <div className="rounded-xl bg-violet-100 p-3">
            <FaBookOpen className="text-2xl text-violet-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Academic Information
            </h2>

            <p className="text-slate-500">
              Teaching and course information
            </p>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <InfoCard
            icon={<FaBookOpen />}
            label="Assigned Course"
            value={teacher.course}
          />

          <InfoCard
            icon={<FaBookOpen />}
            label="Course Code"
            value={teacher.courseCode}
          />

          <InfoCard
            icon={<FaCalendarCheck />}
            label="Semester"
            value={teacher.semester}
          />

          <InfoCard
            icon={<FaBookOpen />}
            label="Credits"
            value={teacher.credits}
          />

          <InfoCard
            icon={<FaUniversity />}
            label="Program"
            value={teacher.program}
          />

          <InfoCard
            icon={<FaClock />}
            label="Teaching Since"
            value={teacher.teachingSince}
          />

        </div>

      </section>

      {/* Teaching Statistics */}

      <section>

        <div className="mb-8 flex items-center gap-4">

          <div className="rounded-xl bg-cyan-100 p-3">
            <FaChartBar className="text-2xl text-cyan-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Teaching Statistics
            </h2>

            <p className="text-slate-500">
              Current semester overview
            </p>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Students"
            value={teacher.students}
            icon={<FaUsers />}
            bg="bg-blue-100"
            text="text-blue-600"
          />

          <StatCard
            title="Attendance"
            value={teacher.attendance}
            icon={<FaCalendarCheck />}
            bg="bg-green-100"
            text="text-green-600"
          />

          <StatCard
            title="Assignments"
            value={teacher.assignments}
            icon={<FaClipboardList />}
            bg="bg-violet-100"
            text="text-violet-600"
          />

          <StatCard
            title="Quizzes"
            value={teacher.quizzes}
            icon={<FaQuestionCircle />}
            bg="bg-cyan-100"
            text="text-cyan-600"
          />

        </div>

      </section>

    </main>
  );
}