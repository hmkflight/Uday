import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  href = "#",
  onClick,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-block px-8 py-4 rounded-lg font-medium transition-all duration-300 text-center min-h-[44px] min-w-[44px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]" +
    " font-sans";

  const variantStyles = {
    primary: "bg-coastalTeal text-white hover:bg-opacity-95 hover:scale-[1.01]",
    secondary:
      "border-2 border-coastalTeal text-coastalTeal hover:bg-coastalTeal hover:bg-opacity-10 hover:scale-[1.01] bg-pureWhite",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedStyles}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={combinedStyles} target={target} rel={rel}>
      {children}
    </a>
  );
}
