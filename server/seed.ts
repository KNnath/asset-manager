import { db } from "./db";
import { users, clientServices, kpis, messages, reports, activityLog, upcomingItems } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function seedDemoData() {
  const existingUser = await db.select().from(users).where(eq(users.email, "client@apexindustrial.com"));
  if (existingUser.length > 0) return;

  const [demoUser] = await db.insert(users).values({
    email: "client@apexindustrial.com",
    password: "demo123",
    companyName: "Apex Industrial Supply",
    contactName: "Marcus Chen",
    phone: "(602) 555-0192",
    role: "client",
  }).returning();

  await db.insert(clientServices).values([
    { userId: demoUser.id, serviceName: "AI SEO Growth", status: "active", price: "$3,500/mo" },
    { userId: demoUser.id, serviceName: "Media Buying", status: "active", price: "12% of spend" },
  ]);

  await db.insert(kpis).values({
    userId: demoUser.id,
    mecScore: 74,
    organicTrafficGrowth: "+34%",
    paidRoas: "4.2x",
    leadsGenerated: 287,
    monthlyRetainer: "$8,200",
  });

  await db.insert(messages).values([
    { userId: demoUser.id, sender: "Whiskey River Team", text: "We've finalized the Q2 keyword strategy. Let's review on our next call." },
    { userId: demoUser.id, sender: "You", text: "Sounds good. Did we include the new product lines?" },
    { userId: demoUser.id, sender: "Whiskey River Team", text: "Yes, they are mapped out in the priority cluster." },
  ]);

  await db.insert(reports).values([
    { userId: demoUser.id, name: "February 2026 Marketing Intelligence Report", reportDate: "Mar 1, 2026", reportType: "Comprehensive" },
    { userId: demoUser.id, name: "Q1 2026 SEO Performance Report", reportDate: "Feb 15, 2026", reportType: "SEO" },
    { userId: demoUser.id, name: "January 2026 Paid Media Report", reportDate: "Feb 1, 2026", reportType: "Media" },
  ]);

  await db.insert(activityLog).values([
    { userId: demoUser.id, action: "Monthly report ready" },
    { userId: demoUser.id, action: "SEO content published" },
    { userId: demoUser.id, action: "Ad campaign launched" },
  ]);

  await db.insert(upcomingItems).values([
    { userId: demoUser.id, action: "Strategy Call", dueDate: "Tue Mar 18" },
    { userId: demoUser.id, action: "Monthly Report", dueDate: "Due Mar 31" },
  ]);

  console.log("Demo data seeded for Apex Industrial Supply");
}
