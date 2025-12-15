import React from "react";

interface SectionHeaderProps {
  title: string;
  intro?: string;
  centered?: boolean;
  onImage?: boolean;
}

export default function SectionHeader({
  title,
  intro,
  centered = false,
  onImage = false,
}: SectionHeaderProps) {
  const textColor = onImage ? "text-white" : "";
  const introColor = onImage ? "text-white" : "text-warmGray";

  const textShadowStyle = onImage
    ? { textShadow: '0 0 15px rgba(82, 160, 150, 0.6), 0 0 30px rgba(82, 160, 150, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.3)' }
    : {};

  return (
    <div
      className={`mb-16 md:mb-20 ${
        centered ? "text-center" : "text-left"
      }`}
    >
      <h2 className={`text-h2 mb-4 leading-tight ${textColor}`} style={textShadowStyle}>
        {title}
      </h2>
      {intro && (
        <p
          className={`text-body ${introColor} leading-relaxed max-w-2xl mx-auto`}
          style={onImage ? { textShadow: '0 0 12px rgba(82, 160, 150, 0.5), 0 0 24px rgba(82, 160, 150, 0.3), 1px 1px 3px rgba(0, 0, 0, 0.3)' } : {}}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
