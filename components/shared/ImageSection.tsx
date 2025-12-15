import React from "react";

interface ImageSectionProps {
  backgroundImage: string;
  overlayOpacity?: number;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function ImageSection({
  backgroundImage,
  overlayOpacity = 0.5,
  children,
  className = "",
  id,
}: ImageSectionProps) {
  return (
    <section
      id={id}
      className={`relative ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Warm overlay for readability */}
      <div
        className="absolute inset-0 bg-sand"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
