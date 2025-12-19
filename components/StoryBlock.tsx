import React from "react";

interface StoryBlockProps {
  label: string;
  title: string;
  body: string;
  linkText: string;
  linkHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function StoryBlock({
  label,
  title,
  body,
  linkText,
  linkHref = "#",
  imageSrc,
  imageAlt = "",
}: StoryBlockProps) {
  return (
    <div className="mb-12 last:mb-0 pb-12 last:pb-0 border-b border-white border-opacity-20 last:border-0">
      {/* Image placeholder - if provided */}
      {imageSrc && (
        <div className="mb-8 w-full aspect-[4/3] bg-warmBeige rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Label */}
      <p className="fade-in-text text-small text-white mb-3 uppercase tracking-wide font-semibold opacity-90">
        {label}
      </p>

      {/* Title */}
      <h3 className="fade-in-text text-h3 mb-4 leading-tight text-white font-semibold">
        {title}
      </h3>

      {/* Body */}
      <p className="fade-in-text text-body text-white mb-6 leading-relaxed opacity-90 font-normal">
        {body}
      </p>

      {/* Link */}
      <a
        href={linkHref}
        className="text-body text-white underline hover:opacity-80 inline-block min-h-[44px] flex items-center transition-opacity duration-200 font-normal"
      >
        {linkText}
      </a>
    </div>
  );
}
