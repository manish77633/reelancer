export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  outcome: string;
  deliverables: [string, string, string];
  fromPrice: string;
  priceNote: string;
  initialLikes: number;
  initialSaves: number;
  previewNote: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "service-01",
    number: "01",
    category: "CREATIVE LAB",
    title: "Short videos & reels",
    outcome: "Videos that catch attention and give people a reason to keep watching.",
    deliverables: [
      "12 video scripts with different opening ideas",
      "Video direction, editing and sound design",
      "Easy to read captions for every video",
    ],
    fromPrice: "$3,200",
    priceNote: "/ monthly sprint",
    initialLikes: 184,
    initialSaves: 92,
    previewNote: "Avg. 3.4x watch-time lift vs static image ads",
  },
  {
    id: "service-02",
    number: "02",
    category: "PAID MEDIA",
    title: "Social media advertising",
    outcome: "Reach the right people with ads built around your goals and budget.",
    deliverables: [
      "Ad account setup and conversion tracking",
      "New creative ideas tested every two weeks",
      "Follow up campaigns for interested visitors",
    ],
    fromPrice: "$3,800",
    priceNote: "/ month + % ad spend",
    initialLikes: 247,
    initialSaves: 114,
    previewNote: "Consistent 3.8x+ ROAS across DTC accounts",
  },
  {
    id: "service-03",
    number: "03",
    category: "ATTRIBUTION",
    title: "Website & ad tracking",
    outcome: "Understand where your customers come from and which ads work.",
    deliverables: [
      "Reliable website and purchase tracking",
      "Connect your website events to your ad platforms",
      "A simple dashboard to understand your results",
    ],
    fromPrice: "$1,800",
    priceNote: "one-time setup",
    initialLikes: 129,
    initialSaves: 78,
    previewNote: "Recovers up to 28% of dropped iOS attribution",
  },
  {
    id: "service-04",
    number: "04",
    category: "CRO / FUNNELS",
    title: "Landing pages that sell",
    outcome: "Make it easy for visitors to understand your offer and take the next step.",
    deliverables: [
      "A clear, easy to use mobile landing page",
      "Copy that answers your customers’ questions",
      "Test different offers to find what works",
    ],
    fromPrice: "$2,400",
    priceNote: "/ funnel build",
    initialLikes: 165,
    initialSaves: 88,
    previewNote: "Tested across $2.4M in DTC checkouts",
  },
  {
    id: "service-05",
    number: "05",
    category: "AUTOMATION",
    title: "Instagram DM automation",
    outcome: "Turn comments into conversations, enquiries and bookings.",
    deliverables: [
      "Automatic replies to Instagram comments",
      "Send helpful resources and offers through DMs",
      "Collect enquiries and help people book a call",
    ],
    fromPrice: "$1,600",
    priceNote: "/ pipeline build",
    initialLikes: 142,
    initialSaves: 67,
    previewNote: "Up to 18% conversation-to-checkout conversion",
  },
  {
    id: "service-06",
    number: "06",
    category: "POSITIONING",
    title: "Creative strategy & planning",
    outcome: "A practical content plan built around your audience and business goals.",
    deliverables: [
      "Review your existing content and audience",
      "Fresh ideas, scripts and a content calendar",
      "A clear plan for your next campaign",
    ],
    fromPrice: "$2,600",
    priceNote: "/ brand system",
    initialLikes: 208,
    initialSaves: 99,
    previewNote: "Separates you from generic corporate content",
  },
];
