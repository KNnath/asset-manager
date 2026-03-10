import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Left Col - Info */}
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                Let's discuss your <span className="text-primary">MEC</span>.
              </h1>
              <p className="text-lg text-white/70 mb-12 leading-relaxed max-w-md">
                Book a strategy call to learn how a managed AI marketing system can consolidate your stack, reduce chaos, and drive measurable growth.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <p className="text-white/60 text-sm">strategy@whiskeyrivermedia.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Headquarters</h4>
                    <p className="text-white/60 text-sm">Remote & Global.<br/>Built for the modern web.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col - Form */}
            <div className="glass-card p-8 md:p-12 rounded-3xl border-white/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Request a Consultation</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">First Name</label>
                    <Input className="bg-background/50 border-white/10 focus-visible:ring-primary h-12" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Last Name</label>
                    <Input className="bg-background/50 border-white/10 focus-visible:ring-primary h-12" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Work Email</label>
                  <Input type="email" className="bg-background/50 border-white/10 focus-visible:ring-primary h-12" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Company URL</label>
                  <Input className="bg-background/50 border-white/10 focus-visible:ring-primary h-12" placeholder="https://company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">What are your current marketing challenges?</label>
                  <Textarea className="bg-background/50 border-white/10 focus-visible:ring-primary min-h-[120px] resize-none" placeholder="Too many tools, fragmented data..." />
                </div>

                <Button type="submit" className="w-full h-14 text-base font-semibold rounded-xl">
                  Submit Request
                </Button>
                <p className="text-xs text-center text-white/40 mt-4">
                  We'll review your application and respond within 24 hours.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}