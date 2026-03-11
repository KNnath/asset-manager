import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { api } from "@/lib/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  Home, Box, MessageSquare, FileText, Settings, LogOut, 
  Bell, Menu, X, ArrowUpRight, CheckCircle2, CircleDashed, Paperclip, Loader2
} from "lucide-react";

export default function Portal() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileNavOpen, setMobileMenuOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const qc = useQueryClient();

  const { data: user, isLoading: userLoading, error: userError } = useQuery({
    queryKey: ["/api/auth/me"],
    queryFn: api.getMe,
    retry: false,
  });

  useEffect(() => {
    if (userError) {
      setLocation("/login");
    }
  }, [userError, setLocation]);

  const { data: dashboard, isLoading: dashLoading } = useQuery({
    queryKey: ["/api/portal/dashboard"],
    queryFn: api.getDashboard,
    enabled: !!user,
  });

  const { data: portalMessages } = useQuery({
    queryKey: ["/api/portal/messages"],
    queryFn: api.getMessages,
    enabled: !!user && activeTab === "messages",
  });

  const { data: portalReports } = useQuery({
    queryKey: ["/api/portal/reports"],
    queryFn: api.getReports,
    enabled: !!user && activeTab === "reports",
  });

  const sendMsgMutation = useMutation({
    mutationFn: (text: string) => api.sendMessage(text),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["/api/portal/messages"] });
      setMessageText("");
    },
  });

  const handleLogout = async () => {
    await api.logout();
    setLocation("/login");
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    sendMsgMutation.mutate(messageText);
  };

  if (userLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a08] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-amber animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="w-5 h-5" /> },
    { id: "services", label: "Services", icon: <Box className="w-5 h-5" /> },
    { id: "messages", label: "Messages", icon: <MessageSquare className="w-5 h-5" /> },
    { id: "reports", label: "Reports", icon: <FileText className="w-5 h-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a08] flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 border-r border-[#252420] bg-[#111110] fixed h-full z-10">
        <div className="p-6 border-b border-[#252420]">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl tracking-tight text-[#F5F0E8]">
              WhiskeyNeat<span className="text-amber">.ai</span>
            </span>
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm font-sans text-sm transition-colors ${
                activeTab === item.id 
                  ? "bg-amber/10 text-amber" 
                  : "text-[#8A8478] hover:text-[#F5F0E8] hover:bg-[#252420]/50"
              }`}
              data-testid={`nav-${item.id}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#252420]">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-[#8A8478] hover:text-red-400 transition-colors font-sans text-sm" data-testid="button-logout">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        
        {/* Topbar */}
        <header className="h-20 border-b border-[#252420] bg-[#111110]/80 backdrop-blur-md sticky top-0 z-20 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-[#F5F0E8]" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="font-heading text-xl md:text-2xl font-bold hidden sm:block capitalize">{activeTab}</h2>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-[#8A8478] hover:text-[#F5F0E8] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-[#252420]">
              <div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center text-[#0a0a08] font-bold text-sm">
                {user.contactName?.charAt(0) || "C"}
              </div>
              <span className="font-sans text-sm font-medium text-[#F5F0E8] hidden md:block">{user.companyName}</span>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full">
          
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-10 animate-in fade-in duration-500">
              <div>
                <h1 className="font-heading text-4xl font-bold mb-2">Good morning, {user.contactName?.split(" ")[0] || "there"}.</h1>
                <p className="font-sans text-[#8A8478]">Here is your marketing intelligence overview.</p>
              </div>

              {dashLoading ? (
                <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 text-amber animate-spin" /></div>
              ) : dashboard ? (
                <>
                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div className="bg-[#161614] border border-[#252420] border-t-2 border-t-amber p-6" data-testid="kpi-mec">
                      <p className="font-sans text-xs text-[#8A8478] uppercase tracking-wider mb-2">MEC Score</p>
                      <p className="font-sans text-3xl font-bold text-[#F5F0E8]">{dashboard.kpis?.mecScore || "—"}<span className="text-lg text-[#8A8478]">/100</span></p>
                    </div>
                    <div className="bg-[#161614] border border-[#252420] border-t-2 border-t-amber p-6" data-testid="kpi-traffic">
                      <p className="font-sans text-xs text-[#8A8478] uppercase tracking-wider mb-2">Organic Traffic</p>
                      <div className="flex items-center gap-2">
                        <p className="font-sans text-3xl font-bold text-[#F5F0E8]">{dashboard.kpis?.organicTrafficGrowth || "—"}</p>
                        <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                      </div>
                    </div>
                    <div className="bg-[#161614] border border-[#252420] border-t-2 border-t-amber p-6" data-testid="kpi-roas">
                      <p className="font-sans text-xs text-[#8A8478] uppercase tracking-wider mb-2">Paid ROAS</p>
                      <p className="font-sans text-3xl font-bold text-[#F5F0E8]">{dashboard.kpis?.paidRoas || "—"}</p>
                    </div>
                    <div className="bg-[#161614] border border-[#252420] border-t-2 border-t-amber p-6" data-testid="kpi-leads">
                      <p className="font-sans text-xs text-[#8A8478] uppercase tracking-wider mb-2">Leads Generated</p>
                      <p className="font-sans text-3xl font-bold text-[#F5F0E8]">{dashboard.kpis?.leadsGenerated || "—"}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-[#111110] border border-[#252420] p-8">
                      <h3 className="font-heading text-2xl font-bold mb-6">Recent Activity</h3>
                      <div className="space-y-6">
                        {(dashboard.activity || []).map((a: any) => (
                          <div key={a.id} className="flex gap-4">
                            <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-amber" /></div>
                            <div>
                              <p className="font-sans text-[#F5F0E8]">{a.action}</p>
                              <p className="font-sans text-xs text-[#8A8478] mt-1">{formatDate(a.createdAt)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#111110] border border-[#252420] p-8">
                      <h3 className="font-heading text-2xl font-bold mb-6">Upcoming</h3>
                      <div className="space-y-6">
                        {(dashboard.upcoming || []).map((item: any) => (
                          <div key={item.id} className="flex gap-4">
                            <div className="mt-1"><CircleDashed className="w-5 h-5 text-[#8A8478]" /></div>
                            <div>
                              <p className="font-sans text-[#F5F0E8]">{item.action}</p>
                              <p className="font-sans text-xs text-amber mt-1">{item.dueDate}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <div className="animate-in fade-in duration-500">
               <h1 className="font-heading text-4xl font-bold mb-8">Active Services</h1>
               <div className="grid gap-4">
                 {(dashboard?.services || []).map((service: any) => (
                   <div key={service.id} className="bg-[#111110] border border-[#252420] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                     <div>
                       <div className="flex items-center gap-3 mb-2">
                         <h3 className="font-sans text-xl font-bold">{service.serviceName}</h3>
                         <span className="px-2 py-0.5 rounded-full bg-amber/10 text-amber text-xs font-bold uppercase tracking-wider">{service.status}</span>
                       </div>
                       <p className="font-sans text-sm text-[#8A8478]">Billing: {service.price}</p>
                     </div>
                     <button className="px-4 py-2 border border-[#252420] hover:border-amber hover:text-amber text-sm font-sans transition-colors rounded-sm text-left sm:text-center w-max">
                       View Details
                     </button>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === "messages" && (
            <div className="animate-in fade-in duration-500 h-[calc(100vh-12rem)] flex flex-col">
              <div className="flex-1 bg-[#111110] border border-[#252420] p-6 overflow-y-auto space-y-6">
                {(portalMessages || []).map((msg: any) => (
                  <div key={msg.id} className={`flex flex-col ${msg.sender === "You" ? "items-end" : "items-start"}`}>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-sans text-xs font-bold text-[#8A8478]">{msg.sender}</span>
                      <span className="font-sans text-[10px] text-[#252420]">{formatDate(msg.createdAt)}</span>
                    </div>
                    <div className={`p-4 rounded-sm max-w-[80%] ${msg.sender === "You" ? "bg-amber text-[#0a0a08]" : "bg-[#161614] text-[#F5F0E8] border border-[#252420]"}`}>
                      <p className="font-sans text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button className="p-4 bg-[#111110] border border-[#252420] hover:text-amber text-[#8A8478] transition-colors rounded-sm">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input 
                  type="text" 
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-[#111110] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors"
                  placeholder="Send a message to your team..."
                  data-testid="input-message"
                />
                <button onClick={handleSendMessage} disabled={sendMsgMutation.isPending} className="px-8 bg-amber text-[#0a0a08] font-sans font-bold hover:bg-amber-light transition-colors rounded-sm disabled:opacity-50" data-testid="button-send-message">
                  Send
                </button>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === "reports" && (
            <div className="animate-in fade-in duration-500">
               <h1 className="font-heading text-4xl font-bold mb-8">Intelligence Reports</h1>
               <div className="bg-[#111110] border border-[#252420] rounded-sm overflow-hidden">
                 {(portalReports || []).map((report: any, idx: number) => (
                   <div key={report.id} className={`p-6 flex items-center justify-between ${idx !== (portalReports || []).length - 1 ? "border-b border-[#252420]" : ""}`}>
                     <div className="flex items-center gap-4">
                       <FileText className="w-8 h-8 text-amber/50 hidden sm:block" />
                       <div>
                         <h4 className="font-sans font-medium text-[#F5F0E8] mb-1">{report.name}</h4>
                         <div className="flex gap-3 text-xs font-sans text-[#8A8478]">
                           <span>{report.reportDate}</span>
                           <span>•</span>
                           <span>{report.reportType}</span>
                         </div>
                       </div>
                     </div>
                     <button className="px-4 py-2 bg-[#161614] border border-[#252420] text-amber hover:bg-amber hover:text-[#0a0a08] text-sm font-sans transition-colors rounded-sm whitespace-nowrap">
                       Download PDF
                     </button>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="animate-in fade-in duration-500 space-y-10">
              <h1 className="font-heading text-4xl font-bold mb-8">Settings</h1>
              
              <div className="bg-[#111110] border border-[#252420] p-8">
                <h3 className="font-heading text-2xl font-bold mb-6">Profile</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-xs text-[#8A8478] uppercase tracking-wider block mb-2">Name</label>
                    <p className="font-sans text-[#F5F0E8]">{user.contactName}</p>
                  </div>
                  <div>
                    <label className="font-sans text-xs text-[#8A8478] uppercase tracking-wider block mb-2">Email</label>
                    <p className="font-sans text-[#F5F0E8]">{user.email}</p>
                  </div>
                  <div>
                    <label className="font-sans text-xs text-[#8A8478] uppercase tracking-wider block mb-2">Company</label>
                    <p className="font-sans text-[#F5F0E8]">{user.companyName}</p>
                  </div>
                  <div>
                    <label className="font-sans text-xs text-[#8A8478] uppercase tracking-wider block mb-2">Phone</label>
                    <p className="font-sans text-[#F5F0E8]">{user.phone || "—"}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111110] border border-[#252420] p-8">
                <h3 className="font-heading text-2xl font-bold mb-6">Connected Platforms</h3>
                <div className="flex flex-wrap gap-4">
                  {["SearchAtlas", "Meta Ads", "Google Ads"].map((platform) => (
                    <div key={platform} className="flex items-center gap-3 bg-[#161614] border border-[#252420] px-4 py-3 rounded-sm">
                      <span className="font-sans text-sm text-[#F5F0E8]">{platform}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-sans text-xs text-emerald-500">Connected</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 bg-[#0a0a08] z-50 flex flex-col md:hidden">
          <div className="p-6 border-b border-[#252420] flex justify-between items-center">
             <span className="font-heading font-bold text-xl text-[#F5F0E8]">
              WhiskeyNeat<span className="text-amber">.ai</span>
             </span>
             <button onClick={() => setMobileMenuOpen(false)}><X className="w-6 h-6 text-[#F5F0E8]"/></button>
          </div>
          <nav className="flex-1 p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-sm font-sans text-lg transition-colors ${
                  activeTab === item.id ? "bg-amber/10 text-amber" : "text-[#8A8478]"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}