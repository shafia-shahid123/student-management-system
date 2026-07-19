"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  FaHome,
  FaUser,
  FaBookOpen,
  FaUsers,
  FaFilePdf,
  FaClipboardList,
  FaQuestionCircle,
  FaChartBar,
  FaCalendarCheck,
  FaBullhorn,
  FaSignOutAlt,
  FaGraduationCap,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

export default function TeacherSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [teacher, setTeacher] = useState(null);
  const [openCourse, setOpenCourse] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("teacher");

    if (data) {
      setTeacher(JSON.parse(data));
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("teacher");
    router.push("/login");
  }

  const menu = [
    {
      name: "Dashboard",
      href: "/teacher/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Profile",
      href: "/teacher/profile",
      icon: <FaUser />,
    },
   {
  name: "Students",
  href: teacher
    ? `/teacher/students?course=${encodeURIComponent(teacher.course)}`
    : "/teacher/students",
  icon: <FaUsers />,
},
    {
      name: "Results",
      href: "/teacher/results",
      icon: <FaChartBar />,
    },
    {
      name: "Attendance",
      href: "/teacher/attendance",
      icon: <FaCalendarCheck />,
    },
    {
      name: "Announcements",
      href: "/teacher/announcements",
      icon: <FaBullhorn />,
    },
  ];

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        h-screen
        w-72
        border-r
        border-slate-200
        bg-white
        p-5
        flex
        flex-col
      "
    >
      {/* Logo */}

      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
          <FaGraduationCap className="text-2xl text-indigo-600" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Teacher Portal
          </h2>

          <p className="text-xs text-slate-500">
            Learning Management
          </p>
        </div>
      </div>

      {/* Menu */}

      <nav className="flex flex-1 flex-col gap-2 overflow-y-auto">

        {menu.slice(0, 2).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-4 rounded-xl px-4 py-3 font-medium transition ${
              pathname === item.href
                ? "bg-indigo-100 text-indigo-700 shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </Link>
        ))}

        {/* My Course */}

        <button
          onClick={() => setOpenCourse(!openCourse)}
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600"
        >
          <div className="flex items-center gap-4">
            <FaBookOpen />
            My Course
          </div>

          {openCourse ? <FaChevronDown /> : <FaChevronRight />}
        </button>

        {openCourse && (
          <div className="ml-5 space-y-1">

            <div className="px-4 py-2 text-sm font-semibold text-indigo-600">
              {teacher?.course}
            </div>

            <Link
              href="/teacher/my-course/lectures"
              className={`flex items-center gap-3 rounded-lg px-4 py-2 transition ${
                pathname === "/teacher/my-course/lectures"
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50"
              }`}
            >
              <FaFilePdf className="text-red-500" />
              Lectures
            </Link>

            <Link
              href="/teacher/my-course/assignments"
              className={`flex items-center gap-3 rounded-lg px-4 py-2 transition ${
                pathname === "/teacher/my-course/assignments"
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50"
              }`}
            >
              <FaClipboardList className="text-violet-500" />
              Assignments
            </Link>

            <Link
              href="/teacher/my-course/quizzes"
              className={`flex items-center gap-3 rounded-lg px-4 py-2 transition ${
                pathname === "/teacher/my-course/quizzes"
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50"
              }`}
            >
              <FaQuestionCircle className="text-cyan-500" />
              Quizzes
            </Link>

          </div>
        )}

        {menu.slice(2).map((item) => {
  const isActive = pathname.startsWith(item.href.split("?")[0]);

  return (
    <Link
      key={item.name}
      href={item.href}
      className={`flex items-center gap-4 rounded-xl px-4 py-3 font-medium transition ${
        isActive
          ? "bg-indigo-100 text-indigo-700 shadow-sm"
          : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
      }`}
    >
      <span className="text-lg">{item.icon}</span>
      {item.name}
    </Link>
  );
})}

      </nav>

      {/* Logout */}

      <button
        onClick={handleLogout}
        className="
          mt-4
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-red-50
          px-4
          py-3
          font-semibold
          text-red-600
          transition
          hover:bg-red-100
        "
      >
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
}