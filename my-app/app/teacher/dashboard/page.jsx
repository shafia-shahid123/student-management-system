"use client";

import { useEffect, useState } from "react";

import DashboardCard from "@/components/DashboardCard";

import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUsers,
  FaUniversity,
  FaCalendarCheck,
  FaClipboardList,
} from "react-icons/fa";

export default function TeacherDashboard() {
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
        <h1 className="animate-pulse text-xl font-semibold text-slate-600">
          Loading Dashboard...
        </h1>
      </div>
    );
  }

  return (
    <main className="flex-1 p-6 md:p-8">
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
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[4px] text-indigo-200">
              University Portal
            </p>

            <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Welcome, {teacher.name}
            </h1>

            <p className="mt-4 max-w-xl text-white/80">
              Manage your courses, monitor your classes, and stay connected
              with your students from one place.
            </p>
          </div>

          <div className="hidden h-24 w-24 items-center justify-center rounded-full bg-white/20 md:flex">
            <FaChalkboardTeacher className="text-5xl text-cyan-200" />
          </div>
        </div>
      </section>

      {/* Dashboard Cards */}

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <DashboardCard
          title="Department"
          value={teacher.department}
          icon={<FaUniversity />}
          color="cyan"
        />

       <DashboardCard
  title="Course"
  value={teacher.course}
  icon={<FaBookOpen />}
  color="violet"
/>

        <DashboardCard
          title="Students"
          value="50"
          icon={<FaUsers />}
          color="blue"
        />
      </section>

      {/* Courses & Activity */}

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Assigned Courses */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
          <div className="flex items-center gap-4">
            <FaCalendarCheck className="text-3xl text-cyan-500" />

            <div>
             <h2>My Course</h2>
<p>Your assigned course this semester</p>
            </div>
          </div>

         <div className="mt-6">
  <div className="rounded-lg bg-slate-50 px-4 py-3 font-medium text-slate-700">
    {teacher.course}
  </div>
</div>
        </div>

        {/* Recent Activity */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
          <div className="flex items-center gap-4">
            <FaClipboardList className="text-3xl text-violet-500" />

            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Recent Activity
              </h2>

              <p className="text-slate-500">
                Classes, notices and announcements
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-slate-600">
            <p>📢 Faculty meeting on Friday</p>
            <p>📝 Grade submissions due next week</p>
            <p>📚 New course materials uploaded</p>
          </div>
        </div>
      </section>
    </main>
  );
}