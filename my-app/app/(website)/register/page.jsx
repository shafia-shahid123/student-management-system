"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";

export default function Register() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const defaultResults = [
  {
    course: "Database Systems",
    marks: "86 / 100",
    grade: "A",
  },
  {
    course: "Artificial Intelligence",
    marks: "81 / 100",
    grade: "A-",
  },
  {
    course: "Software Engineering",
    marks: "90 / 100",
    grade: "A+",
  },
];
  function handleRegister(e) {

    e.preventDefault();

    const students =
      JSON.parse(localStorage.getItem("registeredStudents")) || [];

    const exists = students.find(
      (student) => student.email === email
    );

    if (exists) {
      alert("Email already exists!");
      return;
    }

    const newStudent = {
      name,
      registration,
      department,
      semester,
      cgpa,
      email,
      password,
      enrolledCourses: [],
   results: [...defaultResults],
    };

    students.push(newStudent);

    localStorage.setItem(
      "registeredStudents",
      JSON.stringify(students)
    );

    alert("Account created successfully!");

    router.push("/login");

  }




  return (

    <main
      className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-gradient-to-br
      from-slate-100
      via-indigo-50
      to-purple-100
      px-6
      py-12
      "
    >



      <section
        className="
        w-full
        max-w-4xl
        rounded-3xl
        border
        border-indigo-100
        bg-white/90
        p-8
        shadow-xl
        shadow-indigo-200/40
        backdrop-blur-sm
        md:p-10
        "
      >



        {/* Header */}

        <div className="text-center">


          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-indigo-100
            px-4
            py-2
            text-sm
            font-semibold
            text-indigo-700
            "
          >

            <FaUserGraduate />

            Student Portal

          </div>




          <h1
            className="
            mt-5
            text-4xl
            font-extrabold
            text-slate-900
            "
          >

            Create{" "}

            <span
              className="
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-blue-500
              bg-clip-text
              text-transparent
              "
            >

              Account

            </span>

          </h1>




          <p
            className="
            mx-auto
            mt-4
            max-w-2xl
            text-slate-600
            "
          >

            Register to access your courses,
            profile, semester results,
            and academic dashboard.

          </p>

        </div>







        {/* Form */}

        <form
          onSubmit={handleRegister}
          className="
          mt-10
          grid
          gap-5
          md:grid-cols-2
          "
        >



          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
            "
          />



          <input
            type="text"
            placeholder="Registration No"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
            required
            className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
            "
          />




          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
            "
          />




          <input
            type="text"
            placeholder="Semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            required
            className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
            "
          />




          <input
            type="text"
            placeholder="CGPA"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            required
            className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
            "
          />




          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
            "
          />




          <div className="md:col-span-2">

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              outline-none
              transition
              focus:border-indigo-500
              focus:ring-4
              focus:ring-indigo-100
              "
            />

          </div>





          <div
            className="
            md:col-span-2
            mt-2
            "
          >

            <button
              type="submit"
              className="
              w-full
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              py-3
              font-semibold
              text-white
              transition
              hover:-translate-y-0.5
              hover:shadow-lg
              hover:shadow-indigo-300/40
              "
            >

              Create Account

            </button>

          </div>



        </form>






        {/* Login Link */}

        <p
          className="
          mt-8
          text-center
          text-slate-600
          "
        >

          Already have an account?

          <Link
            href="/login"
            className="
            ml-2
            font-semibold
            text-indigo-600
            transition
            hover:text-violet-600
            "
          >

            Login

          </Link>

        </p>



      </section>

    </main>

  );

}