import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import useIsMobile from "../hooks/useIsMobile";

const projects = [
  {
    title: "VEO3 Lucrativo",
    description:
      "Automação de vídeos virais com IA. +100 modelos de vídeos prontos para escalar faturamento.",
    icon: "fas fa-brain",
  },
  {
    title: "Mentoria Marketing Digital",
    description:
      "Acompanhamento para estruturamento completo de páginas, anúncios e vídeos em até 7 dias.",
    icon: "fas fa-chalkboard-teacher",
  },
  {
    title: "PreSets Pro",
    description:
      "Efeitos visuais prontos para CapCut e Reels. Design e dinamismo em um clique.",
    icon: "fas fa-magic",
  },
];

export default function Projects() {
  const isMobile = useIsMobile();

  return (
    <section
      id="projects"
      className="relative px-6 overflow-hidden text-white bg-transparent py-28 md:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="font-serif text-4xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-white mb-14"
          initial={isMobile ? undefined : { opacity: 0, y: 40 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projetos em Destaque
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, index) => {
            const card = (
              <motion.div
                className="flex flex-col items-center justify-center h-full p-8 overflow-hidden text-center transition-all duration-300 bg-transparent border shadow-lg rounded-2xl border-yellow-500/10 backdrop-blur-md hover:shadow-2xl"
                initial={isMobile ? undefined : { opacity: 0, y: 30 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <i className={`${project.icon} text-5xl text-yellow-400 mb-6`} />
                <h3 className="mb-3 font-serif text-xl font-semibold text-yellow-400">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {project.description}
                </p>
              </motion.div>
            );

            return isMobile ? (
              <div key={index}>{card}</div>
            ) : (
              <Tilt
                key={index}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.04}
                transitionSpeed={700}
                className="group"
              >
                {card}
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}
