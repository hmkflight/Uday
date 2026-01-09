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
    <div className="mt-6 mb-4 md:mt-7 md:mb-5">
      <div className="border-l-2 border-coastalTeal bg-coastalTeal bg-opacity-5 rounded-md py-2 px-3">
        <p className="text-[14px] md:text-[15px] text-charcoal leading-relaxed">
          <span className="font-medium opacity-80">Wishes granted so far: </span>
          <span className="font-semibold opacity-90">
            {isLoading || wishesGranted === null ? '—' : wishesGranted}
          </span>
        </p>
      </div>
    </div>
  );
}
