import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const response = await fetch('https://www.onesimplewish.org/uday', {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch OSW page');
    }

    const html = await response.text();

    // Parse "X Wishes Granted So Far" using regex
    const match = html.match(/(\d+)\s+Wishes?\s+Granted\s+So\s+Far/i);

    if (match && match[1]) {
      const wishesGranted = parseInt(match[1], 10);
      return NextResponse.json({ wishesGranted });
    }

    // If no match found, return null
    return NextResponse.json({ wishesGranted: null });
  } catch (error) {
    console.error('Error fetching OSW stats:', error);
    return NextResponse.json({ wishesGranted: null }, { status: 200 });
  }
}
