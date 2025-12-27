import Hero from "@/components/Hero";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Container from "@/components/shared/Container";
import PillarCard from "@/components/PillarCard";
import StoryBlock from "@/components/StoryBlock";
import EmailSignup from "@/components/EmailSignup";
import CoastalMonksBlock from "@/components/CoastalMonksBlock";
import Footer from "@/components/Footer";
import VideoSection from "@/components/shared/VideoSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section id="help" className="bg-pureWhite py-16 md:py-24 lg:py-28">
        <Container maxWidth="section">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16 mb-12 md:mb-16 divide-y md:divide-y-0 md:divide-x divide-warmBeige divide-opacity-30">
            <PillarCard
              tag="LOVE LOAN"
              icon="seedGrant"
              title="A Small Start Can Change Everything"
              body="Meaningful things often begin with very little. We offer $500 love loans to people starting something good."
              bullets={[
                "Tell us what you're hoping to start",
                "Share how $500 would help you begin",
                "Ask for any other support that would help",
              ]}
              buttonText="Apply for a Love Loan"
              buttonHref={`mailto:uday@coastalmonks.org?subject=${encodeURIComponent("Coastal Monks Love Loan Application")}&body=${encodeURIComponent(`Hi Uday,

I'm reaching out about the Coastal Monks $500 Love Loan.

1. What I'm hoping to start:
[Your answer here]

2. How $500 would help me begin:
[Your answer here]

3. What other support would make a difference:
[Your answer here]

Thank you for creating this opportunity.`)}`}
            />

            <PillarCard
              tag="One Simple Wish"
              icon="heart"
              title="Grant moments of joy that last"
              body="Help grant meaningful wishes for children and young people in foster care. Every wish becomes part of our shared impact."
              bullets={[
                "Grant or sponsor a wish",
                "Share a wish with your friends",
                "Learn more about foster youth",
              ]}
              buttonText="Support a wish"
              buttonHref="https://www.onesimplewish.org/uday"
              buttonTarget="_blank"
              buttonRel="noopener noreferrer"
            />

            <PillarCard
              tag="Rescue Mission"
              icon="home"
              title="Stand with people rebuilding their lives"
              body="Shelter, meals, and recovery support for real people getting real chances to begin again."
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
            Start anywhere—you're stepping into the same circle of care.
          </p>
        </Container>
      </Section>

      <EmailSignup />

      <VideoSection
        videoSrc="/videos/14937676_3840_2160_30fps.mp4"
        overlayOpacity={0.45}
        overlayColor="dark"
        useGradient={true}
      >
        <div className="py-16 md:py-24 lg:py-28">
          <Container maxWidth="section">
            {/* Section intro */}
            <div className="mb-12 md:mb-16 lg:mb-20">
              <h2 className="fade-in-text text-[28px] md:text-[36px] lg:text-[42px] mb-4 md:mb-5 leading-tight text-white font-semibold">
                Stories from our shared coast
              </h2>
              <p className="fade-in-text text-[16px] md:text-[18px] text-white leading-relaxed opacity-75 max-w-3xl">
                The kinds of moments your support makes possible—up close and real.
              </p>
            </div>

            {/* Story blocks with icons */}
            <StoryBlock
              label="One Simple Wish"
              icon="sparkles"
              title="From just another day to a day they will never forget"
              body="A young person wished for something simple. Through supporters like you, that hope became a memory."
              linkText="See more wishes"
              linkHref="https://www.onesimplewish.org/uday"
              linkTarget="_blank"
              linkRel="noopener noreferrer"
            />

            <StoryBlock
              label="Rescue Mission"
              icon="shelter"
              title="A warm bed, a meal, and a new start"
              body="Behind every bed is a person with a name and a future. Your support helps someone take the first steps toward recovery."
              linkText="Hear from the first recipient"
              linkHref="/recovery-stories"
              linkEmphasized={true}
            />

            <StoryBlock
              label="Uday"
              icon="waves"
              title="Why this coast, this mission, and this community"
              body="The coast offers big sky, open water, endless horizon. This project brings that same openness to lives carrying more than most can see."
              linkText=""
              linkHref=""
            />
          </Container>
        </div>
      </VideoSection>

      <CoastalMonksBlock />

      <Footer />
    </main>
  );
}
