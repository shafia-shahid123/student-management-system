"use client";

import { useEffect, useState } from "react";

import {
  FaBullhorn,
  FaPaperPlane,
  FaTrash,
  FaCalendarAlt,
  FaBookOpen,
  FaUserTie,
} from "react-icons/fa";



export default function TeacherAnnouncements() {


  const [teacher, setTeacher] = useState(null);


  const [title, setTitle] = useState("");

  const [message, setMessage] = useState("");

  const [announcements, setAnnouncements] = useState([]);





  useEffect(()=>{


    const teacherData =
      localStorage.getItem(
        "teacher"
      );



    if(teacherData){


      const parsedTeacher =
        JSON.parse(
          teacherData
        );


      setTeacher(
        parsedTeacher
      );


    }





    const savedAnnouncements =
      JSON.parse(
        localStorage.getItem(
          "announcements"
        )
      ) || [];



    setAnnouncements(
      savedAnnouncements
    );



  },[]);









  function postAnnouncement(){


    if(
      !title.trim() ||
      !message.trim()
    ){


      alert(
        "Please fill all fields"
      );


      return;

    }





    const newAnnouncement = {


      id:
      Date.now(),


      course:
      teacher.course,


      teacher:
      teacher.name,


      title,


      message,


      date:
      new Date()
      .toISOString()
      .split("T")[0]


    };







    const updatedAnnouncements =
      [
        ...announcements,
        newAnnouncement
      ];






    localStorage.setItem(

      "announcements",

      JSON.stringify(
        updatedAnnouncements
      )

    );





    setAnnouncements(
      updatedAnnouncements
    );



    setTitle("");

    setMessage("");



    alert(
      "Announcement posted successfully"
    );


  }










  function deleteAnnouncement(id){



    const updated =
      announcements.filter(
        (item)=>
          item.id !== id
      );




    setAnnouncements(
      updated
    );



    localStorage.setItem(

      "announcements",

      JSON.stringify(
        updated
      )

    );



  }







  const teacherAnnouncements =
    announcements.filter(
      (item)=>
        item.teacher === teacher?.name &&
        item.course === teacher?.course
    );
    
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


<FaBullhorn

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

Announcements

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


</div>


</div>


</section>









{/* CREATE ANNOUNCEMENT */}



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

Create Announcement

</h2>






<div

className="
space-y-5
"

>



<input


type="text"


placeholder="
Announcement title
"


value={title}


onChange={
(e)=>
setTitle(
e.target.value
)
}


className="
w-full
rounded-xl
border
border-slate-300
px-4
py-3
outline-none
focus:border-indigo-500
"

/>







<textarea


placeholder="
Write announcement message...
"


value={message}


onChange={
(e)=>
setMessage(
e.target.value
)
}


rows="5"


className="
w-full
rounded-xl
border
border-slate-300
px-4
py-3
outline-none
focus:border-indigo-500
"

/>









<button


onClick={postAnnouncement}


className="
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
"

>


<FaPaperPlane/>


Post Announcement


</button>





</div>


</section>









{/* PREVIOUS ANNOUNCEMENTS */}



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

Previous Announcements

</h2>







{

teacherAnnouncements.length === 0

?


(

<p

className="
text-slate-500
"

>

No announcements posted yet.

</p>


)


:


<div

className="
space-y-5
"

>


{

teacherAnnouncements
.reverse()
.map(
(item)=>(


<div

key={item.id}

className="
rounded-2xl
border
border-slate-200
bg-slate-50
p-6
transition
hover:shadow-md
"

>


<div

className="
flex
flex-col
gap-4
md:flex-row
md:items-start
md:justify-between
"

>





<div>


<h3

className="
text-xl
font-bold
text-slate-800
"

>

{item.title}

</h3>





<p

className="
mt-3
text-slate-600
"

>

{item.message}

</p>






<div

className="
mt-4
flex
flex-wrap
gap-4
text-sm
text-slate-500
"

>


<span

className="
flex
items-center
gap-2
"

>

<FaBookOpen/>

{item.course}

</span>





<span

className="
flex
items-center
gap-2
"

>

<FaUserTie/>

{item.teacher}

</span>






<span

className="
flex
items-center
gap-2
"

>

<FaCalendarAlt/>

{item.date}

</span>



</div>



</div>







<button


onClick={()=>
deleteAnnouncement(
item.id
)
}


className="
flex
items-center
gap-2
rounded-xl
bg-red-100
px-4
py-2
font-semibold
text-red-600
hover:bg-red-200
"

>


<FaTrash/>

Delete


</button>





</div>


</div>



)

)


}



</div>


}



</section>







</main>


);


}