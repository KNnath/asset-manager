import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  phone: text("phone"),
  role: text("role").default("client"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const applications = pgTable("applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  companyName: text("company_name").notNull(),
  websiteUrl: text("website_url"),
  monthlyRevenue: text("monthly_revenue"),
  primaryGoal: text("primary_goal"),
  servicesInterested: text("services_interested").array(),
  businessDescription: text("business_description"),
  referralSource: text("referral_source"),
  status: text("status").default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertApplicationSchema = createInsertSchema(applications).omit({
  id: true,
  status: true,
  createdAt: true,
});
export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Application = typeof applications.$inferSelect;

export const clientServices = pgTable("client_services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  serviceName: text("service_name").notNull(),
  status: text("status").default("active"),
  price: text("price").notNull(),
});

export const insertClientServiceSchema = createInsertSchema(clientServices).omit({ id: true });
export type InsertClientService = z.infer<typeof insertClientServiceSchema>;
export type ClientService = typeof clientServices.$inferSelect;

export const kpis = pgTable("kpis", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  mecScore: integer("mec_score"),
  organicTrafficGrowth: text("organic_traffic_growth"),
  paidRoas: text("paid_roas"),
  leadsGenerated: integer("leads_generated"),
  monthlyRetainer: text("monthly_retainer"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertKpiSchema = createInsertSchema(kpis).omit({ id: true, updatedAt: true });
export type InsertKpi = z.infer<typeof insertKpiSchema>;
export type Kpi = typeof kpis.$inferSelect;

export const messages = pgTable("messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  sender: text("sender").notNull(),
  text: text("text").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;

export const reports = pgTable("reports", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  name: text("name").notNull(),
  reportDate: text("report_date").notNull(),
  reportType: text("report_type").notNull(),
});

export const insertReportSchema = createInsertSchema(reports).omit({ id: true });
export type InsertReport = z.infer<typeof insertReportSchema>;
export type Report = typeof reports.$inferSelect;

export const activityLog = pgTable("activity_log", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  action: text("action").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertActivityLogSchema = createInsertSchema(activityLog).omit({ id: true, createdAt: true });
export type InsertActivityLog = z.infer<typeof insertActivityLogSchema>;
export type ActivityLog = typeof activityLog.$inferSelect;

export const upcomingItems = pgTable("upcoming_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  action: text("action").notNull(),
  dueDate: text("due_date").notNull(),
});

export const insertUpcomingItemSchema = createInsertSchema(upcomingItems).omit({ id: true });
export type InsertUpcomingItem = z.infer<typeof insertUpcomingItemSchema>;
export type UpcomingItem = typeof upcomingItems.$inferSelect;
