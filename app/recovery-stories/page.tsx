import Link from "next/link";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Footer from "@/components/Footer";

export default function RecoveryStoriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-charcoal text-white py-20 md:py-28">
        <Container maxWidth="content">
          {/* Back Navigation */}
          <Link
            href="/"
            className="fade-in-text inline-block mb-8 text-body text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
          >
            ← Home
          </Link>

          <h1 className="fade-in-text text-h1 mb-6 leading-tight font-semibold">
            Real voices, real recovery
          </h1>
          <p className="fade-in-text text-body opacity-90 leading-relaxed max-w-prose">
            These are the stories of people who walked through the doors of the Rescue Mission—
            carrying weight most of us cannot see—and found a bed, a meal, and a community
            that helped them begin again.
          </p>
        </Container>
      </Section>

      {/* Stories Content Section */}
      <Section>
        <Container maxWidth="content">
          <SectionHeader
            title="Stories of hope and healing"
            intro="Each story represents a life changed, a family reunited, or a new chapter begun."
            centered={false}
          />

          <div className="py-12">
            <p className="fade-in-text text-body text-charcoal opacity-70 leading-relaxed max-w-prose">
              Stories will be shared here as individuals choose to tell them—in their own time, in their own words.
            </p>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
