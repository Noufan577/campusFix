import Image from "next/image";
import { ResolvedIssue } from "@/lib/resolvedIssuesData";

interface IssueCardProps {
  issue: ResolvedIssue;
}

export default function IssueCard({ issue }: IssueCardProps) {
  return (
    <div className="bg-[#fcfcfa] rounded-[14px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] border border-[#efefeb] overflow-hidden flex flex-col h-[235px] w-full max-w-[230px] select-none transition-all hover:shadow-md hover:-translate-y-0.5">
      {/* Photograph Container */}
      <div className="relative w-full h-[138px] rounded-t-[13px] overflow-hidden flex-shrink-0 bg-neutral-100">
        <Image
          src={issue.image}
          alt={issue.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 230px"
        />
      </div>

      {/* Card Details */}
      <div className="p-3.5 flex flex-col justify-between flex-1">
        <h3 className="text-[14px] font-bold text-[#08111c] leading-tight tracking-[-0.3px] line-clamp-2">
          {issue.title}
        </h3>

        <div className="flex items-center gap-2 mt-auto pt-1.5">
          <div className="w-4 h-4 flex-shrink-0 relative">
            <Image
              src="/resolved/calendar.svg"
              alt=""
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
          <span className="text-[12px] font-normal text-[#374151]">
            {issue.date}
          </span>
        </div>
      </div>
    </div>
  );
}
