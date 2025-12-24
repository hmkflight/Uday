import React from "react";
import Button from "./shared/Button";
import Container from "./shared/Container";
import Section from "./shared/Section";

export default function SeedGrantBlock() {
  // Properly encode mailto with pre-filled content
  const mailtoLink = `mailto:uday@coastalmonks.org?subject=${encodeURIComponent(
    "Coastal Monks Love Loan Application"
  )}&body=${encodeURIComponent(
    `Hi Uday,

I'm reaching out about the Coastal Monks $500 Love Loan.

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
          Meaningful things often begin with very little. We offer $500 love loans to people starting something good.
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
          This is trust-based. If you can give it back someday, great. If not, that's okay. What matters is trying.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button variant="primary" href={mailtoLink}>
            Apply for a Love Loan
          </Button>
        </div>
      </Container>
    </Section>
  );
}
