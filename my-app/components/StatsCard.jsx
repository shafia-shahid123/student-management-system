export default function StatsCard({ number, title }) {
  return (
    <div
      className="
      rounded-3xl
      bg-white
      border
      border-indigo-100
      p-8
      text-center
      shadow-sm
      transition
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >

      <h3 className="text-4xl font-bold text-indigo-700">
        {number}
      </h3>


      <p className="mt-3 font-medium text-slate-600">
        {title}
      </p>


      <div className="
        mx-auto
        mt-5
        h-1
        w-12
        rounded-full
        bg-gradient-to-r
        from-indigo-500
        to-purple-500
      " />

    </div>
  );
}