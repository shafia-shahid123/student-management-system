"use client";

import { useEffect, useState } from "react";

import {
  FaClipboardList,
  FaUpload,
  FaTrash,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";


export default function AssignmentsPage() {

  const [teacher, setTeacher] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [fileName, setFileName] = useState("");

  const [assignments, setAssignments] = useState([]);



  useEffect(() => {

    const teacherData = localStorage.getItem("teacher");

    if (teacherData) {
      setTeacher(JSON.parse(teacherData));
    }


    const savedAssignments =
      JSON.parse(localStorage.getItem("assignments")) || [];


    setAssignments(savedAssignments);


  }, []);




  function handleUpload(e){

    e.preventDefault();


    if(
      !title ||
      !description ||
      !dueDate ||
      !fileName
    ){

      alert("Please fill all fields");
      return;

    }



    const newAssignment = {

      id: Date.now(),

      title,

      description,

      dueDate,

      file:fileName,

      course:teacher.course,

      teacher:teacher.name,

      date:new Date().toLocaleDateString()

    };



    const updatedAssignments = [
      ...assignments,
      newAssignment
    ];



    setAssignments(updatedAssignments);



    localStorage.setItem(
      "assignments",
      JSON.stringify(updatedAssignments)
    );



    setTitle("");
    setDescription("");
    setDueDate("");
    setFileName("");



    alert("Assignment uploaded successfully");

  }




  function deleteAssignment(id){


    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this assignment?"
      );


    if(!confirmDelete)
      return;



    const updated =
      assignments.filter(
        (assignment)=>assignment.id !== id
      );



    setAssignments(updated);



    localStorage.setItem(
      "assignments",
      JSON.stringify(updated)
    );


  }




return (

<main className="p-6 md:p-8">


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


<FaClipboardList className="text-5xl"/>


<h1 className="mt-4 text-4xl font-bold">
{teacher?.course} Assignments
</h1>


<p className="mt-2 text-white/80">
Create and manage course assignments.
</p>


</section>




{/* Upload Section */}


<section className="
mt-8
rounded-3xl
bg-white
p-8
shadow-lg
">


<h2 className="
text-2xl
font-bold
text-slate-800
">
Upload New Assignment
</h2>



<form
onSubmit={handleUpload}
className="
mt-6
space-y-5
"
>


<input

type="text"

placeholder="Assignment Title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="
w-full
rounded-xl
border
p-3
"
/>




<textarea

placeholder="Assignment Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

className="
w-full
rounded-xl
border
p-3
"
/>




<div>

<label className="
mb-2
block
font-medium
text-slate-600
">

Due Date

</label>


<input

type="date"

value={dueDate}

onChange={(e)=>setDueDate(e.target.value)}

className="
rounded-xl
border
p-3
"
/>


</div>




<input

type="file"

accept=".pdf,.doc,.docx"

onChange={(e)=>
setFileName(
e.target.files[0]?.name
)
}

className="
w-full
rounded-xl
border
p-3
"
/>




<button

className="
flex
items-center
gap-3
rounded-xl
bg-indigo-600
px-6
py-3
font-semibold
text-white
shadow-md
transition
hover:bg-indigo-700
active:scale-95
"

>


<FaUpload/>

Upload Assignment


</button>



</form>


</section>





{/* Assignment List */}


<section className="mt-8">


<h2 className="
mb-5
text-2xl
font-bold
text-slate-800
">

Uploaded Assignments

</h2>



<div className="
grid
gap-6
md:grid-cols-2
">


{

assignments.map((assignment)=>(


<div

key={assignment.id}

className="
rounded-2xl
bg-white
p-6
shadow-md
transition
hover:-translate-y-1
"

>


<FaFileAlt
className="
text-4xl
text-violet-600
"
/>



<h3 className="
mt-4
text-xl
font-bold
text-slate-800
">

{assignment.title}

</h3>



<p className="
mt-2
text-slate-600
">

{assignment.description}

</p>




<div className="
mt-4
flex
items-center
gap-2
text-sm
text-slate-500
">

<FaCalendarAlt/>

Due:
{assignment.dueDate}

</div>




<p className="
mt-2
text-sm
text-slate-400
">

File:
{assignment.file}

</p>




<button

onClick={()=>
deleteAssignment(
assignment.id
)
}

className="
mt-5
flex
items-center
gap-2
rounded-xl
bg-red-50
px-5
py-2.5
font-semibold
text-red-600
transition-all
hover:bg-red-600
hover:text-white
active:scale-95
"


>

<FaTrash/>

Delete

</button>



</div>


))

}


</div>


</section>


</main>

);


}