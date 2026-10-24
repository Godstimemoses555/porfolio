"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";
import SetIcons from "./SetIcons";

const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "inyanggodstime63@gmail.com",
    href: "mailto:inyanggodstime63@gmail.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "07041126796",
    href: "tel:07041126796",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const sendEmail = (event) => {
    event.preventDefault();
    setSending(true);
    setStatus(null);

    const templateParams = {
      ...formData,
      from_name: formData.name,
      reply_to: formData.email,
      to_email: "inyanggodstime63@gmail.com",
    };

    emailjs
      .send(
        "service_rdt16xf",
        "template_0sx8ecl",
        templateParams,
        "0OLUaroa-kjXpjpNA"
      )
      .then(() => {
        setStatus({
          type: "success",
          text: "Message sent. I'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error?.text || error);
        setStatus({
          type: "error",
          text: "The message could not be sent. Please email me directly at inyanggodstime63@gmail.com.",
        });
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="relative overflow-hidden pb-20 sm:pb-28">
      <div className="shell">
        <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <Reveal>
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <span className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                Contact details
              </span>

              <h2 className="mt-5 font-display text-2xl leading-tight text-ivory sm:text-3xl">
                Let&apos;s talk about your project.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-mist">
                Share a little about what you are building, and I will reply
                with the right questions and next steps.
              </p>

              <div className="mt-7 space-y-2.5">
                {contactInfo.map((item) => {
                  const Icon = item.Icon;
                  const inner = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                        <Icon size={17} />
                      </span>
                      <span className="min-w-0 text-left">
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-mist/60">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block break-all text-sm text-ivory/85">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  const className =
                    "flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3 transition-colors";

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`${className} hover:border-gold-400/30 hover:bg-white/[0.045]`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label} className={className}>
                      {inner}
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-mist/60">
                  Find me online
                </p>
                <SetIcons className="mt-3" />
              </div>
            </div>

            <div className="glass mt-4 flex items-start gap-3 rounded-2xl p-5">
              <Sparkles size={16} className="mt-0.5 shrink-0 text-gold-300" />
              <p className="text-xs leading-relaxed text-mist">
                Available for freelance projects, collaborations and
                full-stack builds. Based in Lagos, working remotely.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={sendEmail}
              className="glass-strong rounded-3xl p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl text-ivory">
                    Send a message
                  </h2>
                  <p className="mt-1.5 text-sm text-mist">
                    I&apos;ll get back to you as soon as I can.
                  </p>
                </div>
                <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 text-[10px] text-emerald-300 sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available
                </span>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-ivory/70"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-input w-full rounded-xl px-4 py-3.5 text-sm text-ivory placeholder:text-mist/40"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-ivory/70"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-input w-full rounded-xl px-4 py-3.5 text-sm text-ivory placeholder:text-mist/40"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-ivory/70"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me what you're building, the timeline and what success looks like..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="glass-input w-full resize-none rounded-xl px-4 py-3.5 text-sm text-ivory placeholder:text-mist/40"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gold-400 px-5 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {sending ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </button>

              <div aria-live="polite" className="min-h-6">
                {status && (
                  <div
                    className={`mt-4 flex items-start gap-2.5 rounded-xl border p-3 text-xs leading-relaxed ${
                      status.type === "success"
                        ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-200"
                        : "border-rose-400/20 bg-rose-400/[0.06] text-rose-200"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle size={15} className="mt-0.5 shrink-0" />
                    )}
                    {status.text}
                  </div>
                )}
              </div>

              <p className="mt-3 text-center text-[10px] text-mist/50">
                Your details are only used to reply to this message.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
