import { Switch, Route } from "wouter";
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

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function Router() {
  return (
    <Switch>
      {/* Portal runs without main layout */}
      <Route path="/portal" component={Portal} />
      <Route path="/login" component={Login} />
      
      {/* Main Site with Layout */}
      <Route path="/:rest*">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/apply" component={Apply} />
              <Route path="/intelligence" component={Intelligence} />
              {/* Placeholders */}
              <Route path="/about" component={Home} />
              <Route path="/blog" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Route>
    </Switch>
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
