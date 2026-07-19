"use client";

import CourseCard from "@/components/CourseCard";

export default function DashboardCourses() {
  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-50
      px-6
      py-12
      md:px-12
      "
    >
      <section className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold text-slate-900">
          My Courses
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Enroll in courses and continue your academic journey.
        </p>

        <div
          className="
          mt-10
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >
          <CourseCard
            title="Web Development"
            instructor="John Smith"
            duration="12 Weeks"
            level="Beginner"
            buttonText="Enroll Now"
          />

          <CourseCard
            title="Database Systems"
            instructor="Sarah Khan"
            duration="10 Weeks"
            level="Intermediate"
            buttonText="Enroll Now"
          />

          <CourseCard
            title="Artificial Intelligence"
            instructor="David Lee"
            duration="16 Weeks"
            level="Advanced"
            buttonText="Enroll Now"
          />
        </div>
      </section>
    </main>
  );
}