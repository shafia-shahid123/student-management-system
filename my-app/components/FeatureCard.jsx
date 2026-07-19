export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-4xl text-white shadow-lg">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-500">
        {description}
      </p>

    </div>
  );
}