"use client";
import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        e.target.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-ink py-20 text-cream">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Get in Touch</p>
          <h2 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">Request a Quote</h2>
          <p className="mt-3 text-cream/60">
            Tell us what you need — we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* FORM */}
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="First Name *" required />
              <Field name="phone" label="Phone Number" type="tel" />
            </div>
            <Field name="email" label="Email Address *" type="email" required />
            <div>
              <label className="mb-1.5 block text-sm text-cream/70">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-cream outline-none transition placeholder:text-cream/30 focus:border-gold"
                placeholder="What would you like to get made?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-dark disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Submit Request"}
            </button>

            {status === "success" && (
              <p className="rounded-lg bg-green-500/15 px-4 py-3 text-sm text-green-300">
                ✓ Thank you! Your message has been sent. We'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-lg bg-red-500/15 px-4 py-3 text-sm text-red-300">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>

          {/* INFO + MAP */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={FiMapPin} title="Address" text="TODO_ADDRESS" />
              <InfoCard icon={FiPhone} title="Phone" text="+92 312 7370957" href="tel:+923127370957" />
              <InfoCard icon={FiMail} title="Email" text="assarpatches@gmail.com" href="mailto:assarpatches@gmail.com" />
              <InfoCard icon={FaWhatsapp} title="WhatsApp" text="+92 312 7370957" href="https://wa.me/923127370957" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink">
              <iframe
                title="Assar Patches Location"
                src="https://www.google.com/maps?q=Sialkot,Pakistan&z=12&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) contrast(85%)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-cream/70">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-cream outline-none transition placeholder:text-cream/30 focus:border-gold"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, text, href }) {
  const content = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
        <Icon size={18} />
      </div>
      <p className="mt-3 text-sm font-semibold text-cream">{title}</p>
      <p className="mt-0.5 text-sm text-cream/60">{text}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-gold/40 hover:bg-white/10"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      {content}
    </div>
  );
}