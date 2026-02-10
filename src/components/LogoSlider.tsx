const logos = [
  "ChatGPT", "Gemini", "Make", "NotebookLM", "Canva", "Meta", "Google", "ElevenLabs",
];

export const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-scroll">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
          >
            <span className="text-muted-foreground/40 text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
