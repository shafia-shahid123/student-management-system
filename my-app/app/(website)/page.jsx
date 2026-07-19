import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Hero />

      {/* Floating Statistics */}
      <div className="-mt-16 relative z-20">
        <Stats />
      </div>
    </main>
  );
}
