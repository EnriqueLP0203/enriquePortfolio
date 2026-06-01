import { useState } from "react";
import { cardShadow, inputField, pillButton } from "../lib/styles";

export default function ContactSection({ style }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-32 px-4 py-16"
      style={style}
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="mb-10 text-center text-2xl font-bold md:text-3xl"
      >
        Contact
      </h2>

      <form
        onSubmit={handleSubmit}
        className={`mx-auto max-w-xl space-y-5 rounded-2xl bg-sky-500/20 p-8 ${cardShadow}`}
        noValidate
      >
        <div>
          <label htmlFor="contact-name" className="mb-2 block font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputField}
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputField}
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={`${inputField} resize-y min-h-[120px]`}
            placeholder="Cuéntame sobre tu proyecto..."
          />
        </div>

        <button type="submit" className={`${pillButton} w-full sm:w-auto`}>
          Enviar mensaje
        </button>

        {submitted && (
          <p role="status" className="text-center text-sm font-medium text-sky-800">
            Mensaje listo para enviar. Conecta este formulario a tu backend o
            servicio de email.
          </p>
        )}
      </form>
    </section>
  );
}
