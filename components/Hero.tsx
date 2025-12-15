import React from "react";
import Button from "./shared/Button";
import Container from "./shared/Container";
import ImageSection from "./shared/ImageSection";

export default function Hero() {
  return (
    <ImageSection
      backgroundImage="/images/istockphoto-177521471-612x612.jpg"
      overlayOpacity={0.3}
    >
      <div className="py-24 md:py-40">
        <Container>
          {/* Logo */}
          <div className="text-center mb-8 md:mb-12">
            <img
              src="/images/ChatGPT Image Dec 15, 2025, 01_26_50 AM.png"
              alt="Coastal Monks Logo"
              className="mx-auto h-24 md:h-32 w-auto"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(82, 160, 150, 0.4)) drop-shadow(0 0 30px rgba(82, 160, 150, 0.2))'
              }}
            />
          </div>

          {/* Main headline and subheadline */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1
              className="text-[40px] md:text-[64px] mb-8 text-white font-light tracking-wide leading-tight"
              style={{
                textShadow: '0 0 20px rgba(82, 160, 150, 0.6), 0 0 40px rgba(82, 160, 150, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              A coastal community for second chances
            </h1>
            <p
              className="text-[20px] md:text-[24px] mb-14 text-white font-light leading-relaxed"
              style={{
                textShadow: '0 0 15px rgba(82, 160, 150, 0.5), 0 0 30px rgba(82, 160, 150, 0.3), 1px 1px 3px rgba(0, 0, 0, 0.3)'
              }}
            >
              Uday, One Simple Wish, and Rescue Mission together in one home—bringing hope, dignity, and opportunity to people who need it most.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Button variant="primary" href="#help">
                See how you can help
              </Button>
              <Button variant="secondary" href="#coastal-monks">
                Meet Coastal Monks
              </Button>
            </div>

            {/* Support line */}
            <p
              className="text-[16px] md:text-[18px] text-white opacity-95 font-light leading-relaxed"
              style={{
                textShadow: '0 0 12px rgba(82, 160, 150, 0.4), 0 0 24px rgba(82, 160, 150, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            >
              Where a personal story, children's wishes, and recovery journeys meet the California coast.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto pt-12 border-t border-white border-opacity-30">
            <div className="text-center">
              <p
                className="text-[15px] md:text-[17px] text-white font-light leading-relaxed"
                style={{
                  textShadow: '0 0 10px rgba(82, 160, 150, 0.4), 0 0 20px rgba(82, 160, 150, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.2)'
                }}
              >
                100+ wishes supported
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-[15px] md:text-[17px] text-white font-light leading-relaxed"
                style={{
                  textShadow: '0 0 10px rgba(82, 160, 150, 0.4), 0 0 20px rgba(82, 160, 150, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.2)'
                }}
              >
                1,000+ nights of shelter funded
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-[15px] md:text-[17px] text-white font-light leading-relaxed"
                style={{
                  textShadow: '0 0 10px rgba(82, 160, 150, 0.4), 0 0 20px rgba(82, 160, 150, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.2)'
                }}
              >
                Coastal Monks: a growing circle of supporters
              </p>
            </div>
          </div>
        </Container>
      </div>
    </ImageSection>
  );
}
