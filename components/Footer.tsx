import React from "react";
import Container from "./shared/Container";

export default function Footer() {
  const navLinks: Array<{ label: string; href: string; target?: string; rel?: string }> = [
    { label: "One Simple Wish", href: "https://www.onesimplewish.org/uday", target: "_blank", rel: "noopener noreferrer" },
    { label: "Rescue Mission", href: "https://www.rescuemission.org/", target: "_blank", rel: "noopener noreferrer" },
    { label: "Coastal Monks", href: "#coastal-monks" },
    { label: "Contact", href: "mailto:me@uday.com" },
  ];

  return (
    <footer className="bg-warmBeige py-12 md:py-16 border-t border-warmBeige border-opacity-60">
      <Container>
        {/* Mission line */}
        <p className="text-small text-center text-charcoal mb-8 leading-relaxed">
          A California coastal home for partnerships of friendship and love, shared stories, and everyday helpers.
        </p>

        {/* Navigation links */}
        <nav className="mb-8">
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-small text-charcoal hover:text-coastalTeal transition-colors duration-200 min-h-[44px] inline-flex items-center"
                  target={link.target}
                  rel={link.rel}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Credit line */}
        <p className="hudson-credit">
          Crafted by Hudson™ · <a href="mailto:hudsonmyung63@gmail.com">hudsonmyung63@gmail.com</a> · <a href="https://www.linkedin.com/in/hudson-myung-7aa927241/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
        </p>
      </Container>
    </footer>
  );
}
