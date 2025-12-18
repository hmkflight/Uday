import React from "react";
import Button from "./shared/Button";
import Container from "./shared/Container";
import ImageSection from "./shared/ImageSection";

export default function Hero() {
  return (
    <ImageSection
      backgroundImage="/images/istockphoto-177521471-612x612.jpg"
      overlayOpacity={0.45}
      overlayColor="dark"
    >
      <div className="py-20 md:py-32">
        <Container>
          {/* Logo */}
          <div className="flex justify-center mb-10 md:mb-14">
            <img
              src="/images/Logos-removebg-preview.png"
              alt="Coastal Monks Logo"
              className="h-24 md:h-32 w-auto"
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))'
              }}
            />
          </div>

          {/* Main headline and subheadline */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h1 className="text-[36px] md:text-[52px] mb-4 text-white font-semibold leading-tight">
              A coastal community for second chances
            </h1>
            <p className="text-[18px] md:text-[22px] mb-12 text-white font-normal opacity-90 leading-relaxed max-w-2xl mx-auto">
              Uday, One Simple Wish, and Rescue Mission together in one home—bringing hope, dignity, and opportunity to people who need it most.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
              <Button variant="primary" href="#help">
                See how you can help
              </Button>
              <Button variant="secondary" href="#coastal-monks">
                Meet Coastal Monks
              </Button>
            </div>

            {/* Support line */}
            <p className="text-[15px] md:text-[17px] text-white opacity-80 font-normal leading-relaxed">
              Where a personal story, children's wishes, and recovery journeys meet the California coast.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 max-w-3xl mx-auto pt-10 border-t border-white border-opacity-25">
            <div className="text-center">
              <p className="text-[14px] md:text-[16px] text-white font-normal opacity-85 leading-relaxed">
                100+ wishes supported
              </p>
            </div>
            <div className="text-center">
              <p className="text-[14px] md:text-[16px] text-white font-normal opacity-85 leading-relaxed">
                1,000+ nights of shelter funded
              </p>
            </div>
            <div className="text-center">
              <p className="text-[14px] md:text-[16px] text-white font-normal opacity-85 leading-relaxed">
                Coastal Monks: a growing circle of supporters
              </p>
            </div>
          </div>
        </Container>
      </div>
    </ImageSection>
  );
}
