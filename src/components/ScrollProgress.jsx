import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      const bar = document.getElementById("scroll-progress");
      if (bar) bar.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      id="scroll-progress"
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 z-50 w-0 transition-all duration-300 ease-out"
    />
  );
}
