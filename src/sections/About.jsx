import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/variants";
import { FaPaperPlane } from "react-icons/fa";
import useIsMobile from "../hooks/useIsMobile";

export default function About() {
  const isMobile = useIsMobile();  // ✅ detecta se é mobile

  return (
    <motion.section
      id="about"
      className="relative px-6 py-32 overflow-hidden text-white md:px-12 bg-gradient-to-b from-black via-gray-950/70 to-black"
      initial={isMobile ? undefined : { opacity: 0, y: 40 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container flex flex-col items-center gap-12 mx-auto max-w-7xl md:flex-row">
        {/* ---------- IMAGEM ---------- */}
        <motion.div
          className="flex justify-center w-full md:w-5/12"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {isMobile ? (
            /* Versão estática em mobile */
            <div className="relative w-full max-w-xs mx-auto overflow-hidden border-2 shadow-lg rounded-3xl border-yellow-500/10">
              <img
  src={`${import.meta.env.BASE_URL}images/bernardo-foto.jpg`}
  alt="Foto de Bernardo"
  className="object-cover w-full h-auto rounded-2xl"
  loading="lazy"
/>
            </div>
          ) : (
            /* Tilt no desktop */
<Tilt
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  glareEnable
  glareMaxOpacity={0.12}
  scale={1.03}
  transitionSpeed={1200}
  className="relative w-full max-w-xs mx-auto"
>
  <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 opacity-30 blur-lg animate-pulse" />
  <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-yellow-500/10 glass p-[3px]">
    <img
      src={`${import.meta.env.BASE_URL}images/bernardo-foto.jpg`}
      alt="Foto de Bernardo"
      className="object-cover w-full h-auto rounded-2xl"
      loading="lazy"
    />
  </div>
</Tilt>

          )}
        </motion.div>

        {/* ---------- TEXTO ---------- */}
        <motion.div
          className="w-full space-y-6 text-center md:w-7/12 md:text-left"
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="relative inline-block text-4xl md:text-5xl font-serif font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-white animate-[bg-shift_6s_linear_infinite]">
            Prazer, sou o Bernardo 👋
          </h2>

          <p className="max-w-xl mx-auto text-lg leading-relaxed text-gray-300 md:mx-0">
          Não entrego sites genéricos — crio projetos digitais moldados exatamente para o seu mercado. Cada linha de código nasce do seu negócio, do seu nicho e da estratégia certa para escalar.
          </p>

          <p className="text-gray-400 text-md">
            Experiência com React, Tailwind, Make, n8n, Git, integrações com IA
            e APIs. Conectando tecnologia com resultados reais.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 py-3 font-semibold text-black transition-transform duration-300 rounded-lg btn-glow px-7 bg-gradient-to-r from-yellow-400 to-amber-500 hover:scale-105"
            >
              <FaPaperPlane className="text-lg text-black" />
              Fale comigo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animação do gradiente no título */}
      <style global jsx>{`
        @keyframes bg-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.section>
  );
}
