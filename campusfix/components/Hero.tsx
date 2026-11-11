import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  onReportClick?: () => void;
}

export default function Hero({ onReportClick }: HeroProps) {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 md:px-12 pt-8 md:pt-4 pb-12 md:pb-6">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12 min-h-[440px]">
          {/* Left Text & CTA Content */}
          <div className="flex flex-col items-start w-full lg:w-[420px] flex-shrink-0 z-10">
            {/* Eyebrow: CET TRIVANDRUM with green accent line */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[14px] font-semibold text-[#111827] tracking-wider uppercase select-none">
                CET TRIVANDRUM
              </span>
              <div className="w-[33px] h-[1.5px] bg-[#075b46]" />
            </div>

            {/* Main Headlines */}
            <h1 className="flex flex-col font-bold tracking-tight">
              <span className="text-[#08111c] text-[40px] sm:text-[46px] md:text-[52px] leading-[1.08] tracking-[-2px]">
                Report. Resolve.
              </span>
              <div className="relative inline-block mt-1">
                <span className="text-[#075b46] text-[44px] sm:text-[50px] md:text-[56px] leading-[1.08] tracking-[-1.5px]">
                  Improve.
                </span>
                {/* Handwritten Underline */}
                <div className="relative -mt-1 ml-1 sm:ml-2 w-[120px] sm:w-[140px] h-[14px]">
                  <Image
                    src="/hero/underline.svg"
                    alt=""
                    width={140}
                    height={14}
                    className="w-full h-auto object-contain select-none"
                    priority
                  />
                </div>
              </div>
            </h1>

            {/* CTA Button: Report an Issue */}
            <div className="mt-8 md:mt-[38px] w-full sm:w-auto">
              <Link
                href="/report"
                onClick={onReportClick}
                className="w-full sm:w-[228px] h-[49px] bg-[#075b46] hover:bg-[#064e3b] active:scale-[0.99] text-white rounded-[14px] px-6 flex items-center justify-between transition-all shadow-sm group select-none"
              >
                <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/hero/plus.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </div>
                <span className="text-[14px] font-medium leading-none text-white whitespace-nowrap">
                  Report an Issue
                </span>
                <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <Image
                    src="/hero/arrow-right.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Image: CET photograph — original organic crop */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[720px] aspect-[670/418]">
              <Image
                src="/hero/cet-photograph.png"
                alt="CET Trivandrum Campus"
                width={720}
                height={450}
                priority
                className="w-full h-full object-contain lg:object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
