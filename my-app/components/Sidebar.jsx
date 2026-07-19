"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  FaHome,
  FaUser,
  FaBookOpen,
  FaChartBar,
  FaSignOutAlt,
  FaGraduationCap,
  FaLayerGroup,
} from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("student");
    router.push("/login");
  }

  const menu = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: <FaUser />,
    },
    {
      name: "Courses",
      href: "/dashboard/courses",
      icon: <FaBookOpen />,
    },
    {
      name: "My Courses",
      href: "/dashboard/my-courses",
      icon: <FaLayerGroup />,
    },
    {
      name: "Results",
      href: "/dashboard/results",
      icon: <FaChartBar />,
    },
  ];

  return (
    <aside
      className="
      flex
      min-h-screen
      w-64
      flex-col
      border-r
      border-slate-200
      bg-white
      pt-5
      px-4
      pb-5
      text-slate-700
      "
    >

      {/* Logo */}

      <div
        className="
        mb-6
        flex
        items-center
        gap-3
        "
      >

        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-indigo-100
          "
        >
          <FaGraduationCap
            className="
            text-2xl
            text-indigo-600
            "
          />
        </div>

        <div>

          <h2
            className="
            text-lg
            font-bold
            text-slate-800
            "
          >
            Student Portal
          </h2>

          <p
            className="
            text-[11px]
            text-slate-500
            "
          >
            Learning Dashboard
          </p>

        </div>

      </div>

      {/* Menu */}

      <nav
        className="
        flex
        flex-col
        gap-2
        "
      >

        {menu.map((item) => (

          <Link
            key={item.href}
            href={item.href}
            className={`
            flex
            items-center
            gap-4
            rounded-xl
            px-3
            py-2.5
            font-medium
            transition-all
            duration-300

            ${
              pathname === item.href
                ? "bg-indigo-100 text-indigo-700 shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
            }
            `}
          >

            <span className="text-lg">
              {item.icon}
            </span>

            {item.name}

          </Link>

        ))}

        {/* Divider */}

        <div className="my-2 border-t border-slate-200" />

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
          flex
          items-center
          gap-4
          rounded-xl
          px-3
          py-2.5
          font-medium
          text-red-600
          transition-all
          duration-300
          hover:bg-red-50
          "
        >

          <FaSignOutAlt className="text-lg" />

          Logout

        </button>

      </nav>

    </aside>
  );
}