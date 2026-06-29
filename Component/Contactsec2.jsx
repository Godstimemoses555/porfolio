'use client';
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      "service_rdt16xf",
      "template_0sx8ecl",
      formData,
      "0OLUaroa-kjXpjpNA"
    )
    .then(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setSending(false);
      setTimeout(() => setStatus(""), 5000);
    })
    .catch(() => {
      setStatus("Failed to send message. Try again.");
      setSending(false);
      setTimeout(() => setStatus(""), 5000);
    });
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "contact@mostech.dev" },
    { icon: <Phone size={20} />, label: "Phone", value: "+234 800 000 0000" },
    { icon: <MapPin size={20} />, label: "Location", value: "Lagos, Nigeria" },
  ];

  return (
    <section className="w-full bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Fill out the form
            below and I'll get back to you as soon as possible.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-yellow-500/50 transition-colors"
                >
                  <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <p className="text-gray-400 text-sm mb-4">Follow me on</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-5 p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl"
          >
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-zinc-900 text-white rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                required
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-zinc-900 text-white rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                required
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-zinc-900 text-white rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition resize-none"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="flex items-center justify-center gap-2 w-full p-4 text-black font-semibold rounded-xl transition bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              {sending ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status && (
              <p className="text-center text-sm font-medium text-yellow-500">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
