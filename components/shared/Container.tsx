import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "content" | "section" | "full";
  className?: string;
}

export default function Container({
  children,
  maxWidth = "section",
  className = "",
}: ContainerProps) {
  const widthStyles = {
    content: "max-w-content",
    section: "max-w-section",
    full: "max-w-full",
  };

  return (
    <div className={`mx-auto px-6 md:px-12 ${widthStyles[maxWidth]} ${className}`}>
      {children}
    </div>
  );
}
