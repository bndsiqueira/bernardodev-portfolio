export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-900/20 rounded-full blur-3xl opacity-20 animate-pulse-slow parallax-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl opacity-20 animate-pulse-slower parallax-blob"></div>
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl opacity-20 animate-pulse-xslow parallax-blob"></div>
    </div>
  );
}
