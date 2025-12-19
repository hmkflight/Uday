import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import RecoveryStory from "@/components/RecoveryStory";
import Footer from "@/components/Footer";

export default function RecoveryStoriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-charcoal text-white py-20 md:py-28">
        <Container maxWidth="content">
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
        <Container>
          <SectionHeader
            title="Stories of hope and healing"
            intro="Each story represents a life changed, a family reunited, or a new chapter begun."
            centered={false}
          />

          <div className="space-y-16">
            {/* Example Story with Video */}
            <RecoveryStory
              name="Michael's Story"
              quote="I came here with nothing. They gave me a place to sleep, food to eat, and most importantly—hope that things could get better."
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              story="After years of struggle and uncertainty, Michael found his way to the Rescue Mission. What started as a safe place to sleep became the foundation for rebuilding his entire life. Through the Mission's recovery programs and supportive community, he found the strength to face his challenges and chart a new course."
            />

            {/* Example Story - Text Only */}
            <RecoveryStory
              name="Sarah's Journey"
              quote="The Rescue Mission didn't just give me shelter—they gave me back my dignity and a reason to believe in myself again."
              story="Sarah arrived at the Mission during one of the hardest winters in years. She was welcomed into a community that saw her not as a statistic, but as a person with inherent worth and untapped potential. Through counseling, job training, and the steady support of staff and volunteers, she gradually rebuilt her confidence and her life. Today, she works full-time and volunteers at the Mission, paying forward the kindness she once received."
            />

            {/* Example Story with Video */}
            <RecoveryStory
              name="James: From Despair to Purpose"
              quote="This place saved my life. Not just physically, but in every way that matters."
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              story="James's path to the Rescue Mission was long and painful. But within these walls, he discovered something he thought he'd lost forever: a sense of purpose. The comprehensive recovery programs helped him address the root causes of his struggles, while the community gave him accountability and belonging. Now stable and thriving, James credits the Mission with giving him not just a second chance, but a whole new life."
            />

            {/* Example Story - Text Only */}
            <RecoveryStory
              name="Maria's New Beginning"
              quote="I walked in broken. I walked out whole."
              story="Maria's story is one of quiet transformation. She came to the Mission seeking only temporary shelter, but found a family and a support system that believed in her even when she couldn't believe in herself. Through the Mission's wraparound services—from basic needs to life skills training to spiritual support—she slowly rebuilt her foundation. Today, she lives independently, maintains steady employment, and stays connected to the Mission community that helped her find her way."
            />
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
