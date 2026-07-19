"use client";

import { useEffect, useState } from "react";
import { students } from "@/data/students";

import {
  FaCalendarCheck,
  FaUserGraduate,
  FaSave,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";


export default function AttendancePage() {


  const [teacher, setTeacher] = useState(null);
  const [courseStudents, setCourseStudents] = useState([]);
  const [attendance, setAttendance] = useState({});



  useEffect(() => {

    const teacherData =
      localStorage.getItem("teacher");


    if(teacherData){

      const parsedTeacher =
        JSON.parse(teacherData);


      setTeacher(parsedTeacher);



      const filteredStudents =
        students.filter(
          (student)=>
            student.course === parsedTeacher.course
        );


      setCourseStudents(filteredStudents);



      // Load saved attendance

      const savedAttendance =
        JSON.parse(
          localStorage.getItem("teacherAttendance")
        );


      if(
        savedAttendance &&
        savedAttendance.course === parsedTeacher.course
      ){

        setAttendance(
          savedAttendance.attendance
        );

      }

    }


  }, []);





  function markAttendance(
    registration,
    status
  ){


    setAttendance((previous)=>({

      ...previous,


      [registration]:{

        status

      }

    }));


  }







  function saveAttendance(){


    const data={


      course: teacher.course,


      teacher: teacher.name,


      attendance,


    };



    localStorage.setItem(

      "teacherAttendance",

      JSON.stringify(data)

    );



    alert(
      "Attendance saved successfully"
    );


  }






return (

<main className="space-y-8 p-6 md:p-8">



{/* Header */}


<section
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


<div className="flex items-center gap-5">


<div
className="
rounded-2xl
bg-white/20
p-4
"
>

<FaCalendarCheck
className="
text-4xl
text-cyan-200
"
/>

</div>



<div>

<h1 className="text-3xl font-bold">
Manage Attendance
</h1>


<p className="mt-2 text-indigo-100">

{teacher?.course}

</p>


</div>


</div>


</section>






{/* Students */}


<section
className="
rounded-3xl
border
border-slate-200
bg-white
p-8
shadow-lg
"
>


<h2
className="
mb-6
text-2xl
font-bold
text-slate-800
"
>

Students Attendance

</h2>





<div className="space-y-5">


{
courseStudents.length === 0 ?


(

<p className="text-slate-500">

No students found for this course.

</p>

)


:

(

courseStudents.map((student)=>(


<div

key={student.registration}

className="
flex
flex-col
gap-4
rounded-2xl
border
border-slate-200
bg-slate-50
p-5
transition
hover:shadow-md
md:flex-row
md:items-center
md:justify-between
"

>



{/* Student */}


<div
className="
flex
items-center
gap-4
"
>


<div
className="
rounded-full
bg-indigo-100
p-3
"
>


<FaUserGraduate
className="
text-xl
text-indigo-600
"
/>


</div>



<div>

<h3
className="
font-bold
text-slate-800
"
>

{student.name}

</h3>


<p
className="
text-sm
text-slate-500
"
>

{student.registration}

</p>


</div>


</div>






{/* Buttons */}


<div className="flex gap-3">


<button

onClick={()=>
markAttendance(
student.registration,
"Present"
)
}


className={`

flex
items-center
gap-2
rounded-xl
px-5
py-2
font-semibold
transition
active:scale-95

${
attendance[student.registration]
?.status==="Present"

?

"bg-emerald-100 text-emerald-700 ring-2 ring-emerald-400"

:

"bg-white text-slate-600 border border-slate-300"

}

`}

>


<FaCheckCircle/>

Present

</button>







<button

onClick={()=>
markAttendance(
student.registration,
"Absent"
)
}


className={`

flex
items-center
gap-2
rounded-xl
px-5
py-2
font-semibold
transition
active:scale-95

${
attendance[student.registration]
?.status==="Absent"

?

"bg-red-100 text-red-700 ring-2 ring-red-400"

:

"bg-white text-slate-600 border border-slate-300"

}

`}

>


<FaTimesCircle/>

Absent

</button>


</div>




</div>



))


)

}



</div>





<button

onClick={saveAttendance}

className="
mt-8
flex
items-center
gap-3
rounded-xl
bg-gradient-to-r
from-indigo-600
to-violet-600
px-7
py-3
font-semibold
text-white
shadow-md
transition
hover:-translate-y-1
hover:shadow-xl
active:scale-95
"

>


<FaSave/>

Save Attendance


</button>




</section>


</main>

);


}