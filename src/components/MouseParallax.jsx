import { useEffect } from "react";

export default function MouseParallax() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const blobs = document.querySelectorAll(".parallax-blob");

      blobs.forEach((blob, index) => {
        const speed = 0.03 * (index + 1); // Velocidade diferente para cada blob
        const x = (window.innerWidth / 2 - e.pageX) * speed;
        const y = (window.innerHeight / 2 - e.pageY) * speed;

        blob.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null; // Componente invisível só com efeito
}
