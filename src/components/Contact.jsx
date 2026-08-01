"use client";

import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
  FiCheckCircle,
  FiSend,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";

const contactItems = [
  {
    icon: FiMapPin,
    title: "Visit Our Facility",
    text: "Defence Road, Akbarabad, Sialkot",
    label: "Manufacturing Location",
  },
  {
    icon: FiPhone,
    title: "Call Us",
    text: "+92 312 7370957",
    label: "Direct Assistance",
    href: "tel:+923127370957",
  },
  {
    icon: FiMail,
    title: "Email Us",
    text: "assarpatches@gmail.com",
    label: "Business Inquiries",
    href: "mailto:assarpatches@gmail.com",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    text: "+92 312 7370957",
    label: "Quick Response",
    href: "https://wa.me/923127370957",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("");

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-cream py-20 text-[#1C1A17] sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-10 h-[520px] w-[520px] rounded-full bg-[#B88A3B]/[0.055] blur-[120px]" />

        <div className="absolute -right-52 bottom-0 h-[520px] w-[520px] rounded-full bg-[#D4AA6A]/[0.06] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#B88A3B 1px, transparent 1px)",
            backgroundSize: "29px 29px",
          }}
        />

        <span className="absolute -right-5 top-3 hidden select-none font-serif text-[150px] font-bold leading-none text-[#B88A3B]/[0.025] xl:block">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        {/* =====================================================
            TOP HEADING
        ===================================================== */}

        <div className="grid gap-8 border-b border-[#DED5C8] pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Reveal direction="top" distance={30} duration={700}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B88A3B]/20 bg-[#FFF9F0] px-4 py-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B88A3B] opacity-40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B88A3B]" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A77A30] sm:text-xs">
                  Get In Touch
                </span>
              </div>
            </Reveal>

            <Reveal direction="left" distance={55} duration={850} delay={80}>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-[#191816] sm:text-5xl lg:text-[58px]">
                Let's Create
                <br />
                Something <span className="text-[#B88A3B]">Exceptional.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal direction="right" distance={55} duration={850} delay={140}>
            <div className="max-w-xl lg:ml-auto">
              <p className="text-[15px] leading-7 text-[#716B64] sm:text-base">
                Tell us about your custom patch requirements and our team will
                help you with design, sampling, manufacturing and bulk
                production.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                <TrustItem text="Fast Response" />
                <TrustItem text="Custom Manufacturing" />
                <TrustItem text="Global Supply" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div>
            {/* Contact cards */}

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item, index) => (
                <Reveal
                  key={item.title}
                  direction={index % 2 === 0 ? "left" : "top"}
                  distance={45}
                  duration={800}
                  delay={index * 90}
                >
                  <InfoCard {...item} index={index} />
                </Reveal>
              ))}
            </div>

            {/* =================================================
                MAP
            ================================================= */}

            <Reveal direction="bottom" distance={60} duration={900} delay={250}>
              <div className="group relative mt-6">
                {/* Decorative border */}
                <div className="absolute -bottom-2 -right-2 h-full w-full rounded-[26px] border border-[#B88A3B]/20" />

                <div className="relative overflow-hidden rounded-[26px] border border-[#DED5C8] bg-white shadow-[0_18px_50px_rgba(50,35,15,0.08)]">
                  {/* Map top bar */}

                  <div className="flex items-center justify-between border-b border-[#EEE7DC] bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF4E3] text-[#B88A3B]">
                        <FiMapPin size={17} />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[#24211E]">
                          Assar Patches
                        </p>

                        <p className="mt-0.5 text-[9px] uppercase tracking-[0.15em] text-[#918A82]">
                          Sialkot, Pakistan
                        </p>
                      </div>
                    </div>

                    <span className="hidden rounded-full border border-[#B88A3B]/20 bg-[#FFF9F0] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#B88A3B] sm:block">
                      Manufacturing Facility
                    </span>
                  </div>

                  {/* Map */}

                  <div className="relative h-[280px] overflow-hidden">
                    <iframe
                      title="Assar Patches Location"
                      src="https://www.google.com/maps?q=Defence+Road,+Akbarabad,+Sialkot,+Pakistan&z=14&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full"
                    />

                    {/* bottom gradient */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* =================================================
              RIGHT FORM
          ================================================= */}

          <Reveal direction="right" distance={70} duration={950} delay={100}>
            <div className="relative overflow-hidden rounded-[30px] border border-[#DED5C8] bg-white shadow-[0_25px_70px_rgba(60,42,18,0.10)]">
              {/* Gold top line */}

              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#8F6828] via-[#D4AA6A] to-[#8F6828]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#B88A3B]/[0.06] blur-3xl" />

              {/* Dots */}

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage:
                    "radial-gradient(#B88A3B 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                {/* Form header */}

                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B88A3B]">
                      Start Your Project
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-bold text-[#1D1B18] sm:text-[34px]">
                      Request a Quote
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-[#817A72]">
                      Share your requirements and our team will get back to you
                      with the next steps.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4E3] text-[#B88A3B] sm:flex">
                    <FiSend size={20} />
                  </div>
                </div>

                {/* Divider */}

                <div className="my-7 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#EEE7DC]" />

                  <span className="h-1.5 w-1.5 rotate-45 bg-[#B88A3B]" />

                  <div className="h-px w-12 bg-[#B88A3B]/40" />
                </div>

                {/* FORM */}

                <form onSubmit={onSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      name="name"
                      label="First Name"
                      placeholder="Your name"
                      required
                    />

                    <Field
                      name="phone"
                      label="Phone Number"
                      type="tel"
                      placeholder="+92"
                    />
                  </div>

                  <div className="mt-5">
                    <Field
                      name="email"
                      label="Email Address"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  {/* Message */}

                  <div className="mt-5">
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#625D57]">
                      Tell Us About Your Project
                      <span className="ml-1 text-[#B88A3B]">*</span>
                    </label>

                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder="Patch type, quantity, size, design requirements..."
                      className="w-full resize-none rounded-2xl border border-[#DDD5CA] bg-[#FCFBF8] px-4 py-3.5 text-sm text-[#24211E] outline-none transition-all duration-300 placeholder:text-[#AAA39B] hover:border-[#B88A3B]/40 focus:border-[#B88A3B] focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,138,59,0.07)]"
                    />
                  </div>

                  {/* Bottom info */}

                  <div className="mt-4 flex items-center gap-2 text-[10px] text-[#918A82]">
                    <FiCheckCircle className="shrink-0 text-[#B88A3B]" />
                    Your project information is kept private and confidential.
                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group mt-7 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#B88A3B] px-8 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(184,138,59,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A77A30] hover:shadow-[0_18px_38px_rgba(184,138,59,0.32)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <FiArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </>
                    )}
                  </button>

                  {/* STATUS */}

                  {status === "success" && (
                    <div className="mt-5 flex items-start gap-3 rounded-2xl border border-green-600/15 bg-green-500/[0.07] px-4 py-3.5">
                      <FiCheckCircle className="mt-0.5 shrink-0 text-green-700" />

                      <p className="text-sm leading-6 text-green-700">
                        Thank you! Your message has been sent. We'll be in touch
                        soon.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mt-5 rounded-2xl border border-red-500/15 bg-red-500/[0.06] px-4 py-3.5">
                      <p className="text-sm leading-6 text-red-600">
                        Something went wrong. Please try again or email us
                        directly.
                      </p>
                    </div>
                  )}
                </form>

                {/* Form footer */}

                <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[#EEE7DC] pt-6">
                  <MiniTrust text="Fast Response" />
                  <MiniTrust text="B2B Support" />
                  <MiniTrust text="Worldwide Supply" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({ name, label, type = "text", required, placeholder = "" }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#625D57]">
        {label}

        {required && <span className="ml-1 text-[#B88A3B]">*</span>}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#DDD5CA] bg-[#FCFBF8] px-4 py-3.5 text-sm text-[#24211E] outline-none transition-all duration-300 placeholder:text-[#AAA39B] hover:border-[#B88A3B]/40 focus:border-[#B88A3B] focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,138,59,0.07)]"
      />
    </div>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({ icon: Icon, title, text, label, href, index }) {
  const content = (
    <div className="relative z-10">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF4E3] text-[#B88A3B] transition-all duration-400 group-hover:scale-110 group-hover:bg-[#B88A3B] group-hover:text-white">
          <Icon size={19} />
        </div>

        <span className="font-serif text-[11px] font-bold text-[#B88A3B]/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#A09991]">
        {label}
      </p>

      <h3 className="mt-1.5 text-sm font-bold text-[#24211E]">{title}</h3>

      <p className="mt-1 break-words text-[12px] leading-5 text-[#777069]">
        {text}
      </p>

      {href && (
        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#B88A3B]">
          Connect
          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      )}
    </div>
  );

  const classes =
    "group relative h-full overflow-hidden rounded-[22px] border border-[#DED8CF] bg-white p-5 shadow-[0_8px_25px_rgba(60,42,18,0.035)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#B88A3B]/35 hover:shadow-[0_18px_40px_rgba(60,42,18,0.08)]";

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${classes} block cursor-pointer`}
      >
        <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#B88A3B] transition-all duration-500 group-hover:w-full" />

        <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-[#B88A3B]/0 blur-3xl transition-all duration-500 group-hover:bg-[#B88A3B]/10" />

        {content}
      </a>
    );
  }

  return (
    <div className={classes}>
      <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#B88A3B] transition-all duration-500 group-hover:w-full" />

      <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-[#B88A3B]/0 blur-3xl transition-all duration-500 group-hover:bg-[#B88A3B]/10" />

      {content}
    </div>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({ text }) {
  return (
    <div className="flex items-center gap-2">
      <FiCheckCircle className="text-[#B88A3B]" size={14} />

      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#756E67]">
        {text}
      </span>
    </div>
  );
}

/* =========================================================
   MINI TRUST
========================================================= */

function MiniTrust({ text }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-1 w-1 rounded-full bg-[#B88A3B]" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#8A837B]">
        {text}
      </span>
    </div>
  );
}
