export default function StudentInfo({ student }) {

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        Student Profile
      </h2>

      <p>
        <b>Name:</b> {student.name}
      </p>

      <p>
        <b>Registration No:</b> {student.registration}
      </p>

      <p>
        <b>Department:</b> {student.department}
      </p>

      <p>
        <b>Semester:</b> {student.semester}
      </p>

      <p>
        <b>CGPA:</b> {student.cgpa}
      </p>

    </div>
  );
}