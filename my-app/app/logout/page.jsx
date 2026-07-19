"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Remove logged-in student
    localStorage.removeItem("student");

    // Redirect to login page
    router.replace("/login");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-semibold">
        Logging out...
      </h1>
    </div>
  );
}