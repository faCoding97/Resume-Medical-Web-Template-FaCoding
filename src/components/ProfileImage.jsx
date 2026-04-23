import { useState } from "react";

export default function ProfileImage({ src, fallbackSrc, alt, logoSrc, logoAlt }) {
  const [imageSrc, setImageSrc] = useState(src || fallbackSrc);
  const [showLogo, setShowLogo] = useState(Boolean(logoSrc));

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-4 shadow-[0_20px_60px_rgba(0,0,0,.3)] ring-1 ring-white/10 backdrop-blur-md">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/90">
        <img
          src={imageSrc || fallbackSrc}
          alt={alt}
          className="aspect-square h-auto w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={() => {
            if (imageSrc !== fallbackSrc) setImageSrc(fallbackSrc);
          }}
        />
      </div>

      {showLogo ? (
        <div className="mt-4 flex justify-center">
          <img
            src={logoSrc}
            alt={logoAlt || ""}
            className="h-auto w-full max-w-[180px] object-contain opacity-95"
            loading="eager"
            decoding="async"
            onError={() => setShowLogo(false)}
          />
        </div>
      ) : null}
    </div>
  );
}
