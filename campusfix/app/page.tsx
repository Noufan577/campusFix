import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ReportOverview from "@/components/ReportOverview";
import ResolvedReports from "@/components/ResolvedReports";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col justify-between">
      <Header activeTab="home" />
      <main className="flex-1 w-full">
        <Hero />
        <HowItWorks />
        <ReportOverview />
        <ResolvedReports />
      </main>
      <Footer />
    </div>
  );
}
