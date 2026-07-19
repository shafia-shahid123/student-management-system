import StatsCard from "./StatsCard";

export default function Stats() {
  return (
    <section className="bg-slate-100 py-14">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 font-semibold text-indigo-600">
            Portal Overview
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Your Academic Dashboard
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to manage your university journey in one place.
          </p>

        </div>


        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <StatsCard 
            number="1500+"
            title="Registered Students"
          />

          <StatsCard 
            number="80+"
            title="Available Courses"
          />

          <StatsCard 
            number="40+"
            title="Faculty Members"
          />

          <StatsCard 
            number="95%"
            title="Academic Success"
          />

        </div>

      </div>

    </section>
  );
}