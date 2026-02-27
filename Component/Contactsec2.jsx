'use client';
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [color, setColor] = useState("text-white");

  const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-400", "text-purple-500"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Flashing color effect for status message
  useEffect(() => {
    if (!status) return;
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 300);
    return () => clearInterval(interval);
  }, [status]);

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
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setSending(false);
      setTimeout(() => setStatus(""), 5000);
    })
    .catch(() => {
      setStatus("❌ Failed to send message. Try again.");
      setSending(false);
      setTimeout(() => setStatus(""), 5000);
    });
  };

  return (

    <div className="flex bg-black">

       <form
      onSubmit={sendEmail}
      className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-black rounded-lg shadow-md border border-gray-800 lg:w-[400px] mb-2"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="p-3 bg-gray-900 text-white rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="p-3 bg-gray-900 text-white rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="p-3 bg-gray-900 text-white rounded"
        rows={5}
        required
      />

      <button
        type="submit"
        className={`p-3 text-white rounded transition ${
          sending ? "bg-gray-700 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-300"
        }`}
        disabled={sending}
      >
        {sending ? "Sending..." : "Send Message"}
      </button>

      {status && <p className={`mt-2 text-center font-semibold ${color}`}>{status}</p>}
    </form>

    </div>
   
  );
};

export default ContactForm;
