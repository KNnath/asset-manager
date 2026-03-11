import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertApplicationSchema, insertMessageSchema } from "@shared/schema";
import session from "express-session";
import { seedDemoData } from "./seed";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "wrm-secret-key-change-in-prod",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
      },
    })
  );

  // Seed demo data on startup
  try {
    await seedDemoData();
  } catch (e) {
    console.log("Seed skipped or failed:", (e as Error).message);
  }

  // Auth: Login
  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await storage.getUserByEmail(email);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    req.session.userId = user.id;
    return res.json({
      id: user.id,
      email: user.email,
      companyName: user.companyName,
      contactName: user.contactName,
    });
  });

  // Auth: Current user
  app.get("/api/auth/me", async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated." });
    }

    const user = await storage.getUser(req.session.userId);
    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    return res.json({
      id: user.id,
      email: user.email,
      companyName: user.companyName,
      contactName: user.contactName,
      phone: user.phone,
    });
  });

  // Auth: Logout
  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ message: "Logged out." });
    });
  });

  // Applications
  app.post("/api/applications", async (req, res) => {
    const parsed = insertApplicationSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid application data.", errors: parsed.error.flatten() });
    }
    const application = await storage.createApplication(parsed.data);
    return res.status(201).json(application);
  });

  // Portal: Dashboard data
  app.get("/api/portal/dashboard", async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated." });
    }
    const userId = req.session.userId;

    const [services, kpiData, activity, upcoming] = await Promise.all([
      storage.getClientServices(userId),
      storage.getKpis(userId),
      storage.getActivityLog(userId),
      storage.getUpcomingItems(userId),
    ]);

    return res.json({ services, kpis: kpiData, activity, upcoming });
  });

  // Portal: Services
  app.get("/api/portal/services", async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated." });
    }
    const services = await storage.getClientServices(req.session.userId);
    return res.json(services);
  });

  // Portal: Messages
  app.get("/api/portal/messages", async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated." });
    }
    const msgs = await storage.getMessages(req.session.userId);
    return res.json(msgs);
  });

  app.post("/api/portal/messages", async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated." });
    }
    const parsed = insertMessageSchema.safeParse({
      ...req.body,
      userId: req.session.userId,
      sender: "You",
    });
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid message." });
    }
    const msg = await storage.createMessage(parsed.data);
    return res.status(201).json(msg);
  });

  // Portal: Reports
  app.get("/api/portal/reports", async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated." });
    }
    const reps = await storage.getReports(req.session.userId);
    return res.json(reps);
  });

  return httpServer;
}
