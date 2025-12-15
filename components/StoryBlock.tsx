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
    <div className="mb-16 last:mb-0 pb-16 last:pb-0 border-b border-white border-opacity-20 last:border-0">
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
      <p
        className="text-small text-white mb-3 uppercase tracking-wide font-medium"
        style={{
          textShadow: '0 0 12px rgba(82, 160, 150, 0.5), 0 0 24px rgba(82, 160, 150, 0.3), 1px 1px 3px rgba(0, 0, 0, 0.3)'
        }}
      >
        {label}
      </p>

      {/* Title */}
      <h3
        className="text-h3 mb-5 leading-tight text-white"
        style={{
          textShadow: '0 0 15px rgba(82, 160, 150, 0.5), 0 0 30px rgba(82, 160, 150, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        className="text-body text-white mb-6 leading-relaxed"
        style={{
          textShadow: '0 0 12px rgba(82, 160, 150, 0.4), 0 0 24px rgba(82, 160, 150, 0.2), 1px 1px 3px rgba(0, 0, 0, 0.3)'
        }}
      >
        {body}
      </p>

      {/* Link */}
      <a
        href={linkHref}
        className="text-body text-white underline hover:text-opacity-80 inline-block min-h-[44px] flex items-center transition-opacity duration-200"
        style={{
          textShadow: '0 0 12px rgba(82, 160, 150, 0.5), 0 0 24px rgba(82, 160, 150, 0.3), 1px 1px 2px rgba(0, 0, 0, 0.3)'
        }}
      >
        {linkText}
      </a>
    </div>
  );
}
