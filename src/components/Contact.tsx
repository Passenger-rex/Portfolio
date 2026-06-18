import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { JellyText } from "./JellyText";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "config_error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      let data: any = {};
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        console.warn("Received non-JSON response from mail server:", text);
        data = { error: text || `Server responded with status code ${res.status}` };
      }
      
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const isConfigError = res.status === 500 && data.error && (
          data.error.toLowerCase().includes("configuration") || 
          data.error.toLowerCase().includes("missing") ||
          data.error.toLowerCase().includes("credentials") ||
          data.error.toLowerCase().includes("incomplete")
        );
        
        if (isConfigError) {
          setStatus("config_error");
          setErrorMessage(data.error);
        } else {
          setStatus("error");
          setErrorMessage(data.error || "Failed to send message. Please try again.");
        }
      }
    } catch (error: any) {
      console.error("Failed to send message:", error);
      setStatus("error");
      setErrorMessage(error?.message || "Could not connect to the mail server. Please try again later.");
    }
  };

  return (
    <section id="contact" className="pt-24 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 relative z-10 min-h-[90vh]">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-brand-1/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-1 cursor-default text-center lg:text-left"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1] flex flex-col items-center lg:items-start">
            <span className="flex flex-wrap justify-center lg:justify-start gap-1"><JellyText text="LET'S" /></span>
            <span className="text-brand-2 md:text-brand-1 flex flex-wrap justify-center lg:justify-start gap-1 mt-1 md:mt-2"><JellyText text="COLLABORATE." /></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto lg:mx-0">
            Ready to build something extraordinary? Drop me a message and let's discuss your next project.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="flex-1"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8 bg-secondary p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs md:text-sm font-mono tracking-widest text-gray-500 uppercase">Your Name</label>
              <input 
                type="text" 
                id="name"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="bg-transparent border-b border-white/20 pb-3 md:pb-4 text-lg md:text-2xl text-white focus:outline-none focus:border-brand-2 transition-colors placeholder:text-white/10"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs md:text-sm font-mono tracking-widest text-gray-500 uppercase">Your Email</label>
              <input 
                type="email" 
                id="email"
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="bg-transparent border-b border-white/20 pb-3 md:pb-4 text-lg md:text-2xl text-white focus:outline-none focus:border-brand-2 transition-colors placeholder:text-white/10"
                placeholder="jane@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs md:text-sm font-mono tracking-widest text-gray-500 uppercase">Your Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="bg-transparent border-b border-white/20 pb-3 md:pb-4 text-lg md:text-xl text-white focus:outline-none focus:border-brand-2 transition-colors placeholder:text-white/10 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="group self-start inline-flex items-center justify-center w-full md:w-auto gap-3 px-6 md:px-8 py-3 md:py-4 bg-brand-1 text-white rounded-full font-semibold hover:bg-brand-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2 md:mt-4 text-sm md:text-base"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" size={20} />
              ) : status === "success" ? (
                <>
                  Message Sent <CheckCircle2 size={20} />
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </>
              )}
            </button>
            {status === "error" && (
              <div className="mt-4 p-4 border border-red-500/20 bg-red-500/10 rounded-2xl flex flex-col gap-2">
                <p className="text-red-400 text-sm font-medium">{errorMessage || "Failed to send message. Please try again."}</p>
                <p className="text-xs text-gray-400 font-light">
                  If the issue persists, feel free to send an email directly to{" "}
                  <a href="mailto:johntobismart@gmail.com" className="text-brand-1 hover:underline font-mono">
                    johntobismart@gmail.com
                  </a>
                </p>
              </div>
            )}
            {status === "config_error" && (
              <div className="mt-4 p-4 border border-orange-500/20 bg-orange-500/10 rounded-2xl flex flex-col gap-2">
                <p className="text-orange-400 text-sm font-medium">{errorMessage || "Email server configuration is incomplete."}</p>
                <div className="text-xs text-gray-400 font-light space-y-1">
                  <p>Please make sure the following environment variables are correctly configured in your hosting dashboard (e.g. Netlify/Vercel/Cloud Run):</p>
                  <ul className="list-disc list-inside font-mono text-[11px] text-gray-300">
                    <li>SMTP_HOST</li>
                    <li>SMTP_PORT</li>
                    <li>SMTP_USER</li>
                    <li>SMTP_PASS</li>
                  </ul>
                  <p className="mt-2 text-xs">
                    Or reach out directly at{" "}
                    <a href="mailto:johntobismart@gmail.com" className="text-brand-1 hover:underline font-mono">
                      johntobismart@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            )}

          </form>
        </motion.div>
      </div>
    </section>
  );
}
