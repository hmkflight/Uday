"use client";

import React, { useEffect } from "react";
import Container from "./shared/Container";
import Section from "./shared/Section";

export default function EmailSignup() {
  useEffect(() => {
    // Check if Kit script already exists
    const existingScript = document.querySelector(
      'script[src="https://uday-19.kit.com/92c3cf4c7d/index.js"]'
    );

    if (existingScript) {
      console.log("Kit script already exists in DOM");
      return;
    }

    // Create and inject the Kit script
    const script = document.createElement("script");
    script.src = "https://uday-19.kit.com/92c3cf4c7d/index.js";
    script.async = true;
    script.setAttribute("data-uid", "92c3cf4c7d");

    script.onload = () => {
      console.log("Kit script loaded successfully");
    };

    script.onerror = () => {
      console.error("Kit script failed to load");
    };

    document.body.appendChild(script);
    console.log("Kit script injected into DOM");

    // Cleanup function
    return () => {
      // Optional: remove script on unmount if needed
      // For Kit forms, typically you want to keep it loaded
    };
  }, []);

  return (
    <Section className="bg-sand">
      <Container maxWidth="content">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* Headline */}
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] mb-4 md:mb-5 leading-tight font-semibold text-charcoal">
            Start with a wish
          </h2>

          {/* Supporting text */}
          <p className="text-[16px] md:text-[18px] text-charcoal leading-relaxed opacity-80 mb-8 md:mb-10 max-w-xl mx-auto">
            Join Coastal Monks and we'll email you a $100 One Simple Wish gift card—so your first step helps someone right away.
          </p>

          {/* Kit email signup form */}
          <div id="kit-form-embed" className="max-w-md mx-auto mb-4" />

          {/* Trust microcopy */}
          <p className="text-[13px] md:text-[14px] text-warmGray opacity-70 leading-relaxed">
            We only send meaningful updates. No spam.
          </p>
        </div>
      </Container>
    </Section>
  );
}
