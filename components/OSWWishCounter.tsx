"use client";

import { useEffect, useState } from "react";

export default function OSWWishCounter() {
  const [wishesGranted, setWishesGranted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWishes() {
      try {
        const response = await fetch('/api/osw-uday-stats');
        const data = await response.json();
        setWishesGranted(data.wishesGranted);
      } catch (error) {
        console.error('Failed to fetch wish counter:', error);
        setWishesGranted(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWishes();
  }, []);

  return (
    <p className="text-[14px] md:text-[15px] text-charcoal opacity-70 mb-6 md:mb-7 leading-relaxed">
      Wishes granted so far: {isLoading || wishesGranted === null ? '—' : wishesGranted}
    </p>
  );
}
