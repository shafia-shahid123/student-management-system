"use client";

import { useEffect, useState } from "react";
import { students } from "@/data/students";

import {
  FaCalendarCheck,
  FaUserGraduate,
  FaSave,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaFilePdf,
  FaEdit,
} from "react-icons/fa";

import { jsPDF } from "jspdf";


export default function AttendancePage() {


  const [teacher, setTeacher] = useState(null);

  const [courseStudents, setCourseStudents] = useState([]);

  const [attendance, setAttendance] = useState({});

  const [date, setDate] = useState("");

  const [search, setSearch] = useState("");

  const [history, setHistory] = useState([]);





  useEffect(() => {


    const teacherData =
      localStorage.getItem("teacher");



    if (!teacherData) return;



    const parsedTeacher =
      JSON.parse(teacherData);



    setTeacher(parsedTeacher);




    const filteredStudents =
      students.filter(
        (student)=>
          student.course === parsedTeacher.course
      );



    setCourseStudents(filteredStudents);





    const today =
      new Date()
      .toISOString()
      .split("T")[0];



    setDate(today);





    const savedHistory =
      JSON.parse(
        localStorage.getItem(
          "attendanceHistory"
        )
      ) || [];



    setHistory(savedHistory);




    const todayAttendance =
      savedHistory.find(
        (item)=>
          item.course === parsedTeacher.course &&
          item.date === today
      );



    if(todayAttendance){


      setAttendance(
        todayAttendance.attendance
      );


    }



  }, []);









  function markAttendance(
    registration,
    status
  ){


    setAttendance(
      (previous)=>({

        ...previous,

        [registration]:{

          status

        }

      })
    );


  }









  function saveAttendance(){



    if(
      Object.keys(attendance).length !==
      courseStudents.length
    ){

      alert(
        "Please mark all students first"
      );

      return;

    }





    const record = {


      course:
      teacher.course,


      teacher:
      teacher.name,


      date,


      attendance


    };






    const oldHistory =
      JSON.parse(
        localStorage.getItem(
          "attendanceHistory"
        )
      ) || [];






    const existing =
      oldHistory.findIndex(
        (item)=>
          item.course === teacher.course &&
          item.date === date
      );






    if(existing !== -1){


      oldHistory[existing] = record;


    }
    else{


      oldHistory.push(record);


    }







    localStorage.setItem(

      "attendanceHistory",

      JSON.stringify(oldHistory)

    );



    setHistory(oldHistory);



    alert(
      "Attendance saved successfully"
    );


  }









 function exportPDF(){


  if(
    Object.keys(attendance).length !== courseStudents.length
  ){

    alert(
      "Please mark attendance for all students first."
    );

    return;

  }



  const pdf =
    new jsPDF();



  pdf.setFontSize(18);


  pdf.text(
    "Attendance Report",
    70,
    20
  );



  pdf.setFontSize(12);



  pdf.text(
    `Course: ${teacher.course}`,
    20,
    40
  );


  pdf.text(
    `Teacher: ${teacher.name}`,
    20,
    50
  );


  pdf.text(
    `Date: ${date}`,
    20,
    60
  );



  let y = 80;



  pdf.text(
    "Student",
    20,
    y
  );


  pdf.text(
    "Registration",
    80,
    y
  );


  pdf.text(
    "Status",
    150,
    y
  );


  y += 10;



  courseStudents.forEach(
    (student)=>{


      pdf.text(
        student.name,
        20,
        y
      );


      pdf.text(
        student.registration,
        80,
        y
      );


      pdf.text(
        attendance[
          student.registration
        ].status,
        150,
        y
      );


      y += 10;


    }
  );



  pdf.save(
    `${teacher.course}-Attendance-${date}.pdf`
  );


}









  function editPreviousAttendance(){


  const savedHistory =
  JSON.parse(
    localStorage.getItem(
      "attendanceHistory"
    )
  ) || [];



  const previous =
  savedHistory.filter(
    (item)=>
      item.course === teacher.course
  );



  if(previous.length === 0){


    alert(
      "No previous attendance found"
    );


    return;


  }



  const latest =
  previous[previous.length - 1];



  setDate(
    latest.date
  );



  setAttendance(
    latest.attendance
  );



  alert(
    `Editing attendance of ${latest.date}`
  );


}






  const filteredStudents =
    courseStudents.filter(
      (student)=>

        student.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    );






  const totalStudents =
    courseStudents.length;



  const marked =
    Object.keys(attendance).length;



  const present =
    Object.values(attendance)
    .filter(
      (item)=>
        item.status==="Present"
    )
    .length;



  const absent =
    Object.values(attendance)
    .filter(
      (item)=>
        item.status==="Absent"
    )
    .length;



  const pending =
    totalStudents - marked;



  const completed =
    totalStudents > 0 &&
    marked === totalStudents;



  const attendancePercentage =
    totalStudents
    ?
    Math.round(
      (present / totalStudents) * 100
    )
    :
    0;
    function handleDateChange(selectedDate){


  setDate(selectedDate);



  const savedHistory =
  JSON.parse(
    localStorage.getItem(
      "attendanceHistory"
    )
  ) || [];



  const selectedRecord =
  savedHistory.find(
    (item)=>
      item.course === teacher.course &&
      item.date === selectedDate
  );



  if(selectedRecord){


    // Existing attendance of this date

    setAttendance(
      selectedRecord.attendance
    );


  }
  else{


    // New date - fresh attendance sheet

    setAttendance({});


  }
}
return (

<main
className="
space-y-8
p-6
md:p-8
"
>



{/* HEADER */}

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


<div
className="
flex
items-center
gap-5
"
>


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


<h1
className="
text-3xl
font-bold
"
>

Manage Attendance

</h1>



<p
className="
mt-2
text-indigo-100
"
>

Course: {teacher?.course}

</p>



<p
className="
text-indigo-100
"
>

Teacher: {teacher?.name}

</p>




<p
className="
text-indigo-100
"
>

Date: {date}

</p>



</div>


</div>


</section>









{/* SUMMARY CARDS */}


<section
className="
grid
gap-5
sm:grid-cols-2
lg:grid-cols-5
"
>



{

[
{
title:"Total Students",
value:totalStudents
},

{
title:"Marked",
value:`${marked}/${totalStudents}`
},

{
title:"Present",
value:present
},

{
title:"Absent",
value:absent
},

{
title:"Pending",
value:pending
}

]

.map(
(item,index)=>(


<div

key={index}

className="
rounded-2xl
border
border-slate-200
bg-white
p-5
shadow-md
"

>


<p
className="
text-sm
text-slate-500
"
>

{item.title}

</p>



<h2
className="
mt-2
text-3xl
font-bold
text-indigo-600
"
>

{item.value}

</h2>



</div>


)

)



}


</section>









{/* MAIN ATTENDANCE SECTION */}


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




<div
className="
flex
flex-col
gap-5
md:flex-row
md:items-center
md:justify-between
"
>





{/* DATE */}

<div>


<label
className="
font-semibold
text-slate-700
"
>

Attendance Date:

</label>



<input

type="date"

value={date}

onChange={(e)=>
handleDateChange(
e.target.value
)
}

/>

</div>









{/* SEARCH */}


<div
className="
relative
"
>


<FaSearch

className="
absolute
left-3
top-3
text-slate-400
"

/>



<input

type="text"

placeholder="
Search student...
"

value={search}

onChange={
(e)=>
setSearch(e.target.value)
}


className="
rounded-xl
border
border-slate-300
py-2
pl-10
pr-4
outline-none
focus:border-indigo-500
"

/>



</div>




</div>





{/* STUDENTS LIST */}


<div
className="
mt-8
space-y-5
"
>



{

filteredStudents.length === 0 ?


(

<p
className="
text-slate-500
"
>

No students found for this course.

</p>


)



:


filteredStudents.map(
(student)=>(


<div

key={student.registration}

className="
flex
flex-col
gap-5
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







{/* STUDENT INFO */}


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







<p

className={`

mt-2
text-sm
font-semibold

${
attendance[
student.registration
]?.status === "Present"

?

"text-emerald-600"

:

attendance[
student.registration
]?.status === "Absent"

?

"text-red-600"

:

"text-slate-400"

}

`}

>


Status:


{" "}


{

attendance[
student.registration
]
?.status

||

"Pending"

}



</p>



</div>


</div>









{/* BUTTONS */}



<div

className="
flex
gap-3
"

>



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


${
attendance[
student.registration
]?.status === "Present"

?

"bg-emerald-100 text-emerald-700 ring-2 ring-emerald-400"

:

"border bg-white text-slate-600 hover:bg-emerald-50"

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


${
attendance[
student.registration
]?.status === "Absent"

?

"bg-red-100 text-red-700 ring-2 ring-red-400"

:

"border bg-white text-slate-600 hover:bg-red-50"

}

`}

>


<FaTimesCircle/>


Absent


</button>





</div>






</div>


)

)


}


</div>









{/* ACTION BUTTONS */}


<div

className="
mt-8
flex
flex-wrap
gap-4
"

>





<button


onClick={saveAttendance}


disabled={!completed}


className={`

flex
items-center
gap-3
rounded-xl
px-7
py-3
font-semibold
text-white
shadow-md
transition


${
completed

?

"bg-gradient-to-r from-indigo-600 to-violet-600 hover:-translate-y-1"

:

"cursor-not-allowed bg-slate-400"

}

`}

>


<FaSave/>


{

completed

?

"Save Attendance"

:

"Mark All Students First"

}


</button>









<button


onClick={exportPDF}


className="
flex
items-center
gap-3
rounded-xl
bg-red-500
px-7
py-3
font-semibold
text-white
transition
hover:bg-red-600
"

>


<FaFilePdf/>


Download Report PDF


</button>







</div>





</section>









{/* ADVANCED FEATURES */}



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
text-2xl
font-bold
text-slate-800
"

>

Class Attendance

</h2>




<div
className="
mt-4
space-y-2
text-slate-600
"
>


<p>

Present:

<span
className="
font-bold
text-emerald-600
"
>

{" "}
{attendancePercentage}%

</span>


</p>





<p>

Absent:


<span
className="
font-bold
text-red-600
"
>

{" "}
{100-attendancePercentage}%

</span>


</p>



</div>









<button


onClick={editPreviousAttendance}


className="
mt-6
flex
items-center
gap-3
rounded-xl
border
border-indigo-300
px-6
py-3
font-semibold
text-indigo-600
transition
hover:bg-indigo-50
"

>


<FaEdit/>


Edit Previous Attendance


</button>




</section>







</main>

);


}