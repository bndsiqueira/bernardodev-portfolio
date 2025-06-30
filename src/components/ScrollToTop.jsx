import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollUp}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-yellow-400 to-amber-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition transform duration-300"
    >
      <i className="fas fa-arrow-up text-lg" />
    </button>
  ) : null;
}
