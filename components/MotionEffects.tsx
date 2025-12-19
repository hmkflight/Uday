"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Parallax effect for image sections
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const parallaxSections = document.querySelectorAll(".parallax-bg");

          parallaxSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const scrolled = window.scrollY;
            const sectionTop = scrolled + rect.top;
            const offset = (scrolled - sectionTop) * 0.2;

            const bgElement = section.querySelector(
              ".parallax-bg-image"
            ) as HTMLElement;
            if (bgElement) {
              bgElement.style.transform = `translateY(${offset}px)`;
            }
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Fade-in effect for text elements
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-active");
        } else {
          entry.target.classList.remove("fade-in-active");
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-in-text");
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
