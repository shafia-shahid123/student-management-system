"use client";

import { useEffect, useState } from "react";

export default function LecturesPage() {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("teacher");

    if (data) {
      setTeacher(JSON.parse(data));
    }
  }, []);

  if (!teacher) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold">
        {teacher.course}
      </h1>

      <p>Upload lectures for this course.</p>
    </div>
  );
}