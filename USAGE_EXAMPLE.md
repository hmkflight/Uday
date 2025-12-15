# ImageSection Usage Example

## Step 1: Place your image

Put your background image in:
```
/Users/teleport/Desktop/Uday/uday-site/public/images/hero-background.jpg
```

(Or any name you prefer - just update the path below)

## Step 2: Update your Hero component

Wrap the existing Hero content with ImageSection:

```tsx
// components/Hero.tsx
import React from "react";
import Button from "./shared/Button";
import Container from "./shared/Container";
import ImageSection from "./shared/ImageSection";

export default function Hero() {
  return (
    <ImageSection
      backgroundImage="/images/hero-background.jpg"
      overlayOpacity={0.5}
    >
      <div className="py-16 md:py-24">
        <Container>
          {/* Main headline and subheadline */}
          <div className="max-w-content mx-auto text-center mb-12">
            <h1 className="text-h1 mb-4">
              A coastal community for second chances
            </h1>
            <p className="text-body text-warmGray mb-8">
              Uday, One Simple Wish, and Rescue Mission together in one home—bringing hope, dignity, and opportunity to people who need it most.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button variant="primary" href="#help">
                See how you can help
              </Button>
              <Button variant="secondary" href="#coastal-monks">
                Meet Coastal Monks
              </Button>
            </div>

            {/* Support line */}
            <p className="text-small text-warmGray">
              Where a personal story, children's wishes, and recovery journeys meet the California coast.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-4 max-w-content mx-auto pt-8 border-t border-warmBeige">
            <div className="text-center">
              <p className="text-small text-warmGray">100+ wishes supported</p>
            </div>
            <div className="text-center">
              <p className="text-small text-warmGray">1,000+ nights of shelter funded</p>
            </div>
            <div className="text-center">
              <p className="text-small text-warmGray">Coastal Monks: a growing circle of supporters</p>
            </div>
          </div>
        </Container>
      </div>
    </ImageSection>
  );
}
```

## Adjusting overlay opacity

- `overlayOpacity={0.45}` - Lighter overlay, image more visible
- `overlayOpacity={0.5}` - Balanced (default)
- `overlayOpacity={0.6}` - Darker overlay, better text contrast

Choose based on your image brightness.

## Notes

- The overlay uses the same sand color (#FAFAF8) from your design system
- No parallax or animations - stays calm
- Mobile-first and accessible
- Works with `prefers-reduced-motion`
- Text remains readable if images fail to load
