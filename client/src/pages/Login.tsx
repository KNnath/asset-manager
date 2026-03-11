import { Link, useLocation } from "wouter";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { api } from "@/lib/api";

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setLoading(true);
    setError("");
    
    try {
      await api.login(email, password);
      setLocation("/portal");
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-noise px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <span className="font-heading font-bold text-2xl tracking-tight text-[#F5F0E8]">
              WhiskeyNeat<span className="text-amber">.ai</span>
            </span>
          </Link>
          <h1 className="font-heading text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="font-sans text-[#8A8478]">Access your marketing intelligence dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="bg-[#111110] border border-[#252420] p-8 space-y-6">
          {error && (
            <div className="bg-red-900/20 border border-red-800/50 text-red-300 text-sm p-4 rounded-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors" 
              placeholder="client@apexindustrial.com" 
              data-testid="input-email"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-sans text-sm font-bold text-[#F5F0E8] uppercase tracking-wider">Password</label>
              <a href="#" className="font-sans text-xs text-[#8A8478] hover:text-amber transition-colors">Forgot?</a>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0a0a08] border border-[#252420] p-4 text-[#F5F0E8] focus:border-amber focus:outline-none transition-colors" 
              placeholder="••••••••" 
              data-testid="input-password"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading || !email || !password}
            className="w-full bg-amber hover:bg-amber-light text-[#0a0a08] font-sans font-bold py-4 rounded-sm transition-colors flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-signin"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
            {!loading && <ArrowRight className="w-5 h-5" />}
          </button>
          
          <p className="text-center text-xs text-[#8A8478] mt-2">
            Demo: client@apexindustrial.com / demo123
          </p>
        </form>

        <div className="mt-8 text-center">
          <p className="font-sans text-sm text-[#8A8478]">
            Not a client yet? <Link href="/apply" className="text-amber hover:underline">Apply to work with us &rarr;</Link>
          </p>
        </div>
      </div>
    </div>
  );
}