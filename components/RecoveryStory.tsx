import React from "react";

interface RecoveryStoryProps {
  name: string;
  quote: string;
  story: string;
  videoUrl?: string;
}

export default function RecoveryStory({
  name,
  quote,
  story,
  videoUrl,
}: RecoveryStoryProps) {
  return (
    <article className="pb-16 border-b border-warmGray border-opacity-20 last:border-0 last:pb-0">
      {/* Video Embed - if provided */}
      {videoUrl && (
        <div className="fade-in-text mb-8 w-full aspect-video bg-warmBeige rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          <iframe
            src={videoUrl}
            title={`Video: ${name}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Name/Title */}
      <h3 className="fade-in-text text-h2 mb-4 leading-tight text-charcoal font-semibold">
        {name}
      </h3>

      {/* Pull Quote */}
      <blockquote className="fade-in-text mb-6 pl-6 border-l-4 border-coastalTeal">
        <p className="text-body text-charcoal italic opacity-90 leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      {/* Story Text */}
      <div className="fade-in-text text-body text-charcoal leading-relaxed max-w-prose">
        <p>{story}</p>
      </div>
    </article>
  );
}
