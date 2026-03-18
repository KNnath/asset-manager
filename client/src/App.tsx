import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Apply from "@/pages/Apply";
import Login from "@/pages/Login";
import Portal from "@/pages/Portal";
import Intelligence from "@/pages/Intelligence";
import About from "@/pages/About";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  const [location] = useLocation();
  const noLayout = location === "/portal" || location === "/login";

  if (noLayout) {
    return (
      <Switch>
        <Route path="/portal" component={Portal} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }

  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/apply" component={Apply} />
        <Route path="/intelligence" component={Intelligence} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
