import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="px-6 py-10 text-gray-400 bg-black border-t md:px-12 border-yellow-500/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container flex flex-col items-center justify-between gap-4 mx-auto md:flex-row">
        <p className="font-serif text-sm font-light text-center md:text-left">
          © {year} Bernardo. Todos os direitos reservados.
        </p>

        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/bndsiqueira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 transition-colors duration-300 hover:text-white"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bernardo-bergamini-bergamini-siqueira-0b7843358/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 transition-colors duration-300 hover:text-white"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://t.me/bernardobnd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 transition-colors duration-300 hover:text-white"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5551992312448&text=Oi%21+Vi+seus+projetos+e+achei+muito+interessantes.+Pode+me+passar+mais+informa%C3%A7%C3%B5es%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 transition-colors duration-300 hover:text-white"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
