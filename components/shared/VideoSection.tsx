import React from "react";

interface VideoSectionProps {
  videoSrc: string;
  overlayOpacity?: number;
  overlayColor?: "dark" | "warm";
  useGradient?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function VideoSection({
  videoSrc,
  overlayOpacity = 0.5,
  overlayColor = "dark",
  useGradient = false,
  children,
  className = "",
  id,
}: VideoSectionProps) {
  const overlayClass = overlayColor === "dark" ? "bg-charcoal" : "bg-sand";

  return (
    <section
      id={id}
      className={`relative ${className}`}
    >
      {/* Video background layer */}
      <div
        className="absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            filter: 'brightness(1.08) contrast(0.98)',
          }}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Overlay for readability - directional gradient anchors text */}
      {useGradient ? (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom,
              rgba(0, 0, 0, ${overlayOpacity + 0.22}) 0%,
              rgba(0, 0, 0, ${overlayOpacity + 0.12}) 35%,
              rgba(0, 0, 0, ${overlayOpacity}) 70%,
              rgba(0, 0, 0, ${overlayOpacity - 0.08}) 100%)`,
          }}
          aria-hidden="true"
        />
      ) : (
        <div
          className={`absolute inset-0 ${overlayClass}`}
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
