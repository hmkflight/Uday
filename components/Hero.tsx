import React from "react";
import Button from "./shared/Button";
import Container from "./shared/Container";
import VideoSection from "./shared/VideoSection";

export default function Hero() {
  return (
    <VideoSection
      videoSrc="/videos/14937676_3840_2160_30fps.mp4"
      overlayOpacity={0.42}
      overlayColor="dark"
      useGradient={true}
    >
      <div className="py-16 md:py-28 lg:py-32">
        <Container>
          {/* Logo */}
          <div className="flex justify-center mb-8 md:mb-12 lg:mb-14">
            <img
              src="/images/logo.png"
              alt="Coastal Monks Logo"
              className="h-20 md:h-28 lg:h-32 w-auto"
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))'
              }}
            />
          </div>

          {/* Main headline and subheadline */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20 px-4">
            <h1 className="fade-in-text text-[30px] md:text-[48px] lg:text-[56px] mb-5 md:mb-6 text-white font-semibold leading-[1.25] md:leading-tight">
              A coastal partnership of friendship and love
            </h1>
            <p className="fade-in-text text-[17px] md:text-[20px] lg:text-[22px] mb-8 md:mb-10 text-white font-normal opacity-85 md:opacity-90 leading-relaxed max-w-2xl mx-auto">
              Three ways to help—wishes, shelter, and love loans—all in one coastal home.
            </p>

            {/* CTAs - Mobile first: full width stacked, desktop: horizontal */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center mb-6 md:mb-8 max-w-md md:max-w-none mx-auto">
              <Button variant="primary" href="#help" className="w-full md:w-auto">
                See how you can help
              </Button>
              <Button variant="secondary" href="#coastal-monks" className="w-full md:w-auto">
                Meet Coastal Monks
              </Button>
            </div>

            {/* New supporting line */}
            <p className="fade-in-text text-[15px] md:text-[16px] lg:text-[17px] text-white opacity-75 md:opacity-80 font-normal leading-relaxed mb-3 md:mb-4">
              Start with a story, a wish, or a place to begin again.
            </p>

            {/* Original support line - slightly de-emphasized */}
            <p className="fade-in-text text-[14px] md:text-[15px] lg:text-[16px] text-white opacity-65 md:opacity-70 font-normal leading-relaxed">
              Where personal stories and real needs meet the California coast.
            </p>
          </div>

          {/* Stats strip - Mobile optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-12 max-w-2xl mx-auto pt-8 md:pt-10 border-t border-white border-opacity-20 px-4">
            <div className="text-center">
              <p className="text-[16px] md:text-[18px] text-white font-semibold mb-1">
                250+
              </p>
              <p className="text-[13px] md:text-[14px] text-white opacity-70 leading-relaxed">
                wishes supported
              </p>
            </div>
            <div className="text-center">
              <p className="text-[16px] md:text-[18px] text-white font-semibold mb-1">
                Growing
              </p>
              <p className="text-[13px] md:text-[14px] text-white opacity-70 leading-relaxed">
                circle of supporters
              </p>
            </div>
          </div>
        </Container>
      </div>
    </VideoSection>
  );
}
