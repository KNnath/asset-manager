export const mockClient = {
  name: "Apex Industrial Supply",
  activeServices: [
    { name: "AI SEO Growth", status: "Active", price: "$3,500/mo" },
    { name: "Media Buying", status: "Active", price: "12% of spend" }
  ],
  kpis: {
    mecScore: 74,
    organicTrafficGrowth: "+34%",
    paidRoas: "4.2x",
    leadsGenerated: 287,
    monthlyRetainer: "$8,200"
  },
  recentActivity: [
    { id: 1, action: "Monthly report ready", date: "Today, 9:00 AM" },
    { id: 2, action: "SEO content published", date: "Yesterday, 2:30 PM" },
    { id: 3, action: "Ad campaign launched", date: "Mar 10, 11:15 AM" }
  ],
  upcomingItems: [
    { id: 1, action: "Strategy Call", date: "Tue Mar 18" },
    { id: 2, action: "Monthly Report", date: "Due Mar 31" }
  ],
  messages: [
    { id: 1, sender: "Whiskey River Team", text: "We've finalized the Q2 keyword strategy. Let's review on our next call.", time: "10:30 AM" },
    { id: 2, sender: "You", text: "Sounds good. Did we include the new product lines?", time: "11:45 AM" },
    { id: 3, sender: "Whiskey River Team", text: "Yes, they are mapped out in the priority cluster.", time: "12:00 PM" }
  ],
  reports: [
    { id: 1, name: "February 2026 Marketing Intelligence Report", date: "Mar 1, 2026", type: "Comprehensive" },
    { id: 2, name: "Q1 2026 SEO Performance Report", date: "Feb 15, 2026", type: "SEO" },
    { id: 3, name: "January 2026 Paid Media Report", date: "Feb 1, 2026", type: "Media" }
  ]
};