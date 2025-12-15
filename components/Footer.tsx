import React from "react";
import Container from "./shared/Container";

export default function Footer() {
  const navLinks = [
    { label: "Uday's Story", href: "#uday" },
    { label: "One Simple Wish", href: "#one-simple-wish" },
    { label: "Rescue Mission", href: "#rescue-mission" },
    { label: "Coastal Monks", href: "#coastal-monks" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-warmBeige py-12 md:py-16 border-t border-warmBeige border-opacity-60">
      <Container>
        {/* Mission line */}
        <p className="text-small text-center text-charcoal mb-8 leading-relaxed">
          A California coastal home for second chances, shared stories, and everyday helpers.
        </p>

        {/* Navigation links */}
        <nav className="mb-8">
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-small text-charcoal hover:text-coastalTeal transition-colors duration-200 min-h-[44px] inline-flex items-center"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* LinkedIn button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-small text-coastalTeal hover:text-opacity-80 transition-all duration-200 min-h-[44px] px-4 hover:scale-105"
            aria-label="Connect with Uday on LinkedIn"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect with Uday on LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
