import React from "react";
import Button from "./shared/Button";
import Container from "./shared/Container";
import Section from "./shared/Section";

export default function SeedGrantBlock() {
  // Properly encode mailto with pre-filled content
  const mailtoLink = `mailto:uday@coastalmonks.org?subject=${encodeURIComponent(
    "Coastal Monks Seed Grant Application"
  )}&body=${encodeURIComponent(
    `Hi Uday,

I'm reaching out about the Coastal Monks $500 Seed Grant.

1. What I'm hoping to start:
[Your answer here]

2. How $500 would help me begin:
[Your answer here]

3. Any other support that would make a difference:
[Your answer here]

Thank you for creating this opportunity.`
  )}`;

  return (
    <Section id="seed-grant" className="bg-sand">
      <Container maxWidth="content">
        {/* Section heading */}
        <h2 className="text-h2 text-center text-charcoal mb-6 leading-snug font-semibold">
          A Small Start Can Change Everything
        </h2>

        {/* Intro paragraph */}
        <p className="text-body text-center text-charcoal mb-12 max-w-content mx-auto leading-relaxed">
          Many meaningful things begin with very little. Coastal Monks offers a limited number of $500 seed grants to people trying to start something good—whether it's a project, a service, or a second chance.
        </p>

        {/* Prompt block */}
        <div className="mb-12 max-w-content mx-auto">
          <p className="text-body text-charcoal mb-4 leading-relaxed">
            If this could help you, tell us:
          </p>
          <ul className="space-y-3">
            <li className="text-body text-charcoal flex items-start leading-relaxed">
              <span className="mr-3 text-coastalTeal">•</span>
              <span>What are you hoping to start?</span>
            </li>
            <li className="text-body text-charcoal flex items-start leading-relaxed">
              <span className="mr-3 text-coastalTeal">•</span>
              <span>How would $500 help you begin?</span>
            </li>
            <li className="text-body text-charcoal flex items-start leading-relaxed">
              <span className="mr-3 text-coastalTeal">•</span>
              <span>What other support would make a difference?</span>
            </li>
          </ul>
        </div>

        {/* Trust statement */}
        <p className="text-body text-center text-warmGray mb-12 max-w-content mx-auto leading-relaxed">
          This is a trust-based grant. If you're able to give it back someday, it will help someone else begin. If not, that's okay too. What matters is that something good was tried.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button variant="primary" href={mailtoLink}>
            Apply for a Seed Grant
          </Button>
        </div>
      </Container>
    </Section>
  );
}
