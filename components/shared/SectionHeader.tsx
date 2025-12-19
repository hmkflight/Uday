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
  const introColor = onImage ? "text-white opacity-90" : "text-warmGray";
  const titleWeight = onImage ? "font-semibold" : "font-semibold";
  const fadeClass = onImage ? "fade-in-text" : "";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? "text-center" : "text-left"
      }`}
    >
      <h2 className={`text-h2 mb-4 leading-snug ${textColor} ${titleWeight} ${fadeClass}`}>
        {title}
      </h2>
      {intro && (
        <p
          className={`text-body ${introColor} leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} font-normal ${fadeClass}`}
          style={{ lineHeight: "1.7" }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
