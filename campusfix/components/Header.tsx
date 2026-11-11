import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  activeTab?: "home" | "dashboard" | "about";
}

export default function Header({ activeTab = "home" }: HeaderProps) {
  return (
    <header className="w-full bg-white border-b border-[#efefeb]">
      <div className="max-w-[1240px] mx-auto h-[68px] px-6 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 select-none">
          <div className="relative w-[36px] h-[28px] flex-shrink-0 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="CampusFix Logo"
              width={36}
              height={28}
              priority
              style={{ width: "auto", height: "auto" }}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <span className="text-[24px] font-bold leading-none tracking-tight">
            <span className="text-[#09101a]">Campus</span>
            <span className="text-[#075b46]">Fix</span>
          </span>
        </Link>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <nav className="flex items-center gap-3 sm:gap-6">
            <Link
              href="/"
              className={`text-[14px] font-medium leading-none transition-colors ${
                activeTab === "home"
                  ? "bg-[#e7efe5] text-[#111827] px-4 py-2 rounded-[12px]"
                  : "text-[#111827] hover:text-[#075b46] px-2 py-2"
              }`}
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className={`text-[14px] font-medium leading-none transition-colors ${
                activeTab === "dashboard"
                  ? "bg-[#e7efe5] text-[#111827] px-4 py-2 rounded-[12px]"
                  : "text-[#111827] hover:text-[#075b46] px-2 py-2"
              }`}
            >
              Dashboard
            </Link>

            <Link
              href="/about"
              className={`text-[14px] font-medium leading-none transition-colors ${
                activeTab === "about"
                  ? "bg-[#e7efe5] text-[#111827] px-4 py-2 rounded-[12px]"
                  : "text-[#111827] hover:text-[#075b46] px-2 py-2"
              }`}
            >
              About
            </Link>
          </nav>

          {/* Sign In Button */}
          <Link
            href="/signin"
            className="bg-[#075b46] hover:bg-[#064e3b] text-white text-[14px] font-medium h-[34px] px-[18px] rounded-[10px] flex items-center justify-center transition-colors shadow-sm"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
