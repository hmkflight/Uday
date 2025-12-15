import React from "react";
import Button from "./shared/Button";

interface PillarCardProps {
  tag: string;
  title: string;
  body: string;
  bullets?: string[];
  linkText?: string;
  linkHref?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function PillarCard({
  tag,
  title,
  body,
  bullets,
  linkText,
  linkHref = "#",
  buttonText,
  buttonHref = "#",
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
      {linkText && (
        <a
          href={linkHref}
          className="text-body text-coastalTeal underline hover:text-opacity-80 inline-block transition-opacity duration-200"
        >
          {linkText}
        </a>
      )}

      {buttonText && (
        <Button variant="primary" href={buttonHref}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
