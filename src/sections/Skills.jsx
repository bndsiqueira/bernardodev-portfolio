import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/variants";
import useIsMobile from "../hooks/useIsMobile";

const skills = [
  {
    name: "React.js",
    icon: "fab fa-react",
    gradient: "from-yellow-300 via-amber-400 to-yellow-500",
  },
  {
    name: "Tailwind CSS",
    icon: "fab fa-css3-alt",
    gradient: "from-amber-400 via-yellow-300 to-white",
  },
  {
    name: "Make / n8n",
    icon: "fas fa-robot",
    gradient: "from-yellow-200 via-yellow-400 to-amber-500",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    gradient: "from-yellow-400 via-amber-500 to-yellow-600",
  },
  {
    name: "Git & GitHub",
    icon: "fab fa-git-alt",
    gradient: "from-yellow-500 via-yellow-400 to-white",
  },
  {
    name: "Desenvolvimento Web",
    icon: "fas fa-laptop-code",
    gradient: "from-yellow-200 via-amber-300 to-yellow-500",
  },
];

export default function Skills() {
  const isMobile = useIsMobile();

  return (
    <motion.section
      id="skills"
      className="relative px-6 overflow-hidden text-white bg-transparent py-28 md:px-12 from-black via-gray-950/90 to-black"
      initial={isMobile ? undefined : { opacity: 0, y: 40 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 z-0 bg-transparent pointer-events-none from-yellow-300/5 via-black/20 to-black/90 backdrop-blur-sm" />

      <div className="container relative z-10 mx-auto max-w-7xl space-y-14">
        <motion.h2
          className="font-serif text-4xl font-extrabold text-center text-transparent md:text-5xl bg-gradient-to-r from-yellow-400 via-amber-500 to-white bg-clip-text drop-shadow-lg"
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Minhas Habilidades
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg font-light tracking-wide text-center text-gray-300"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Conhecimento prático nas ferramentas mais modernas do mercado, sempre com foco no crescimento do seu negócio.
        </motion.p>

        <div className="grid grid-cols-2 gap-6 mt-10 sm:grid-cols-3 md:grid-cols-3">
          {skills.map((skill, index) => {
            const card = (
              <div
                className="relative p-6 transition-all duration-300 border shadow-xl group rounded-2xl bg-gray-900/40 backdrop-blur-xl border-yellow-500/10 hover:shadow-2xl"
              >
                <div
                  className={`
                    absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br ${skill.gradient}
                    opacity-30 group-hover:opacity-80 transition-all duration-300 blur-md
                  `}
                ></div>

                <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
                  <i
                    className={`text-5xl ${skill.icon} bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
                  />
                  <h3 className="text-sm font-semibold tracking-wider">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );

            return (
              <motion.div key={index} variants={fadeIn("up", 0.1 * index)}>
                {isMobile ? card : (
                  <Tilt
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    glareEnable
                    glareMaxOpacity={0.1}
                    scale={1.04}
                    transitionSpeed={800}
                  >
                    {card}
                  </Tilt>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
