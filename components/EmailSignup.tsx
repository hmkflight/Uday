import React from "react";
import Container from "./shared/Container";
import Section from "./shared/Section";

export default function EmailSignup() {
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

          {/* Placeholder email form - ready for Mailchimp integration */}
          <form className="max-w-md mx-auto mb-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-warmBeige focus:border-coastalTeal focus:outline-none transition-colors duration-200 text-[16px] text-charcoal placeholder:text-warmGray min-h-[44px] font-sans"
                disabled
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-lg font-medium bg-coastalTeal text-white hover:bg-opacity-95 transition-all duration-300 min-h-[44px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] font-sans whitespace-nowrap opacity-50 cursor-not-allowed"
                disabled
              >
                Join the circle
              </button>
            </div>
          </form>

          {/* Trust microcopy */}
          <p className="text-[13px] md:text-[14px] text-warmGray opacity-70 leading-relaxed">
            We only send meaningful updates. No spam.
          </p>
        </div>
      </Container>
    </Section>
  );
}
