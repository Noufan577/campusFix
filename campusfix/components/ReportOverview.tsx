"use client";

import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  defaultAnalyticsData,
  AnalyticsData,
} from "@/lib/analyticsData";

interface ReportOverviewProps {
  data?: AnalyticsData;
}

export default function ReportOverview({
  data = defaultAnalyticsData,
}: ReportOverviewProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState(data.timeframe);

  const pieData = data.statusBreakdown.map((item) => ({
    name: item.name,
    value: item.percentage,
    color: item.color,
  }));

  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <div className="w-[36px] h-[2px] bg-[#075b46]" />
            <h2 className="text-[28px] font-bold text-[#08111c] tracking-[-1px]">
              Report Overview
            </h2>
          </div>

          {/* Timeframe Dropdown Pill */}
          <div className="relative">
            <button
              type="button"
              className="bg-[#fafaf7] border border-[#d0d9cf] hover:border-[#b4c2b2] h-[35px] px-4 rounded-[18px] flex items-center gap-2 text-[#08111c] text-[12px] font-medium transition-colors shadow-2xs select-none"
            >
              <span>{selectedTimeframe}</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-70"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#08111c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Statistics Panel Card */}
        <div className="bg-[#fcfcfa] rounded-[19px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.06)] border border-[#efefeb] p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left: Donut Chart & Status Breakdown */}
            <div className="w-full lg:w-[42%] flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              {/* Donut Chart with Centered Total */}
              <div className="relative w-[170px] h-[170px] flex-shrink-0 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={58}
                      outerRadius={80}
                      stroke="none"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                  <span className="text-[32px] font-bold text-[#063f2f] leading-none">
                    {data.totalReports}
                  </span>
                  <span className="text-[16px] font-medium text-[#063f2f] leading-none mt-1">
                    Reports
                  </span>
                </div>
              </div>

              {/* Status Breakdown Legend */}
              <div className="flex flex-col gap-3 min-w-[150px]">
                {data.statusBreakdown.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 text-[14px]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-[14px] h-[14px] rounded-[4px] flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[#10251d] font-normal">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[#08111c] font-medium">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden lg:block w-px h-[160px] bg-[#dfe4dd] flex-shrink-0" />

            {/* Right: Monthly Trends Grouped Bar Chart */}
            <div className="w-full lg:flex-1 flex flex-col">
              {/* Chart Legend */}
              <div className="flex items-center justify-end gap-6 mb-3 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-[12px] h-[12px] rounded-[3px] bg-[#307c50]" />
                  <span className="text-[12px] text-[#08111c] font-normal">
                    Reports Received
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[12px] h-[12px] rounded-[3px] bg-[#9acd86]" />
                  <span className="text-[12px] text-[#08111c] font-normal">
                    Resolved
                  </span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="w-full h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data.monthlyTrends}
                    margin={{ top: 5, right: 10, left: -25, bottom: 0 }}
                    barGap={6}
                  >
                    <CartesianGrid
                      stroke="#edeee9"
                      strokeDasharray="0"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#08111c", fontSize: 12 }}
                    />
                    <YAxis
                      domain={[0, 40]}
                      ticks={[0, 10, 20, 30, 40]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#08111c", fontSize: 12 }}
                    />
                    <Tooltip
                      cursor={{ fill: "rgba(0, 0, 0, 0.02)" }}
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        borderColor: "#efefeb",
                        borderRadius: "8px",
                        fontSize: "12px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      }}
                    />
                    <Bar
                      dataKey="received"
                      name="Reports Received"
                      fill="#307c50"
                      radius={[3, 3, 0, 0]}
                      barSize={20}
                    />
                    <Bar
                      dataKey="resolved"
                      name="Resolved"
                      fill="#9acd86"
                      radius={[3, 3, 0, 0]}
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
