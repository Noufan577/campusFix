export interface ResolvedIssue {
  id: string;
  title: string;
  date: string;
  image: string;
}

export const defaultResolvedIssues: ResolvedIssue[] = [
  {
    id: "1",
    title: "Broken street light near main gate",
    date: "Jun 24, 2025",
    image: "/resolved/issue-1.png",
  },
  {
    id: "2",
    title: "Damaged classroom chair (Room 204)",
    date: "Jun 20, 2025",
    image: "/resolved/issue-2.png",
  },
  {
    id: "3",
    title: "Water leakage in CSE block",
    date: "Jun 22, 2025",
    image: "/resolved/issue-3.png",
  },
  {
    id: "4",
    title: "Dustbin overflow near cafeteria",
    date: "Jun 20, 2025",
    image: "/resolved/issue-4.png",
  },
  {
    id: "5",
    title: "Pothole on the main campus road",
    date: "Jun 16, 2025",
    image: "/resolved/issue-5.png",
  },
];

