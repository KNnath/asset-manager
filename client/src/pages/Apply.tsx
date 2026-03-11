import { ArrowRight } from "lucide-react";
import { api } from "@/lib/api";
import { useState } from "react";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    websiteUrl: "",
    monthlyRevenue: "Under $50K",
    primaryGoal: "Scale Revenue",
    servicesInterested: [] as string[],
    businessDescription: "",
    referralSource: "",
  });

  const handleCheckbox = (service: string) => {
    setForm(prev => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter(s => s !== service)
        : [...prev.servicesInterested, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.submitApplication(form);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-32 bg-noise flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <div className="w-16 h-16 rounded-full bg-amber/10 text-amber flex items-center justify-center mx-auto mb-8">
            <CheckIcon className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-5xl font-bold mb-6">Application Received</h1>
          <p className="font-sans text-lg text-[#8A8478] mb-8">
            We review every application personally. If there's a fit, we'll reach out within one business day to schedule a discovery call.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-32 bg-noise">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Let's See If We're a Fit</h1>
          <p className="font-sans text-lg text-[#8A8478] max-w-xl mx-auto">
            We work with a limited number of clients. Tell us about your business and we'll get back to you within one business day.
          </p>
        </div>

        <form className="bg-[#111110] border border-[#252420] p-8 md:p-12 space-y-8" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-900/20 border border-red-800/50 text-red-300 text-sm p-4 rounded-sm">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Full Name</label>
              <input type="text" required value={form.fullName} onChange={(e) => setForm({...form, fullName: e.target.value})} className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors" placeholder="Jane Doe" data-testid="input-fullname" />
            </div>
            <div className="space-y-2">
              <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Company Name</label>
              <input type="text" required value={form.companyName} onChange={(e) => setForm({...form, companyName: e.target.value})} className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors" placeholder="Acme Corp" data-testid="input-company" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Website URL</label>
            <input type="url" value={form.websiteUrl} onChange={(e) => setForm({...form, websiteUrl: e.target.value})} className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors" placeholder="https://..." data-testid="input-url" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Current Monthly Revenue</label>
              <select value={form.monthlyRevenue} onChange={(e) => setForm({...form, monthlyRevenue: e.target.value})} className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors appearance-none" data-testid="select-revenue">
                <option>Under $50K</option>
                <option>$50K–$250K</option>
                <option>$250K–$1M</option>
                <option>$1M+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Primary Goal</label>
              <select value={form.primaryGoal} onChange={(e) => setForm({...form, primaryGoal: e.target.value})} className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors appearance-none" data-testid="select-goal">
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
                  <input type="checkbox" checked={form.servicesInterested.includes(service)} onChange={() => handleCheckbox(service)} className="w-5 h-5 bg-[#0a0a08] border-[#252420] text-amber focus:ring-amber focus:ring-offset-0 rounded-sm" />
                  <span className="font-sans text-sm text-[#8A8478]">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Tell us about your business</label>
            <textarea value={form.businessDescription} onChange={(e) => setForm({...form, businessDescription: e.target.value})} className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors min-h-[120px] resize-none" placeholder="What are your current challenges?" data-testid="textarea-business"></textarea>
          </div>

          <div className="space-y-2">
            <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">How did you hear about us?</label>
            <input type="text" value={form.referralSource} onChange={(e) => setForm({...form, referralSource: e.target.value})} className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors" data-testid="input-referral" />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-amber hover:bg-amber-light text-[#0a0a08] font-sans font-bold py-5 rounded-sm transition-colors flex justify-center items-center gap-2 text-lg disabled:opacity-50" data-testid="button-submit-application">
            {loading ? "Submitting..." : "Submit Application"} {!loading && <ArrowRight className="w-5 h-5" />}
          </button>
          
          <p className="text-center font-sans text-xs text-[#8A8478] mt-6">
            We review every application personally. If there's a fit, we'll reach out to schedule a discovery call.
          </p>
        </form>
      </div>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}