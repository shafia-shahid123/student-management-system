export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  color
}) {


  const colorStyles = {

    cyan: {
      box: "bg-cyan-100",
      icon: "text-cyan-600",
    },


    violet: {
      box: "bg-violet-100",
      icon: "text-violet-600",
    },


    blue: {
      box: "bg-blue-100",
      icon: "text-blue-600",
    },


    green: {
      box: "bg-green-100",
      icon: "text-green-600",
    },


    amber: {
      box: "bg-amber-100",
      icon: "text-amber-600",
    },


    rose: {
      box: "bg-rose-100",
      icon: "text-rose-600",
    },


    indigo: {
      box: "bg-indigo-100",
      icon: "text-indigo-600",
    },


  };



  return (


    <div
      className="
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg
      "
    >



      <div
        className={`
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        text-2xl
        ${colorStyles[color]?.box}
        ${colorStyles[color]?.icon}
        `}
      >

        {icon}

      </div>





      <h3
        className="
        mt-5
        text-sm
        font-semibold
        uppercase
        tracking-wide
        text-slate-500
        "
      >

        {title}

      </h3>






      <p
        className="
        mt-2
        text-3xl
        font-extrabold
        text-slate-800
        "
      >

        {value}

      </p>





      {
        subtitle &&

        <p
          className="
          mt-2
          text-sm
          text-slate-500
          "
        >

          {subtitle}

        </p>

      }





    </div>


  );

}