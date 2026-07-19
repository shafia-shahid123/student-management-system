"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { students } from "@/data/students";
import {teachers} from "@/data/teachers";
import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  CalendarCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
  Award,
} from "lucide-react";
export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [role, setRole] = useState("student");
 function handleLogin(e) {
  e.preventDefault();

  if (role === "student") {
    const registeredStudents =
      JSON.parse(localStorage.getItem("registeredStudents")) || [];

    const defaultStudent = students.find(
      (s) => s.email === email && s.password === password
    );

    const registeredStudent = registeredStudents.find(
      (s) => s.email === email && s.password === password
    );

    const student = defaultStudent || registeredStudent;

    if (student) {
      localStorage.setItem("student", JSON.stringify(student));
      router.push("/dashboard");
    } else {
      alert("Invalid student credentials");
    }
  } else {
  console.log("Role:", role);
  console.log("Teachers Array:", teachers);

  const teacher = teachers.find(
    (t) => t.email === email && t.password === password
  );

  console.log("Found Teacher:", teacher);

  if (teacher) {
    localStorage.setItem("teacher", JSON.stringify(teacher));
    router.push("/teacher/dashboard");
  } else {
    alert("Invalid teacher credentials");
  }
}
}
return (
  <div className="relative min-h-screen overflow-hidden bg-slate-50">

    {/* Background Glow */}
    <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl"></div>
    <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-300/20 blur-3xl"></div>

    <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">

      {/* LEFT SIDE */}
      <div className="hidden w-1/2 pr-16 lg:block">

        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-semibold text-indigo-700 backdrop-blur">
          <GraduationCap size={18} />
          Student Portal
        </span>

        <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900">
          Welcome
          <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Back.
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
          Access your courses, attendance, assignments, grades and academic
          progress from one secure dashboard.
        </p>

        <div className="mt-12 space-y-5">

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600">
              <BookOpen size={24} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Track Courses
              </h3>

              <p className="text-sm text-slate-500">
                Stay updated with all enrolled courses.
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-600">
              <TrendingUp size={24} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Monitor Progress
              </h3>

              <p className="text-sm text-slate-500">
                View grades and semester performance.
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
              <CalendarCheck size={24} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Manage Attendance
              </h3>

              <p className="text-sm text-slate-500">
                Keep an eye on your attendance record.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="mx-auto w-full max-w-md rounded-[30px] border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

        <h2 className="text-3xl font-bold text-slate-900">
          Welcome Back
        </h2>

   <p className="mt-2 text-slate-500">
  Sign in to continue to your {role} dashboard.
</p>

<div className="mt-6 flex rounded-2xl bg-slate-100 p-1">
  <button
    type="button"
    onClick={() => setRole("student")}
    className={`flex-1 rounded-xl py-2 text-sm font-semibold transition ${
      role === "student"
        ? "bg-indigo-600 text-white shadow"
        : "text-slate-600"
    }`}
  >
    Student
  </button>

  <button
    type="button"
    onClick={() => setRole("teacher")}
    className={`flex-1 rounded-xl py-2 text-sm font-semibold transition ${
      role === "teacher"
        ? "bg-indigo-600 text-white shadow"
        : "text-slate-600"
    }`}
  >
    Teacher
  </button>
</div>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-6"
        >

          {/* Email */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <div className="relative">

              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 py-3 pl-12 pr-4 transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 outline-none"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <div className="relative">

              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 py-3 pl-12 pr-12 transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

            </div>

          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-indigo-300"
          >
            Sign In
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">

            <div className="flex items-center gap-3">

              <ShieldCheck className="text-emerald-600" />

              <div>

                <h4 className="font-semibold text-slate-800">
                  Secure Login
                </h4>

                <p className="text-sm text-slate-500">
                  Your account is protected with secure authentication.
                </p>

              </div>

            </div>

          </div>

          <p className="text-center text-slate-600">

            Don't have an account?{" "}

            <Link
              href="/register"
              className="font-semibold text-indigo-600 hover:text-violet-600"
            >
              Create Account
            </Link>

          </p>

        </form>

      </div>

    </div>

  </div>
);
}
