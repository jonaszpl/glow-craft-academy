const logos = [
  { name: "ChatGPT", src: "/logos/chatgpt.svg" },
  { name: "Gemini", src: "/logos/gemini.svg" },
  { name: "Make", src: "/logos/make.svg" },
  { name: "NotebookLM", src: "/logos/notebooklm.svg" },
  { name: "Canva", src: "/logos/canva.svg" },
  { name: "Meta", src: "/logos/meta.svg" },
  { name: "Google", src: "/logos/google.svg" },
  { name: "ElevenLabs", src: "/logos/elevenlabs.svg" },
];

export const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex" style={{ width: "max-content", animation: "scroll 35s linear infinite" }}>
        {[0, 1].map((setIndex) => (
          <div key={setIndex} className="flex items-center gap-8 md:gap-12 px-4 md:px-6">
            {logos.map((logo, i) => (
              <div
                key={`${setIndex}-${i}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-[22px] md:h-[28px] w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
