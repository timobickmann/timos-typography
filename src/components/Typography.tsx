import type React from "react";

export function H1({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1
      className={`${className} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
    >
      {children}
    </h1>
  );
}

export function H2({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={`${className} scroll-m-20  text-3xl font-semibold tracking-tight`}
    >
      {children}
    </h2>
  );
}

export function H3({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      className={`${className} scroll-m-20 text-2xl font-semibold tracking-tight`}
    >
      {children}
    </h3>
  );
}

export function H4({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h4
      className={`${className} scroll-m-20 text-xl font-semibold tracking-tight`}
    >
      {children}
    </h4>
  );
}

export function P({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`${className} leading-7 [&:not(:first-child)]:mt-6`}>
      {children}
    </p>
  );
}

export function Blockquote({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote
      className={`${className} mt-6 border-l-2 border-border pl-6 italic`}
    >
      "{children}"
    </blockquote>
  );
}

export function Code({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <code
      className={`${className} relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`}
    >
      {children}
    </code>
  );
}

export function Lead({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`${className} text-xl text-muted-foreground`}>{children}</p>
  );
}

export function Large({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`${className} text-lg font-semibold`}>{children}</div>;
}

export function Small({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <small className={`${className} text-sm font-medium leading-none`}>
      {children}
    </small>
  );
}

export function Muted({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`${className} text-sm text-muted-foreground`}>{children}</p>
  );
}

export function ExternalLink({
  className = "",
  children,
  href,
}: {
  className?: string;
  children?: React.ReactNode;
  href: string;
}) {
  return (
    
      <a
        className={`${className} relative after:absolute after:bg-foreground after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-400`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children || href}
      </a>
    
  );
}
