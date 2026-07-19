"use client";

import { useEffect, useState } from "react";

import {
  FaQuestionCircle,
  FaUpload,
  FaTrash,
  FaFilePdf,
  FaClock,
  FaBookOpen,
} from "react-icons/fa";


export default function TeacherQuizzes() {


  const [teacher, setTeacher] = useState(null);

  const [quizzes, setQuizzes] = useState([]);

  const [title, setTitle] = useState("");

  const [file, setFile] = useState(null);

  const [deadline, setDeadline] = useState("");



  useEffect(() => {


    const teacherData =
      localStorage.getItem("teacher");


    if (teacherData) {

      setTeacher(JSON.parse(teacherData));

    }



    const savedQuizzes =
      JSON.parse(
        localStorage.getItem("quizzes")
      ) || [];



    setQuizzes(savedQuizzes);



  }, []);





  function uploadQuiz(){


    if(!title || !file || !deadline){

      alert("Please complete all quiz details");

      return;

    }



    const newQuiz = {


      id: Date.now(),


      title,


      fileName:file.name,


      deadline,


      course:teacher.course,


      teacher:teacher.name,


      uploaded:
      new Date().toLocaleDateString(),


    };




    const updated = [

      ...quizzes,

      newQuiz

    ];



    setQuizzes(updated);



    localStorage.setItem(

      "quizzes",

      JSON.stringify(updated)

    );



    setTitle("");

    setFile(null);

    setDeadline("");



  }





  function deleteQuiz(id){


    const updated = quizzes.filter(

      (quiz)=>quiz.id !== id

    );



    setQuizzes(updated);



    localStorage.setItem(

      "quizzes",

      JSON.stringify(updated)

    );



  }







return (

<main className="space-y-8 p-6 md:p-8">



{/* Header */}


<section
className="
overflow-hidden
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


<div className="
rounded-2xl
bg-white/20
p-4
backdrop-blur
">


<FaQuestionCircle className="text-4xl"/>


</div>



<div>


<h1 className="text-3xl font-bold">

Upload Quizzes

</h1>


<p className="mt-2 text-indigo-100">

{teacher?.course}

</p>


</div>



</div>


</section>






{/* Upload Section */}



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


<div className="mb-6 flex items-center gap-3">


<div className="
rounded-xl
bg-indigo-100
p-3
text-indigo-600
">

<FaUpload/>

</div>



<div>


<h2 className="
text-2xl
font-bold
text-slate-800
">

Create Quiz

</h2>


<p className="
text-slate-500
">

Upload quiz file and set deadline

</p>


</div>



</div>





<div className="
grid
gap-5
md:grid-cols-3
">



<input

type="text"

placeholder="Quiz title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="
rounded-xl
border
border-slate-300
px-4
py-3
outline-none
focus:border-indigo-500
focus:ring-4
focus:ring-indigo-100
"

/>





<input

type="file"

onChange={(e)=>setFile(e.target.files[0])}

className="
rounded-xl
border
border-slate-300
px-4
py-3
text-sm
"

/>





<input

type="datetime-local"

value={deadline}

onChange={(e)=>setDeadline(e.target.value)}

className="
rounded-xl
border
border-slate-300
px-4
py-3
"

/>



</div>





<button

onClick={uploadQuiz}

className="
mt-6
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


<FaUpload/>

Upload Quiz


</button>



</section>







{/* Quiz List */}



<section>


<div className="mb-5 flex items-center gap-3">


<FaQuestionCircle className="
text-2xl
text-violet-600
"/>


<h2 className="
text-2xl
font-bold
text-slate-800
">

Uploaded Quizzes

</h2>


</div>







<div className="
grid
gap-6
md:grid-cols-2
">



{


quizzes.map((quiz)=>(


<div

key={quiz.id}

className="
rounded-3xl
border
border-slate-200
bg-white
p-6
shadow-md
transition
hover:-translate-y-1
hover:shadow-xl
"


>



<div className="
flex
items-center
gap-4
">


<div className="
rounded-xl
bg-cyan-100
p-4
text-cyan-600
">


<FaFilePdf className="text-2xl"/>


</div>




<div>


<h3 className="
font-bold
text-slate-800
">

{quiz.title}

</h3>



<p className="
flex
items-center
gap-2
text-sm
text-slate-500
">

<FaBookOpen/>

{quiz.course}

</p>


</div>


</div>







<div className="
mt-5
space-y-2
rounded-xl
bg-slate-50
p-4
">


<p className="
text-sm
text-slate-600
">

📄 {quiz.fileName}

</p>


<p className="
flex
items-center
gap-2
text-sm
text-slate-600
">

<FaClock className="text-indigo-600"/>

Deadline:
{quiz.deadline}

</p>



<p className="
text-xs
text-slate-400
">

Uploaded:
{quiz.uploaded}

</p>


</div>






<button

onClick={()=>deleteQuiz(quiz.id)}

className="
mt-5
flex
items-center
gap-2
rounded-xl
bg-red-50
px-5
py-2
font-medium
text-red-600
transition
hover:bg-red-100
active:scale-90
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