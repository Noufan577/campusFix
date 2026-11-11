import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col">
      <Header activeTab="home" />
      <main className="flex-1 max-w-[1024px] w-full mx-auto px-6">
        {/* Next sections will be added here as Figma frame URLs are provided */}
      </main>
    </div>
  );
}
