export interface ProfileStat {
  id: string;
  label: string;
  value: string;
  subnote: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  timecode: string;
  description: string;
}

export const profileStats: ProfileStat[] = [
  {
    id: "stat-campaigns",
    label: "CAMPAIGNS",
    value: "48+",
    subnote: "DTC & SaaS Sprints",
  },
  {
    id: "stat-clients",
    label: "CLIENTS",
    value: "28",
    subnote: "Direct Partnerships",
  },
  {
    id: "stat-roas",
    label: "AVG. ROAS",
    value: "4.3x",
    subnote: "Blended Return",
  },
  {
    id: "stat-years",
    label: "IN TRENCHES",
    value: "05",
    subnote: "Years Full-Time",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    timecode: "00:00:02:15",
    description: "We get to know your brand, your audience and what you want to achieve.",
  },
  {
    step: "02",
    title: "Strategy",
    timecode: "00:00:06:00",
    description: "You get a clear creative plan, fresh ideas and scripts to review.",
  },
  {
    step: "03",
    title: "Ship",
    timecode: "00:00:10:18",
    description: "We shoot, edit and launch your content, keeping you involved along the way.",
  },
  {
    step: "04",
    title: "Scale",
    timecode: "00:00:14:24",
    description: "We review the results, improve what works and plan your next steps.",
  },
];
