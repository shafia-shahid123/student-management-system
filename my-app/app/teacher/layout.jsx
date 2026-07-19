import TeacherSidebar from "./components/TeacherSidebar";

export default function TeacherLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <TeacherSidebar />

      <main className="ml-72 min-h-screen p-8">
        {children}
      </main>
    </div>
  );
}