export interface StatusItem {
  name: string;
  percentage: number;
  color: string;
}

export interface MonthlyStat {
  month: string;
  received: number;
  resolved: number;
}

export interface AnalyticsData {
  totalReports: number;
  timeframe: string;
  statusBreakdown: StatusItem[];
  monthlyTrends: MonthlyStat[];
}

export const defaultAnalyticsData: AnalyticsData = {
  totalReports: 128,
  timeframe: "This Month",
  statusBreakdown: [
    { name: "Resolved", percentage: 71, color: "#075b46" },
    { name: "In Progress", percentage: 21, color: "#307c50" },
    { name: "Reported", percentage: 8, color: "#9acd86" },
  ],
  monthlyTrends: [
    { month: "Jan", received: 15, resolved: 10 },
    { month: "Feb", received: 25, resolved: 12 },
    { month: "Mar", received: 20, resolved: 12 },
    { month: "Apr", received: 29, resolved: 20 },
    { month: "May", received: 40, resolved: 26 },
    { month: "Jun", received: 29, resolved: 20 },
  ],
};

