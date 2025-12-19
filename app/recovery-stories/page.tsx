import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Recovery Stories | Uday",
  description: "Real voices and recovery stories from the Rescue Mission—people who found hope, dignity, and a new beginning.",
};

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
            <h3 className="fade-in-text text-h3 mb-6 text-charcoal font-semibold">
              Startup Testimony
            </h3>
            <div className="fade-in-text w-full max-w-4xl mx-auto">
              <video
                controls
                className="w-full h-auto rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
                preload="metadata"
              >
                <source src="/videos/img-3933_LpP6OAbD.mov" type="video/quicktime" />
                <source src="/videos/img-3933_LpP6OAbD.mov" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
