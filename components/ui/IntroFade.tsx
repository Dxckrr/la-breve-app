"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function IntroFade({ onFinish }: { onFinish: () => void }) {
  const videoSrc = "/LA_BREVE.mp4";
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFadeOut(true), 2500); // duración del video visible
    const finishTimeout = setTimeout(() => onFinish(), 5000); // duración total del intro

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full h-full z-50 bg-black flex items-center justify-center transition-opacity duration-1000",
        {
          "opacity-0 pointer-events-none": fadeOut,
        }
      )}>
      <video
        src={videoSrc}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
