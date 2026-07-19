"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("student");

    if (!data) {
      router.replace("/login");
      return;
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-100
        "
      >
        <h1
          className="
            text-lg
            font-semibold
            text-slate-600
            animate-pulse
          "
        >
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div
      className="
        flex
        min-h-screen
        bg-slate-100
      "
    >
      <Sidebar />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}