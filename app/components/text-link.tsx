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
      className="text-link"
    >
      {children}
    </a>
  );
}
