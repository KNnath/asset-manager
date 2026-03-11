import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Apply() {
  return (
    <div className="min-h-screen pt-32 pb-32 bg-noise">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Let's See If We're a Fit</h1>
          <p className="font-sans text-lg text-[#8A8478] max-w-xl mx-auto">
            We work with a limited number of clients. Tell us about your business and we'll get back to you within one business day.
          </p>
        </div>

        <form className="bg-[#111110] border border-[#252420] p-8 md:p-12 space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Full Name</label>
              <input type="text" className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors" placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Company Name</label>
              <input type="text" className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors" placeholder="Acme Corp" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Website URL</label>
            <input type="url" className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors" placeholder="https://..." />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Current Monthly Revenue</label>
              <select className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors appearance-none">
                <option>Under $50K</option>
                <option>$50K–$250K</option>
                <option>$250K–$1M</option>
                <option>$1M+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Primary Goal</label>
              <select className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors appearance-none">
                <option>Scale Revenue</option>
                <option>Prepare to Sell</option>
                <option>Raise Capital</option>
                <option>Reduce Marketing Chaos</option>
                <option>All of the Above</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Which service interests you most?</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['AI SEO', 'Media Buying', 'Branding', 'Web Dev', 'Full Concierge'].map((service) => (
                <label key={service} className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 bg-[#0a0a08] border-[#252420] text-amber focus:ring-amber focus:ring-offset-0 rounded-sm" />
                  <span className="font-sans text-sm text-[#8A8478]">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Tell us about your business</label>
            <textarea className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors min-h-[120px] resize-none" placeholder="What are your current challenges?"></textarea>
          </div>

          <div className="space-y-2">
            <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">How did you hear about us?</label>
            <input type="text" className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors" />
          </div>

          <button type="submit" className="w-full bg-amber hover:bg-amber-light text-[#0a0a08] font-sans font-bold py-5 rounded-sm transition-colors flex justify-center items-center gap-2 text-lg">
            Submit Application <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="text-center font-sans text-xs text-[#8A8478] mt-6">
            We review every application personally. If there's a fit, we'll reach out to schedule a discovery call.
          </p>
        </form>
      </div>
    </div>
  );
}