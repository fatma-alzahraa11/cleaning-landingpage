import { useState } from "react";
import { User, Phone, Inbox, Mail, CheckCircle2, MessageSquare, Building2 } from "lucide-react";
import emailjs from "emailjs-com";  
import PrivacyModal from "./privacy-modal.jsx";

const initialForm = { name: "", telefon: "", adresse: "", email: "", dienstleistung: "", dienstleistungText: "", nachricht: "" };
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// تعريف الخدمات الثلاث
const services = [
  { value: "", label: "Wählen Sie die Dienstleistungen", germanText: "" },
  { value: "Professionelle Reinigungsdienste", label: "Professionelle Reinigungsdienste", germanText: "Professionelle Reinigungsdienste" },
  { value: "Schnelle und sichere Umzugsdienste", label: "Schnelle und sichere Umzugsdienste", germanText: "Schnelle und sichere Umzugsdienste" },
  { value: "Bau- und Sanierungsdienste (Baustelle)", label: "Bau- und Sanierungsdienste (Baustelle)", germanText: "Bau- und Sanierungsdienste (Baustelle)" }
];

const phoneFormat = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 15);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

function Progress({ count, total }) {
  const pct = Math.round((count / total) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full bg-blue-600 rounded-full transition-[width] duration-300" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-slate-600">{pct}%</span>
    </div>
  );
}

function FieldShell({ icon, children, completed }) {
  return (
    <div
      className={`group relative rounded-2xl border bg-white p-4 shadow-sm transition-all ${
        completed ? "border-blue-300 ring-2 ring-blue-100" : "border-slate-200 hover:border-blue-200"
      }`}
    >
      <div className="absolute -inset-0 rounded-2xl -z-10 bg-gradient-to-r from-blue-100/0 to-blue-100/0 group-hover:from-blue-100/40 group-hover:to-transparent transition"></div>
      <div className="flex items-center gap-3">
        <div
          className={`size-10 rounded-xl grid place-items-center ${completed ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"}`}
        >
          {icon}
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

function FloatingInput({ id, label, type = "text", value, onChange, placeholder = " ", autoComplete }) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="peer w-full bg-transparent outline-none py-4"
        aria-label={label}
        name={id}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 -top-2.5 text-xs text-blue-700 transition-all
                   peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown:text-sm
                   peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-blue-700"
      >
        {label}
      </label>
    </div>
  );
}


function FloatingSelect({ id, label, value, onChange, options }) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="peer w-full bg-transparent outline-none appearance-none pr-14 sm:pr-12 py-4"
        aria-label={label}
        name={id}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 -top-2.5 text-xs text-blue-700 transition-all
                   peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown:text-sm
                   peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-blue-700"
      >
        {label}
      </label>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

function FloatingTextarea({ id, label, value, onChange, placeholder = " ", rows = 4 }) {
  return (
    <div className="relative">
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="peer w-full bg-transparent outline-none resize-none py-4"
        aria-label={label}
        name={id}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 -top-2.5 text-xs text-blue-700 transition-all
                   peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown:text-sm
                   peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-blue-700"
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactForm({ refObj }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const completedCount = Object.values(form).filter(Boolean).length;

  const onChange = (key) => (e) => {
    const val = e.target.value;
    setForm((f) => ({
      ...f,
      [key]: key === "telefon" ? phoneFormat(val) : val,
      ...(key === "dienstleistung" && {
        dienstleistungText: services.find(s => s.value === val)?.germanText || ""
      })
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // تحقق من البيانات المدخلة
    if (!form.name || !form.telefon || !form.adresse || !emailRegex.test(form.email) || !form.dienstleistung) {
      alert("Bitte füllen Sie alle erforderlichen Felder mit gültigen Informationen aus.");
      return;
    }

    // عرض Privacy Modal بدلاً من الإرسال المباشر
    setShowPrivacyModal(true);
  };

  const handlePrivacyAccept = () => {
    setSubmitted(true);

    // إرسال البيانات عبر EmailJS
    emailjs
      .sendForm(
        "service_gy5yrf2",      // Service ID من لوحة تحكم EmailJS
        "template_6ujj76g",     // Template ID الذي أنشأته
        document.getElementById("contact-form"), // استخدام الفورم
        "DjDJRQ-xShSAUg5cJ"       // Public Key من EmailJS
      )
      .then(
        (result) => {
          console.log("Message Sent!", result.text);
          setSubmitted(true);
          setTimeout(() => {
            setForm(initialForm);
            setSubmitted(false);
            alert("Vielen Dank! Wir melden uns in Kürze bei Ihnen.");
          }, 800);
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut.");
          setSubmitted(false);
        }
      );
  };

  return (
    <section id="contact" ref={refObj} className="py-16 sm:py-24 bg-gradient-to-b from-blue-50/60 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-5 transition-all duration-700 will-change-transform" data-animate>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-oswald text-[#2B3A64]">Lassen Sie uns Ihnen ein schnelles Angebot machen</h2>
            <p className="text-slate-600 font-oswald">
              Erzählen Sie uns ein wenig über Ihren Namen und Ihre Bedürfnisse. Wir melden uns mit einem maßgeschneiderten Plan und fairen Preisen bei Ihnen.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-blue-600" />
                <span className="text-slate-700 text-sm font-oswald">Kein Spam - nur eine hilfreiche Nachverfolgung</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-blue-600" />
                <span className="text-slate-700 text-sm font-oswald">Transparente, vorab festgelegte Preise</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-blue-600" />
                <span className="text-slate-700 text-sm font-oswald">Terminplanung innerhalb von 24-48 Stunden</span>
              </li>
            </ul>
          </div>

          <div
            className="lg:col-span-3 transition-all duration-700 will-change-transform"
            data-animate
            style={{ transitionDelay: "80ms" }}
          >
            <form
              id="contact-form"
              onSubmit={onSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg space-y-6 relative overflow-hidden"
            >
              <div className="absolute -top-32 -right-24 size-[340px] rounded-full bg-blue-100 blur-3xl opacity-80 pointer-events-none"></div>

              <div className="flex items-center justify-between gap-6">
                <span className="text-sm text-slate-600 font-oswald">Fortschritt</span>
                <Progress count={completedCount} total={6} />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FieldShell icon={<User className="size-5" />} completed={!!form.name}>
                  <FloatingInput
                    id="name"
                    label="Ihr Name"
                    value={form.name}
                    onChange={onChange("name")}
                    autoComplete="name"
                    name="name"
                  />
                </FieldShell>

                <FieldShell icon={<Phone className="size-5" />} completed={!!form.telefon && form.telefon.length >= 14}>
                  <FloatingInput
                    id="telefon"
                    label="Telefonnummer"
                    value={form.telefon}
                    onChange={onChange("telefon")}
                    autoComplete="tel"
                    placeholder=" "
                    type="tel"
                    name="telefon"
                  />
                </FieldShell>

                <FieldShell icon={<Inbox className="size-5" />} completed={!!form.adresse}>
                  <FloatingInput
                    id="adresse"
                    label="Adresse"
                    value={form.adresse}
                    onChange={onChange("adresse")}
                    autoComplete="street-address"
                    name="adresse"
                  />
                </FieldShell>

                <FieldShell icon={<Mail className="size-5" />} completed={!!form.email && emailRegex.test(form.email)}>
                  <FloatingInput
                    id="email"
                    type="email"
                    label="E-Mail"
                    value={form.email}
                    onChange={onChange("email")}
                    autoComplete="email"
                    name="email"
                  />
                </FieldShell>
              </div>

              <FieldShell icon={<Building2 className="size-5" />} completed={!!form.dienstleistung}>
                <FloatingSelect
                  id="dienstleistung"
                  label="Benötigte Dienstleistung"
                  value={form.dienstleistung}
                  onChange={onChange("dienstleistung")}
                  options={services}
                />
                {/* حقل مخفي يحتوي على النص الألماني للخدمة */}
                <input 
                  type="hidden" 
                  name="dienstleistungText" 
                  value={form.dienstleistungText} 
                />
              </FieldShell>

              <FieldShell icon={<MessageSquare className="size-5" />} completed={!!form.nachricht}>
                <FloatingTextarea
                  id="nachricht"
                  label="Zusätzliche Nachricht (Optional)"
                  value={form.nachricht}
                  onChange={onChange("nachricht")}
                  rows={6}
                />
              </FieldShell>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:bg-blue-700 active:bg-blue-800 transition-all disabled:opacity-60 font-oswald"
                >
                  {submitted ? "Wird gesendet..." : "Angebot anfordern"}
                </button>
                <span className="text-xs text-slate-500 font-oswald">
                  Durch das Senden stimmen Sie unseren Bedingungen zu.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Privacy Modal */}
      <PrivacyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        onAccept={handlePrivacyAccept}
      />
    </section>
  );
}
