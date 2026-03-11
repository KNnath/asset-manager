import { eq } from "drizzle-orm";
import { db } from "./db";
import {
  users, type User, type InsertUser,
  applications, type Application, type InsertApplication,
  clientServices, type ClientService, type InsertClientService,
  kpis, type Kpi, type InsertKpi,
  messages, type Message, type InsertMessage,
  reports, type Report, type InsertReport,
  activityLog, type ActivityLog, type InsertActivityLog,
  upcomingItems, type UpcomingItem, type InsertUpcomingItem,
} from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  createApplication(app: InsertApplication): Promise<Application>;
  getApplications(): Promise<Application[]>;

  getClientServices(userId: string): Promise<ClientService[]>;
  createClientService(service: InsertClientService): Promise<ClientService>;

  getKpis(userId: string): Promise<Kpi | undefined>;
  createKpis(kpi: InsertKpi): Promise<Kpi>;

  getMessages(userId: string): Promise<Message[]>;
  createMessage(msg: InsertMessage): Promise<Message>;

  getReports(userId: string): Promise<Report[]>;
  createReport(report: InsertReport): Promise<Report>;

  getActivityLog(userId: string): Promise<ActivityLog[]>;
  createActivityLog(log: InsertActivityLog): Promise<ActivityLog>;

  getUpcomingItems(userId: string): Promise<UpcomingItem[]>;
  createUpcomingItem(item: InsertUpcomingItem): Promise<UpcomingItem>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(user: InsertUser): Promise<User> {
    const [created] = await db.insert(users).values(user).returning();
    return created;
  }

  async createApplication(app: InsertApplication): Promise<Application> {
    const [created] = await db.insert(applications).values(app).returning();
    return created;
  }

  async getApplications(): Promise<Application[]> {
    return db.select().from(applications);
  }

  async getClientServices(userId: string): Promise<ClientService[]> {
    return db.select().from(clientServices).where(eq(clientServices.userId, userId));
  }

  async createClientService(service: InsertClientService): Promise<ClientService> {
    const [created] = await db.insert(clientServices).values(service).returning();
    return created;
  }

  async getKpis(userId: string): Promise<Kpi | undefined> {
    const [kpi] = await db.select().from(kpis).where(eq(kpis.userId, userId));
    return kpi;
  }

  async createKpis(kpi: InsertKpi): Promise<Kpi> {
    const [created] = await db.insert(kpis).values(kpi).returning();
    return created;
  }

  async getMessages(userId: string): Promise<Message[]> {
    return db.select().from(messages).where(eq(messages.userId, userId));
  }

  async createMessage(msg: InsertMessage): Promise<Message> {
    const [created] = await db.insert(messages).values(msg).returning();
    return created;
  }

  async getReports(userId: string): Promise<Report[]> {
    return db.select().from(reports).where(eq(reports.userId, userId));
  }

  async createReport(report: InsertReport): Promise<Report> {
    const [created] = await db.insert(reports).values(report).returning();
    return created;
  }

  async getActivityLog(userId: string): Promise<ActivityLog[]> {
    return db.select().from(activityLog).where(eq(activityLog.userId, userId));
  }

  async createActivityLog(log: InsertActivityLog): Promise<ActivityLog> {
    const [created] = await db.insert(activityLog).values(log).returning();
    return created;
  }

  async getUpcomingItems(userId: string): Promise<UpcomingItem[]> {
    return db.select().from(upcomingItems).where(eq(upcomingItems.userId, userId));
  }

  async createUpcomingItem(item: InsertUpcomingItem): Promise<UpcomingItem> {
    const [created] = await db.insert(upcomingItems).values(item).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
