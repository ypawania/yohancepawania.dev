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
      className="underline decoration-neutral-400 underline-offset-2 text-neutral-100 transition-all duration-150 hover:text-neutral-50 hover:italic hover:decoration-neutral-200"
    >
      {children}
    </a>
  );
}
