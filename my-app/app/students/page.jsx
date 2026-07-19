import StudentCard from "../../components/StudentCard";

export default function Students() {
  return (
    <main className="min-h-screen bg-slate-100 px-8 py-12">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 font-semibold text-indigo-600">
            Student Directory
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900">
            Our Students
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Explore student profiles and academic achievements.
          </p>

        </div>


        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <StudentCard
            name="Ayesha"
            department="Computer Science"
            cgpa="3.80"
          />


          <StudentCard
            name="Ali"
            department="Software Engineering"
            cgpa="3.92"
          />


          <StudentCard
            name="Fatima"
            department="Information Technology"
            cgpa="3.75"
          />

        </div>

      </div>

    </main>
  );
}