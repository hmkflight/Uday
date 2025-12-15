import Hero from "@/components/Hero";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Container from "@/components/shared/Container";
import PillarCard from "@/components/PillarCard";
import StoryBlock from "@/components/StoryBlock";
import ImpactBar from "@/components/ImpactBar";
import CoastalMonksBlock from "@/components/CoastalMonksBlock";
import Footer from "@/components/Footer";
import ImageSection from "@/components/shared/ImageSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section id="help">
        <Container>
          <SectionHeader
            title="Three connected ways to make an impact"
            intro="Each pillar stands on its own—and all three connect to form a circle of care."
            centered={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <PillarCard
              tag="Uday"
              title="The story that ties it all together"
              body="Uday's journey runs through second chances, quiet courage, and showing up when it matters. This space is where a personal mission becomes something we can all be part of."
              linkText="Read Uday's story"
              linkHref="#uday"
            />

            <PillarCard
              tag="One Simple Wish"
              title="Grant moments of joy that last"
              body="One Simple Wish helps grant meaningful wishes for children and young people impacted by foster care. Through this partnership, every wish supported here becomes part of our shared impact."
              bullets={[
                "Grant or sponsor a wish",
                "Share a wish with your friends",
                "Learn more about foster youth",
              ]}
              buttonText="Support a wish"
              buttonHref="#wish"
            />

            <PillarCard
              tag="Rescue Mission"
              title="Stand with people rebuilding their lives"
              body="Rescue Mission programs offer shelter, meals, and long-term recovery support. Together, we focus on real people, real beds, and real chances to begin again."
              bullets={[
                "Help provide a bed and a meal",
                "Support recovery and counseling programs",
                "Explore ways to volunteer",
              ]}
              buttonText="Support a life"
              buttonHref="#rescue"
            />
          </div>

          <p className="text-body text-center text-warmGray max-w-content mx-auto leading-relaxed">
            Whether you start with a wish, a meal, or a story, you are stepping into the same circle of care.
          </p>
        </Container>
      </Section>

      <ImageSection
        backgroundImage="/images/beach.webp"
        overlayOpacity={0.4}
      >
        <div className="py-16 md:py-24">
          <Container maxWidth="content">
            <SectionHeader
              title="Stories from our shared coast"
              intro="These are the kinds of moments your support makes possible—up close, human, and real."
              centered={false}
              onImage={true}
            />

            <StoryBlock
              label="One Simple Wish"
              title="From just another day to a day they will never forget"
              body="A young person in foster care wished for something simple that helped them feel seen—a class, an experience, or a gift that said you matter. Through One Simple Wish and supporters like you, that hope became a real memory."
              linkText="See more wishes"
              linkHref="#wishes"
            />

            <StoryBlock
              label="Rescue Mission"
              title="A warm bed, a meal, and a new start"
              body="Behind every bed at the Rescue Mission is a person with a name, a past, and a future. Support here helps someone move from surviving day-to-day to taking the first steps toward stability, recovery, and community."
              linkText="See more recovery stories"
              linkHref="#recovery"
            />

            <StoryBlock
              label="Uday"
              title="Why this coast, this mission, and this community"
              body="There is a certain quiet you feel standing on the coast—big sky, open water, endless horizon. This project is about bringing that same sense of openness and possibility into the lives of people carrying far more than most of us can see."
              linkText="Read more from Uday"
              linkHref="#uday-story"
            />
          </Container>
        </div>
      </ImageSection>

      <ImpactBar
        metrics={[
          { label: "Wishes touched" },
          { label: "Nights of shelter provided" },
          { label: "Community actions logged by Coastal Monks" },
        ]}
      />

      <CoastalMonksBlock />

      <Footer />
    </main>
  );
}
