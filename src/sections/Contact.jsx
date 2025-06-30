import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_f2xwa6l', // seu Service ID
      'template_kfaywac', // seu Template ID
      form.current,
      'FqXq_MiHNKAy6WRGW' // sua Public Key
    ).then(
      (result) => {
        console.log("Email enviado com sucesso!", result.text);
        setSuccess(true);
        form.current.reset();
      },
      (error) => {
        console.error("Erro ao enviar o email:", error.text);
        setSuccess(false);
      }
    );
  };


  return (
    <motion.section
      id="contact"
      className="py-24 px-6 md:px-12 text-white bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-white/5 to-black opacity-10" />
      <div className="container mx-auto max-w-4xl text-center space-y-10 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Entre em Contato
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Vamos conversar sobre seu projeto. Respondo rápido no WhatsApp ou pelo formulário abaixo.
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-900/50 backdrop-blur-lg border border-amber-400/20 p-8 rounded-xl grid gap-6 text-left shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-sm">
              Nome
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-black/30 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-sm">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-black/30 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-sm">
              Mensagem
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded bg-black/30 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Descreva sua ideia ou projeto"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-glow bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Enviar Mensagem
          </button>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 mx-auto bg-black/40 border border-amber-400/30 backdrop-blur-md px-6 py-4 rounded-lg shadow-lg max-w-md flex items-center gap-4 text-left"
            >
              <div className="text-2xl text-emerald-400">
                <i className="fas fa-check-circle" />
              </div>
              <div className="text-sm text-yellow-200 leading-snug">
                <strong className="block font-semibold text-amber-400 mb-1">Mensagem enviada!</strong>
                Sua mensagem foi enviada com sucesso. Em breve entrarei em contato com você.
              </div>
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}
