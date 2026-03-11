import { queryClient } from "./queryClient";

async function apiRequest(method: string, url: string, body?: any) {
  const options: RequestInit = {
    method,
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(url, options);
  if (!res.ok) {
    const data = await res.json().catch(() => ({ message: "Request failed" }));
    throw new Error(data.message || "Request failed");
  }
  return res.json();
}

export const api = {
  login: (email: string, password: string) =>
    apiRequest("POST", "/api/auth/login", { email, password }),
  
  logout: () => apiRequest("POST", "/api/auth/logout"),
  
  getMe: () => apiRequest("GET", "/api/auth/me"),
  
  submitApplication: (data: any) =>
    apiRequest("POST", "/api/applications", data),
  
  getDashboard: () => apiRequest("GET", "/api/portal/dashboard"),
  
  getServices: () => apiRequest("GET", "/api/portal/services"),
  
  getMessages: () => apiRequest("GET", "/api/portal/messages"),
  
  sendMessage: (text: string) =>
    apiRequest("POST", "/api/portal/messages", { text }),
  
  getReports: () => apiRequest("GET", "/api/portal/reports"),
};
