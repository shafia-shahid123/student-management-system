"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { students } from "@/data/students";

import {
  FaUsers,
  FaSearch,
  FaBookOpen,
} from "react-icons/fa";


function TeacherStudents() {

  const router = useRouter();

  const searchParams = useSearchParams();

const courseFromUrl = searchParams.get("course");

const [search, setSearch] = useState("");

const selectedCourse = courseFromUrl || "All";


  const filteredStudents = useMemo(() => {

    return students.filter((student) => {


      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        student.registration
          .toLowerCase()
          .includes(search.toLowerCase());



      const matchesCourse =
        selectedCourse === "All"
          ? true
          : student.course === selectedCourse;



      return matchesSearch && matchesCourse;


    });

  }, [search, selectedCourse]);




  return (

    <main className="flex-1 p-6 md:p-8">


      {/* Header */}

      <div
        className="
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

        <div className="flex items-center gap-4">


          <FaUsers
            className="
            text-5xl
            text-cyan-200
            "
          />


          <div>

            <h1 className="text-3xl font-bold">
              Students
            </h1>


            <p className="mt-2 text-white/80">
              View and manage all students assigned to your courses.
            </p>


          </div>


        </div>


      </div>





      {/* Search & Filter */}


      <div
        className="
        mt-8
        flex
        flex-col
        gap-4
        md:flex-row
        "
      >


        <div className="relative flex-1">


          <FaSearch
            className="
            absolute
            left-4
            top-4
            text-slate-400
            "
          />


          <input

            type="text"

            placeholder="Search by name or registration..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            className="
            w-full
            rounded-2xl
            border
            border-slate-200
            py-3
            pl-12
            pr-4
            outline-none
            focus:border-indigo-500
            "

          />


        </div>





        


          <div
  className="
    mt-8
    flex
    flex-col
    gap-4
    md:flex-row
  "
>
  <div className="relative flex-1">

    <FaSearch
      className="
        absolute
        left-4
        top-4
        text-slate-400
      "
    />

    <input
      type="text"
      placeholder="Search by name or registration..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
        w-full
        rounded-2xl
        border
        border-slate-200
        py-3
        pl-12
        pr-4
        outline-none
        focus:border-indigo-500
      "
    />

  </div>
</div>

      </div>







      {/* Students Table */}



      <div
        className="
        mt-8
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-md
        "
      >


        <table className="w-full">


          <thead className="bg-slate-100">


            <tr>


              <th className="px-6 py-4 text-left">
                Student
              </th>


              <th className="px-6 py-4 text-left">
                Registration
              </th>


              <th className="px-6 py-4 text-left">
                Semester
              </th>


              <th className="px-6 py-4 text-left">
                Course
              </th>


              <th className="px-6 py-4 text-left">
                CGPA
              </th>


              <th className="px-6 py-4 text-left">
                Action
              </th>


            </tr>


          </thead>





          <tbody>


            {filteredStudents.map((student)=>(


              <tr

                key={student.registration}

                className="
                border-t
                hover:bg-slate-50
                "

              >



                <td className="
                px-6
                py-4
                font-semibold
                "
                >

                  {student.name}

                </td>





                <td className="px-6 py-4">

                  {student.registration}

                </td>





                <td className="px-6 py-4">

                  {student.semester}

                </td>





                <td className="px-6 py-4">


                  <span
                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-indigo-100
                    px-3
                    py-1
                    text-sm
                    font-medium
                    text-indigo-700
                    "
                  >

                    <FaBookOpen />

                    {student.course}


                  </span>


                </td>





                <td className="px-6 py-4">

                  {student.cgpa}

                </td>






                <td className="px-6 py-4">

<button

onClick={() =>
  router.push(
    `/teacher/students/${student.registration}`
  )
}

className="
rounded-full
bg-indigo-100
px-4
py-2
text-sm
font-semibold
text-indigo-700
transition
hover:bg-indigo-200
"

>

View Profile

</button>


                </td>




              </tr>


            ))}


          </tbody>


        </table>






        {filteredStudents.length === 0 && (

          <div
            className="
            p-8
            text-center
            text-slate-500
            "
          >

            No students found.

          </div>

        )}



      </div>



    </main>

  );

}
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeacherStudents />
    </Suspense>
  );
}