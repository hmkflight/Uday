import React from "react";

interface StoryBlockProps {
  label: string;
  title: string;
  body: string;
  icon: "sparkles" | "shelter" | "waves";
  linkText?: string;
  linkHref?: string;
  linkTarget?: string;
  linkRel?: string;
  imageSrc?: string;
  imageAlt?: string;
}

// Minimalist story icons
const StoryIcons = {
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 md:w-14 md:h-14">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
    </svg>
  ),
  shelter: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 md:w-14 md:h-14">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  waves: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 md:w-14 md:h-14">
      <path d="M2 12c.6-2.5 2-4.5 4-6s4.5-2.5 7-2.5 5 1 7 2.5 3.4 3.5 4 6" />
      <path d="M2 12c.6 2.5 2 4.5 4 6s4.5 2.5 7 2.5 5-1 7-2.5 3.4-3.5 4-6" />
    </svg>
  ),
};

export default function StoryBlock({
  label,
  title,
  body,
  icon,
  linkText,
  linkHref = "#",
  linkTarget,
  linkRel,
  imageSrc,
  imageAlt = "",
}: StoryBlockProps) {
  return (
    <div className="mb-10 md:mb-12 last:mb-0 pb-10 md:pb-12 last:pb-0 border-b border-white border-opacity-15 last:border-0">
      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-10">
        {/* Visual anchor - Icon or Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          {imageSrc ? (
            <div className="w-full md:w-48 lg:w-56 aspect-[4/3] bg-white bg-opacity-10 rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="text-white opacity-50">
              {StoryIcons[icon]}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Label */}
          <p className="fade-in-text text-[11px] md:text-[12px] text-white mb-3 md:mb-4 uppercase tracking-[0.1em] font-medium opacity-70">
            {label}
          </p>

          {/* Title */}
          <h3 className="fade-in-text text-[20px] md:text-[22px] lg:text-[24px] mb-3 md:mb-4 leading-[1.3] text-white font-semibold">
            {title}
          </h3>

          {/* Body - shortened and more scannable */}
          <p className="fade-in-text text-[15px] md:text-[16px] lg:text-[17px] text-white mb-5 md:mb-6 leading-relaxed opacity-80 font-normal max-w-2xl">
            {body}
          </p>

          {/* Link with arrow */}
          {linkText && (
            <a
              href={linkHref}
              target={linkTarget}
              rel={linkRel}
              className="inline-flex items-center gap-2 text-[15px] md:text-[16px] text-white hover:opacity-70 transition-opacity duration-200 min-h-[44px] font-medium"
            >
              {linkText}
              <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
