import Image from "next/image";
import Link from "next/link";
import IssueCard from "@/components/IssueCard";
import {
  defaultResolvedIssues,
  ResolvedIssue,
} from "@/lib/resolvedIssuesData";

interface ResolvedReportsProps {
  issues?: ResolvedIssue[];
  viewAllHref?: string;
}

export default function ResolvedReports({
  issues = defaultResolvedIssues,
  viewAllHref = "/reports",
}: ResolvedReportsProps) {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <div className="w-[36px] h-[2px] bg-[#075b46]" />
            <h2 className="text-[28px] font-bold text-[#08111c] tracking-[-1px]">
              Recently Resolved
            </h2>
          </div>

          <Link
            href={viewAllHref}
            className="flex items-center gap-1.5 text-[14px] font-semibold text-[#075b46] hover:text-[#064e3b] transition-colors group select-none"
          >
            <span>View All</span>
            <div className="w-4 h-4 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <Image
                src="/resolved/arrow-right.svg"
                alt=""
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* 5 Cards Responsive Grid / Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </section>
  );
}
