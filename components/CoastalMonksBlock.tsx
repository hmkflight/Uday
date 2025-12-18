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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="primary" href="mailto:me@uday.com">
            Join Coastal Monks
          </Button>
          <Button variant="secondary" href="#how-it-works">
            Learn how it works
          </Button>
        </div>

        {/* Caption */}
        <p className="text-small text-center text-warmGray mb-16 italic">
          A calm center, a wider ripple.
        </p>

        {/* How it works - 3 steps */}
        <div className="border-t border-warmBeige border-opacity-60 pt-16">
          <h3 className="text-h3 text-center mb-12 leading-tight">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-coastalTeal text-white rounded-full flex items-center justify-center mx-auto mb-6 font-semibold text-xl shadow-[0_2px_12px_rgba(82,160,150,0.15)]">
                1
              </div>
              <p className="text-body text-charcoal leading-relaxed">Join the circle</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coastalTeal text-white rounded-full flex items-center justify-center mx-auto mb-6 font-semibold text-xl shadow-[0_2px_12px_rgba(82,160,150,0.15)]">
                2
              </div>
              <p className="text-body text-charcoal leading-relaxed">Choose how you want to help</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coastalTeal text-white rounded-full flex items-center justify-center mx-auto mb-6 font-semibold text-xl shadow-[0_2px_12px_rgba(82,160,150,0.15)]">
                3
              </div>
              <p className="text-body text-charcoal leading-relaxed">See your impact grow</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
