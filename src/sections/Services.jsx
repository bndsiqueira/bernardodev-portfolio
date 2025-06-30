import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import useIsMobile from "../hooks/useIsMobile";

const services = [
  {
    title: "Mentoria Marketing Digital",
    icon: "fas fa-chalkboard-teacher",
    description: "Acompanhamento 1:1 para lançar sua estrutura digital em até 7 dias.",
    message: "Olá! Tenho interesse na Mentoria Express. Pode me passar mais informações?",
    highlighted: true,
  },
  {
    title: "Sites de Alta Conversão",
    icon: "fas fa-code",
    description: "Landing pages modernas, rápidas e otimizadas para gerar vendas.",
    message: "Olá! Gostaria de saber mais sobre os sites de alta conversão que você desenvolve.",
    highlighted: false,
  },
  {
    title: "Automação com Make/n8n",
    icon: "fas fa-bolt",
    description: "Integro ferramentas, APIs e IA para automatizar processos e escalar seu negócio.",
    message: "Oi! Me explica melhor como funciona a automação com Make ou n8n?",
    highlighted: true,
  },
  {
    title: "IA para Vídeos e Conteúdo",
    icon: "fas fa-robot",
    description: "Criação de vídeos virais, dublagens automáticas e IA aplicada ao marketing digital.",
    message: "Olá! Quero entender como você usa IA na criação de vídeos e conteúdos.",
    highlighted: false,
  },
];

export default function Services() {
  const isMobile = useIsMobile();

  return (
    <motion.section
      id="services"
      className="relative px-6 overflow-hidden text-white bg-transparent py-28 md:px-12"
      initial={isMobile ? undefined : { opacity: 0, y: 40 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="font-serif text-4xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-white mb-14"
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Como posso te ajudar
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const link = `https://wa.me/5551992312448?text=${encodeURIComponent(service.message)}`;

            return (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn("up", 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="block transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-full p-8 space-y-4 overflow-hidden text-center bg-transparent border shadow-lg cursor-pointer rounded-2xl border-yellow-500/10 backdrop-blur-md hover:shadow-2xl">
                  <i className={`${service.icon} text-4xl text-yellow-400`} />
                  <h3 className="font-serif text-lg font-semibold text-yellow-300">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {service.description}
                  </p>
                  <div className="flex flex-col items-center gap-1 mt-4 text-sm font-semibold text-green-400">
                    <span>Clique para falar comigo no WhatsApp</span>
                    <i className="text-xl fab fa-whatsapp" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
