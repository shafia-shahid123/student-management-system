"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Students", href: "/students" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-2xl text-white shadow-md">
            🎓
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Student Portal
            </h1>

            <p className="text-sm text-gray-500">
              Learning Dashboard
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>

        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="rounded-lg border border-indigo-600 px-5 py-2 font-medium text-indigo-600 transition hover:bg-indigo-50"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white shadow-md transition hover:bg-indigo-700"
          >
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}