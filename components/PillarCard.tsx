import React from "react";
import Button from "./shared/Button";

interface PillarCardProps {
  tag: string;
  title: string;
  body: string;
  icon: "person" | "heart" | "home";
  bullets?: string[];
  linkText?: string;
  linkHref?: string;
  linkTarget?: string;
  linkRel?: string;
  linkWithIcon?: boolean;
  buttonText?: string;
  buttonHref?: string;
  buttonTarget?: string;
  buttonRel?: string;
}

// Minimalist icon components
const PillarIcons = {
  person: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
};

export default function PillarCard({
  tag,
  title,
  body,
  icon,
  bullets,
  linkText,
  linkHref = "#",
  linkTarget,
  linkRel,
  linkWithIcon = false,
  buttonText,
  buttonHref = "#",
  buttonTarget,
  buttonRel,
}: PillarCardProps) {
  return (
    <div className="group py-8 md:py-0 md:px-6 lg:px-8">
      {/* Visual anchor - Minimalist icon */}
      <div className="text-coastalTeal opacity-60 mb-6 md:mb-8">
        {PillarIcons[icon]}
      </div>

      {/* Tag */}
      <p className="text-[12px] md:text-[13px] text-coastalTeal mb-3 md:mb-4 uppercase tracking-[0.08em] font-medium opacity-80">{tag}</p>

      {/* Title */}
      <h3 className="text-[22px] md:text-[24px] lg:text-[26px] mb-4 md:mb-5 leading-[1.3] font-semibold text-charcoal">{title}</h3>

      {/* Body */}
      <p className="text-[16px] md:text-[17px] lg:text-[18px] text-charcoal mb-6 md:mb-8 leading-relaxed opacity-80 max-w-md">{body}</p>

      {/* Bullets if provided */}
      {bullets && bullets.length > 0 && (
        <ul className="mb-6 md:mb-8 space-y-2.5 md:space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-[15px] md:text-[16px] text-charcoal flex items-start leading-relaxed opacity-75">
              <span className="mr-2.5 md:mr-3 text-coastalTeal opacity-60 text-[18px]">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Link or Button */}
      {linkText && linkWithIcon && (
        <a
          href={linkHref}
          target={linkTarget}
          rel={linkRel}
          className="inline-flex items-center gap-2 text-[15px] md:text-[16px] text-coastalTeal hover:opacity-70 transition-opacity duration-200 min-h-[44px] font-medium"
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          {linkText}
        </a>
      )}

      {linkText && !linkWithIcon && (
        <a
          href={linkHref}
          target={linkTarget}
          rel={linkRel}
          className="text-[15px] md:text-[16px] text-coastalTeal hover:opacity-70 inline-flex items-center min-h-[44px] transition-opacity duration-200 font-medium"
        >
          {linkText}
          <svg className="w-4 h-4 ml-1.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}

      {buttonText && (
        <div className="mt-2">
          <Button variant="primary" href={buttonHref} target={buttonTarget} rel={buttonRel}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
}
