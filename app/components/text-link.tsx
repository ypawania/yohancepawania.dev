import React from "react";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

export default function TextLink({
  href,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
}: TextLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="text-link underline underline-offset-2 transition-all duration-150 hover:italic"
    >
      {children}
    </a>
  );
}
