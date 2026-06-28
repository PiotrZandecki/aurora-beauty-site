"use client";

import {
  Children,
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealVariant = "fade-up" | "fade-in" | "scale-in";

type RevealStyle = CSSProperties & {
  "--reveal-delay"?: string;
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  stagger?: boolean;
  staggerDelay?: number;
  threshold?: number;
};

export function Reveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  stagger = false,
  staggerDelay = 80,
  threshold = 0.16,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;

    if (!currentElement) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const revealStyle: RevealStyle = {
    "--reveal-delay": `${delay}ms`,
  };

  if (stagger) {
    return (
      <div ref={ref} className={className}>
        {Children.map(children, (child, index) => {
          const childStyle: RevealStyle = {
            "--reveal-delay": `${delay + index * staggerDelay}ms`,
          };

          return (
            <div
              style={childStyle}
              className={["reveal-child", isVisible ? "is-visible" : ""]
                .filter(Boolean)
                .join(" ")}
            >
              {child}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={revealStyle}
      className={[
        "reveal",
        `reveal-${variant}`,
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
