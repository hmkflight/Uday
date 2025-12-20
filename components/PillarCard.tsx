import React from "react";
import Button from "./shared/Button";

interface PillarCardProps {
  tag: string;
  title: string;
  body: string;
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

export default function PillarCard({
  tag,
  title,
  body,
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
    <div className="bg-pureWhite rounded-xl p-9 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 border border-warmBeige border-opacity-40">
      {/* Tag */}
      <p className="text-small text-coastalTeal mb-3 uppercase tracking-wide font-medium">{tag}</p>

      {/* Title */}
      <h3 className="text-h3 mb-5 leading-tight">{title}</h3>

      {/* Body */}
      <p className="text-body text-charcoal mb-8 leading-relaxed">{body}</p>

      {/* Bullets if provided */}
      {bullets && bullets.length > 0 && (
        <ul className="mb-8 space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-body text-charcoal flex items-start leading-relaxed">
              <span className="mr-3 text-coastalTeal">•</span>
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
          className="inline-flex items-center gap-2 text-body text-coastalTeal hover:text-opacity-80 transition-opacity duration-200"
        >
          <svg
            className="w-5 h-5"
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
          className="text-body text-coastalTeal underline hover:text-opacity-80 inline-block transition-opacity duration-200"
        >
          {linkText}
        </a>
      )}

      {buttonText && (
        <Button variant="primary" href={buttonHref} target={buttonTarget} rel={buttonRel}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
