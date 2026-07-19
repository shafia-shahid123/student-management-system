import {
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

export default function StudentCard({
  name,
  department,
  cgpa,
}) {
  return (
    <div
      className="
      rounded-xl
      border
      border-slate-200
      bg-white
      p-5
      shadow-sm
      transition
      duration-300
      hover:shadow-lg
      hover:-translate-y-1
      "
    >

      {/* Header */}
      <div className="flex items-center gap-4">

        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-indigo-50
          text-indigo-600
          "
        >
          <FaUserGraduate className="text-2xl" />
        </div>


        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {name}
          </h2>

          <p className="text-sm text-slate-500">
            Student
          </p>
        </div>

      </div>



      {/* Department */}

      <div className="mt-5">

        <p className="text-sm font-medium text-slate-500">
          Department
        </p>

        <p className="mt-1 text-slate-700">
          {department}
        </p>

      </div>



      {/* CGPA */}

      <div className="mt-4">

        <span
          className="
          rounded-lg
          bg-indigo-50
          px-3
          py-1.5
          text-sm
          font-semibold
          text-indigo-700
          "
        >
          CGPA {cgpa}
        </span>

      </div>



      {/* Button */}

      <button
        className="
        mt-5
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg
        border
        border-indigo-200
        bg-white
        py-2.5
        font-medium
        text-indigo-700
        transition
        hover:bg-indigo-600
        hover:text-white
        "
      >

        View Profile

        <FaArrowRight />

      </button>


    </div>
  );
}