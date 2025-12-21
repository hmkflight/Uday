import React from "react";

interface ImageSectionProps {
  backgroundImage: string;
  overlayOpacity?: number;
  overlayColor?: "dark" | "warm";
  useGradient?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function ImageSection({
  backgroundImage,
  overlayOpacity = 0.5,
  overlayColor = "dark",
  useGradient = false,
  children,
  className = "",
  id,
}: ImageSectionProps) {
  const overlayClass = overlayColor === "dark" ? "bg-charcoal" : "bg-sand";

  return (
    <section
      id={id}
      className={`relative parallax-bg ${className}`}
    >
      {/* Parallax background layer */}
      <div
        className="parallax-bg-image absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          top: "-10%",
          height: "120%",
        }}
        aria-hidden="true"
      />

      {/* Overlay for readability */}
      {useGradient ? (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, ${overlayOpacity + 0.15}) 0%, rgba(0, 0, 0, ${overlayOpacity}) 100%)`,
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
