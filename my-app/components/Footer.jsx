import Link from "next/link";
import { GraduationCap, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="
      relative
      mt-0
      overflow-hidden
      border-t
      border-indigo-100
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-50
      "
    >
      {/* Background Glows */}

      <div
        className="
        absolute
        -right-20
        -top-20
        h-96
        w-96
        rounded-full
        bg-purple-300/30
        blur-3xl
        "
      />

      <div
        className="
        absolute
        -left-20
        bottom-0
        h-72
        w-72
        rounded-full
        bg-blue-300/30
        blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-24">

        {/* Top */}

        <div className="grid gap-16 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-indigo-100 p-4">
                <GraduationCap className="h-7 w-7 text-indigo-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Student Portal
                </h2>

                <p className="font-medium text-indigo-600">
                  Learn • Grow • Succeed
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-600">
              Empowering students to manage courses,
              attendance, assignments and academic progress
              through one modern and secure platform.
            </p>

            <div className="mt-8 flex gap-3">

              <Link
                href="https://github.com"
                target="_blank"
                className="
                rounded-xl
                border
                border-indigo-100
                bg-white
                p-3
                shadow-sm
                transition
                hover:-translate-y-1
                hover:border-indigo-200
                hover:bg-indigo-50
                hover:text-indigo-600
                "
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="
                rounded-xl
                border
                border-indigo-100
                bg-white
                p-3
                shadow-sm
                transition
                hover:-translate-y-1
                hover:border-indigo-200
                hover:bg-indigo-50
                hover:text-indigo-600
                "
              >
                <FaLinkedin size={18} />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                className="
                rounded-xl
                border
                border-indigo-100
                bg-white
                p-3
                shadow-sm
                transition
                hover:-translate-y-1
                hover:border-indigo-200
                hover:bg-indigo-50
                hover:text-indigo-600
                "
              >
                <FaXTwitter size={18} />
              </Link>

            </div>

          </div>

          {/* Portal */}

          <div>

            <h3 className="font-semibold text-slate-900">
              Portal
            </h3>

            <ul className="mt-5 space-y-4">

              {[
                "Dashboard",
                "Courses",
                "Attendance",
                "Results",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                    text-slate-600
                    transition
                    hover:text-indigo-600
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-slate-900">
              Resources
            </h3>

            <ul className="mt-5 space-y-4">

              {[
                "Documentation",
                "Help Center",
                "FAQs",
                "Support",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                    text-slate-600
                    transition
                    hover:text-indigo-600
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-semibold text-slate-900">
              Contact
            </h3>

            <div className="mt-5 space-y-5">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 p-2">
                  <MapPin className="h-4 w-4 text-indigo-600" />
                </div>

                <span className="text-slate-600">
                  Islamabad, Pakistan
                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 p-2">
                  <Mail className="h-4 w-4 text-indigo-600" />
                </div>

                <span className="text-slate-600">
                  support@studentportal.com
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-slate-500">
            © {new Date().getFullYear()} Student Portal. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <Link
              href="#"
              className="text-slate-500 transition hover:text-indigo-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-slate-500 transition hover:text-indigo-600"
            >
              Terms & Conditions
            </Link>

            <span className="text-slate-500">
              Built with{" "}
              <span className="font-semibold text-indigo-600">
                Next.js
              </span>{" "}
              &{" "}
              <span className="font-semibold text-violet-600">
                Tailwind CSS
              </span>
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}