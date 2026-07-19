"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  const router = useRouter();

  return (
    <div className="mt-10 flex gap-5">
      <button
        onClick={() => router.push("/login")}
        className="flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-indigo-700"
      >
        Get Started
        <ArrowRight size={20} />
      </button>

      <button
        onClick={() => router.push("/courses")}
        className="rounded-xl border-2 border-indigo-600 px-8 py-4 font-semibold text-indigo-600 transition hover:bg-indigo-50"
      >
        Explore Courses
      </button>
    </div>
  );
}