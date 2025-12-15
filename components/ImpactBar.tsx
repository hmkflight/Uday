import React from "react";
import Container from "./shared/Container";

interface Metric {
  label: string;
}

interface ImpactBarProps {
  metrics: Metric[];
}

export default function ImpactBar({ metrics }: ImpactBarProps) {
  return (
    <div className="bg-warmBeige py-12 md:py-16 border-y border-warmBeige border-opacity-60">
      <Container>
        <div className="grid grid-cols-3 gap-6 md:gap-8 text-center">
          {metrics.map((metric, index) => (
            <div key={index}>
              <p className="text-small text-charcoal leading-relaxed">{metric.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
