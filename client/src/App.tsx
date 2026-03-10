import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AISEO from "@/pages/AISEO";
import WhiskeyNeat from "@/pages/WhiskeyNeat";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/ai-seo" component={AISEO} />
          <Route path="/whiskeyneat" component={WhiskeyNeat} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          {/* Add placeholders for remaining links to resolve cleanly */}
          <Route path="/framework" component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/case-studies" component={Home} />
          
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
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
