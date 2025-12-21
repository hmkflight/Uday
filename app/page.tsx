import Hero from "@/components/Hero";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Container from "@/components/shared/Container";
import PillarCard from "@/components/PillarCard";
import StoryBlock from "@/components/StoryBlock";
import SeedGrantBlock from "@/components/SeedGrantBlock";
import CoastalMonksBlock from "@/components/CoastalMonksBlock";
import Footer from "@/components/Footer";
import ImageSection from "@/components/shared/ImageSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section id="help" className="py-16 md:py-24 lg:py-28">
        <Container>
          {/* Section intro - centered and concise */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 lg:mb-20 px-4">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] mb-4 md:mb-5 leading-tight font-semibold text-charcoal">
              Three connected ways to make an impact
            </h2>
            <p className="text-[16px] md:text-[18px] text-warmGray leading-relaxed opacity-80">
              Each pillar stands on its own—and all three connect to form a circle of care.
            </p>
          </div>

          {/* Pillars grid - mobile first with generous spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-12 mb-12 md:mb-16 divide-y md:divide-y-0 md:divide-x divide-warmBeige divide-opacity-30">
            <PillarCard
              tag="Uday"
              icon="person"
              title="The story that ties it all together"
              body="Uday's journey runs through second chances, quiet courage, and showing up when it matters. This space is where a personal mission becomes something we can all be part of."
              linkText="Connect with Uday on LinkedIn"
              linkHref="https://www.linkedin.com/in/udaygupta/"
              linkTarget="_blank"
              linkRel="noopener noreferrer"
              linkWithIcon={true}
            />

            <PillarCard
              tag="One Simple Wish"
              icon="heart"
              title="Grant moments of joy that last"
              body="One Simple Wish helps grant meaningful wishes for children and young people impacted by foster care. Through this partnership, every wish supported here becomes part of our shared impact."
              bullets={[
                "Grant or sponsor a wish",
                "Share a wish with your friends",
                "Learn more about foster youth",
              ]}
              buttonText="Support a wish"
              buttonHref="https://www.onesimplewish.org/site/donate?utm_source=google&utm_medium=cpc&campaignid=23280953753&adgroupid=191784224591&creative=784857427865&matchtype=b&network=g&device=c&keyword=one%20simple%20wish&gad_source=1&gad_campaignid=23280953753&gbraid=0AAAAADyxxbyhSaYSFTpgHOD7iXt3_y6AJ&gclid=Cj0KCQiAxonKBhC1ARIsAIHq_lvRtDWZsu5hZ9FEySyK97zZO351HJXzhVFYaNr4NZ6ilpyJ0qmzQg8aAilgEALw_wcB"
              buttonTarget="_blank"
              buttonRel="noopener noreferrer"
            />

            <PillarCard
              tag="Rescue Mission"
              icon="home"
              title="Stand with people rebuilding their lives"
              body="Rescue Mission programs offer shelter, meals, and long-term recovery support. Together, we focus on real people, real beds, and real chances to begin again."
              bullets={[
                "Help provide a bed and a meal",
                "Support recovery and counseling programs",
                "Explore ways to volunteer",
              ]}
              buttonText="Support a life"
              buttonHref="https://www.rescuemission.org/"
              buttonTarget="_blank"
              buttonRel="noopener noreferrer"
            />
          </div>

          {/* Closing line */}
          <p className="text-[15px] md:text-[16px] text-center text-warmGray max-w-2xl mx-auto leading-relaxed opacity-75 px-4">
            Whether you start with a wish, a meal, or a story, you are stepping into the same circle of care.
          </p>
        </Container>
      </Section>

      <ImageSection
        backgroundImage="/images/beach.webp"
        overlayOpacity={0.45}
        overlayColor="dark"
        useGradient={true}
      >
        <div className="py-16 md:py-24 lg:py-28">
          <Container maxWidth="content">
            {/* Section intro */}
            <div className="mb-12 md:mb-16 lg:mb-20">
              <h2 className="fade-in-text text-[28px] md:text-[36px] lg:text-[42px] mb-4 md:mb-5 leading-tight text-white font-semibold">
                Stories from our shared coast
              </h2>
              <p className="fade-in-text text-[16px] md:text-[18px] text-white leading-relaxed opacity-75 max-w-2xl">
                These are the kinds of moments your support makes possible—up close, human, and real.
              </p>
            </div>

            {/* Story blocks with icons */}
            <StoryBlock
              label="One Simple Wish"
              icon="sparkles"
              title="From just another day to a day they will never forget"
              body="A young person in foster care wished for something simple that helped them feel seen. Through One Simple Wish and supporters like you, that hope became a real memory."
              linkText="See more wishes"
              linkHref="https://www.onesimplewish.org/wish/wish-grant"
              linkTarget="_blank"
              linkRel="noopener noreferrer"
            />

            <StoryBlock
              label="Rescue Mission"
              icon="shelter"
              title="A warm bed, a meal, and a new start"
              body="Behind every bed at the Rescue Mission is a person with a name, a past, and a future. Support here helps someone move from surviving to taking the first steps toward stability and recovery."
              linkText="See more recovery stories"
              linkHref="/recovery-stories"
            />

            <StoryBlock
              label="Uday"
              icon="waves"
              title="Why this coast, this mission, and this community"
              body="There is a certain quiet you feel standing on the coast—big sky, open water, endless horizon. This project is about bringing that same sense of openness into the lives of people carrying far more than most of us can see."
            />
          </Container>
        </div>
      </ImageSection>

      <SeedGrantBlock />

      <CoastalMonksBlock />

      <Footer />
    </main>
  );
}
