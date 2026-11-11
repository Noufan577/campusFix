import Image from "next/image";

interface StepItem {
  id: number;
  title: string;
  description: string[];
  icon: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    title: "Report",
    description: ["Upload a photo and", "share the issue."],
    icon: "/how-it-works/report-icon.png",
  },
  {
    id: 2,
    title: "AI Draft",
    description: ["We analyse it and", "prepare an email."],
    icon: "/how-it-works/ai-draft-icon.png",
  },
  {
    id: 3,
    title: "Track",
    description: ["Send the report and", "follow its progress."],
    icon: "/how-it-works/track-icon.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10 sm:py-14">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* Decorative Wave at Top Right of the Content Container */}
        <div className="absolute top-0 right-6 sm:right-8 md:right-12 pointer-events-none select-none z-0 hidden lg:block">
          <Image
            src="/how-it-works/wave.svg"
            alt=""
            width={158}
            height={51}
            className="object-contain"
          />
        </div>

        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-10 sm:mb-14">
          <div className="w-[36px] h-[2px] bg-[#075b46]" />
          <h2 className="text-[28px] font-bold text-[#08111c] tracking-[-1px]">
            How it Works
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-[960px] mx-auto">
          {/* Desktop Curved Connector Line with Dots (Hidden on small screens) */}
          <div className="hidden md:block absolute top-[36px] left-[15%] right-[15%] h-[43px] pointer-events-none select-none -z-0">
            <div className="relative w-full h-full max-w-[620px] mx-auto">
              <Image
                src="/how-it-works/curved-connector.svg"
                alt=""
                fill
                className="object-contain"
              />
              {/* Dot 1 */}
              <div className="absolute top-[8px] left-[23%] w-[11px] h-[11px]">
                <Image
                  src="/how-it-works/connection-dot-1.svg"
                  alt=""
                  width={11}
                  height={11}
                  className="object-contain"
                />
              </div>
              {/* Dot 2 */}
              <div className="absolute top-[8px] right-[23%] w-[11px] h-[11px]">
                <Image
                  src="/how-it-works/connection-dot-2.svg"
                  alt=""
                  width={11}
                  height={11}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* 3 Step Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Step Icon */}
                <div className="w-[88px] h-[78px] rounded-[24px] overflow-hidden flex items-center justify-center shadow-sm select-none">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={88}
                    height={78}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Step Title */}
                <h3 className="mt-4 text-[20px] font-bold text-[#08111c] leading-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <div className="mt-2 text-[14px] font-normal text-[#343b44] leading-relaxed">
                  {step.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
