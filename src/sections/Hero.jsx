import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";
import GlitchText from "../components/GlitchText";
import useIsMobile from "../hooks/useIsMobile";

export default function Hero() {
  const rotatingWords = [
    "Desenvolvimento Web",
    "Automação",
    "Mentoria",
    "IA para Inovação",
  ];

  const isMobile = useIsMobile();          // ✅ hook dentro do componente
  const [index, setIndex] = useState(0);

  /* troca as palavras - intervalo maior no mobile */
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % rotatingWords.length),
      isMobile ? 4000 : 2400
    );
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-24 overflow-hidden bg-transparent"
    >
      <div className="container relative z-10 px-6 mx-auto md:px-12">
        <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
          {/* ---------- TEXTO ---------- */}
          <motion.div
            className="space-y-8 text-center md:w-1/2 md:text-left"
            initial={isMobile ? undefined : { opacity: 0, y: 40 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h1 className="space-y-3 font-serif text-4xl font-bold leading-tight md:text-6xl">
              <motion.span
                initial={
                  isMobile ? undefined : { backgroundPosition: "0% 50%" }
                }
                animate={
                  isMobile ? undefined : { backgroundPosition: "100% 50%" }
                }
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="block text-transparent bg-clip-text bg-[length:300%_300%] bg-gradient-to-r from-yellow-300 via-amber-400 to-white drop-shadow-md"
              >
                Olá, eu trabalho com
              </motion.span>

              <GlitchText
                speed={isMobile ? 0.8 : 1.2}
                enableShadows={!isMobile}
                enableOnHover={!isMobile}
                className="text-3xl font-extrabold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500"
              >
                {rotatingWords[index]}
              </GlitchText>
            </motion.h1>

            <p className="max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Desenvolvo sites modernos, automatizo processos de negócios para maximizar a eficiência e acompanho campanhas de marketing digital.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Link
                to="projects"
                smooth
                duration={600}
                className="px-8 py-3 font-semibold text-black transition rounded-lg shadow-md cursor-pointer btn-glow bg-gradient-to-r from-yellow-400 to-amber-500 hover:scale-105"
              >
                Ver Projetos
              </Link>
              <Link
                to="contact"
                smooth
                duration={600}
                className="px-8 py-3 font-medium text-white transition border border-yellow-500 rounded-lg shadow-md cursor-pointer hover:scale-105"
              >
                Contato
              </Link>
            </div>
          </motion.div>

          {/* ---------- CARD / TILT ---------- */}
          <motion.div
            className="flex justify-center md:w-1/2"
            initial={isMobile ? undefined : { opacity: 0, y: 40 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {isMobile ? (
              /* Versão estática no mobile */
              <div className="relative overflow-hidden border shadow-xl w-72 rounded-2xl border-yellow-500/10">
                <img
                  src="/images/FrontEndDeveloper.jpg"
                  alt="Bernardo"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ) : (
              /* Versão com Tilt no desktop */
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable
                glareMaxOpacity={0.15}
                scale={1.04}
                transitionSpeed={1000}
                className="relative overflow-hidden border shadow-2xl w-80 md:w-96 rounded-2xl glass border-yellow-500/10"
              >
                <div className="absolute inset-0">
                  <img
                    src="images/FrontEndDeveloper.jpg"
                    alt="Bernardo"
                    className="object-cover w-full h-full scale-110 blur-sm opacity-80"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 z-0 bg-black/50" />
                <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 space-y-5 text-center">
                  <i className="text-4xl text-yellow-400 fas fa-gem" />
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Soluções de Alto Nível
                  </h3>
                  <p className="text-sm text-gray-200">
                    Sites personalizados &amp; automações inteligentes.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm text-yellow-200">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-laptop-code" />
                      <span>Front-end</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-magic" />
                      <span>Automação</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-link" />
                      <span>Integrações</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-bolt" />
                      <span>n8n &amp; Make</span>
                    </div>
                  </div>
                </div>
              </Tilt>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
