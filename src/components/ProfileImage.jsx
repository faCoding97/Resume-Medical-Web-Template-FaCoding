import { useState } from "react";

export default function ProfileImage({ src, fallbackSrc, alt, logoSrc, logoAlt }) {
  const [imageState, setImageState] = useState(src ? "primary" : fallbackSrc ? "fallback" : "none");
  const [logoVisible, setLogoVisible] = useState(Boolean(logoSrc));

  const currentImage = imageState === "primary" ? src : imageState === "fallback" ? fallbackSrc : null;

  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/65 p-3 shadow-[0_20px_60px_rgba(0,0,0,.28)] ring-1 ring-white/10 backdrop-blur-md">
      <div
        className="overflow-hidden rounded-[1.1rem] border border-white/10 bg-slate-900/90"
        aria-label={alt}
      >
        {currentImage ? (
          <img
            src={currentImage}
            alt=""
            className="aspect-square h-auto w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onError={() => {
              if (imageState === "primary" && fallbackSrc) {
                setImageState("fallback");
              } else {
                setImageState("none");
              }
            }}
          />
        ) : (
          <div className="aspect-square w-full bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_55%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.98))]" />
        )}
      </div>

      {logoVisible ? (
        <div className="mt-3 flex justify-center">
          <img
            src={logoSrc}
            alt=""
            aria-label={logoAlt || "Logo"}
            className="h-auto w-full max-w-[120px] object-contain opacity-90"
            loading="eager"
            decoding="async"
            onError={() => setLogoVisible(false)}
          />
        </div>
      ) : null}
    </div>
  );
}
