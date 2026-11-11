import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#104c3b] text-white">
      <div className="max-w-[1240px] mx-auto min-h-[88px] px-6 sm:px-8 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 select-none">
        {/* Left: Brand & College Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Logo & Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[36px] h-[28px] flex-shrink-0 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="CampusFix"
                width={36}
                height={28}
                style={{ width: "auto", height: "auto" }}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="text-[22px] font-semibold leading-none tracking-tight text-white">
              CampusFix
            </span>
          </Link>

          {/* College Divider & Text */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:block w-px h-[39px] bg-[#a7bdb0] opacity-80" />
            <div className="text-[13px] font-normal leading-snug text-white/95 text-center sm:text-left">
              <p>College of Engineering</p>
              <p>Trivandrum</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Email & Department */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          {/* Email */}
          <a
            href="mailto:campusfix@cet.ac.in"
            className="flex items-center gap-2.5 text-[13px] font-normal text-white hover:text-white/80 transition-colors"
          >
            <div className="w-5 h-4 relative flex-shrink-0 flex items-center justify-center">
              <Image
                src="/footer/email.svg"
                alt="Email"
                width={20}
                height={16}
                className="object-contain"
              />
            </div>
            <span>campusfix@cet.ac.in</span>
          </a>

          {/* Department Divider & Department Name */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-px h-[39px] bg-[#a7bdb0] opacity-80" />
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 relative flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/footer/department-layers.svg"
                  alt="Department"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="text-[13px] font-normal leading-snug text-white/95 text-center sm:text-left">
                <p>Computer Science</p>
                <p>Department</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
