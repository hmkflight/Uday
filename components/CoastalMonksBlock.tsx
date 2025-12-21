import React from "react";
import Button from "./shared/Button";
import Container from "./shared/Container";
import Section from "./shared/Section";

export default function CoastalMonksBlock() {
  return (
    <Section id="coastal-monks" className="bg-pureWhite">
      <Container maxWidth="content">
        {/* Logo placeholder */}
        <div className="text-center mb-10">
          <div className="inline-block">
            <p className="text-h2 text-coastalTeal tracking-tight">Coastal Monks</p>
          </div>
        </div>

        {/* Definition */}
        <p className="text-body text-center text-charcoal mb-8 max-w-content mx-auto leading-relaxed">
          Coastal Monks is a community of people who want to help each other and help others—starting right where we live.
        </p>

        {/* Supporting text */}
        <p className="text-body text-center text-warmGray mb-12 max-w-content mx-auto leading-relaxed">
          Think of Coastal Monks as a coastal clubhouse for everyday givers, helpers, and bridge-builders. No perfection or performance—just people who care, showing up together.
        </p>

        {/* Bullets */}
        <ul className="mb-12 space-y-4 max-w-content mx-auto">
          <li className="text-body text-charcoal flex items-start leading-relaxed">
            <span className="mr-3 text-coastalTeal">•</span>
            <span>Regular opportunities to support wishes, shelter, and local needs</span>
          </li>
          <li className="text-body text-charcoal flex items-start leading-relaxed">
            <span className="mr-3 text-coastalTeal">•</span>
            <span>Simple ways to help, from sharing to giving to volunteering</span>
          </li>
          <li className="text-body text-charcoal flex items-start leading-relaxed">
            <span className="mr-3 text-coastalTeal">•</span>
            <span>Gatherings along the coast and online, plus stories from the community</span>
          </li>
        </ul>

        {/* CTAs */}
        <div className="flex justify-center mb-8">
          <Button variant="primary" href="mailto:me@uday.com">
            Join Coastal Monks
          </Button>
        </div>

        {/* Caption */}
        <p className="text-small text-center text-warmGray mb-16 italic">
          A calm center, a wider ripple.
        </p>

        {/* How it works - 3 steps */}
        <div className="border-t border-warmBeige border-opacity-40 pt-16 md:pt-20 lg:pt-24">
          <h3 className="text-[24px] md:text-[28px] lg:text-[32px] text-center mb-12 md:mb-16 lg:mb-20 leading-tight font-semibold text-charcoal">
            How it works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center px-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-coastalTeal text-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-[0_4px_20px_rgba(82,160,150,0.2)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 md:h-12">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <h4 className="text-[18px] md:text-[20px] lg:text-[22px] mb-3 md:mb-4 font-semibold text-charcoal leading-tight">
                Join the circle
              </h4>
              <p className="text-[15px] md:text-[16px] text-charcoal opacity-75 leading-relaxed max-w-xs mx-auto">
                Become part of a community built on trust, dignity, and second chances.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center px-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-coastalTeal text-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-[0_4px_20px_rgba(82,160,150,0.2)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 md:h-12">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h4 className="text-[18px] md:text-[20px] lg:text-[22px] mb-3 md:mb-4 font-semibold text-charcoal leading-tight">
                Choose how you want to help
              </h4>
              <p className="text-[15px] md:text-[16px] text-charcoal opacity-75 leading-relaxed max-w-xs mx-auto">
                Support a wish, a meal, a story, or a new beginning in a way that feels right to you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center px-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-coastalTeal text-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-[0_4px_20px_rgba(82,160,150,0.2)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 md:h-12">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h4 className="text-[18px] md:text-[20px] lg:text-[22px] mb-3 md:mb-4 font-semibold text-charcoal leading-tight">
                See your impact grow
              </h4>
              <p className="text-[15px] md:text-[16px] text-charcoal opacity-75 leading-relaxed max-w-xs mx-auto">
                Follow how your support turns into real moments, real help, and lasting change.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
