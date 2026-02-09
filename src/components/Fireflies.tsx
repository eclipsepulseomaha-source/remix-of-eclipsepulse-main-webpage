import { useEffect, useState } from "react";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  color: "blue" | "orange" | "amber";
  animationDuration: number;
  glowDelay: number;
  driftX: number;
  driftY: number;
}

const COLOR_MAP = {
  blue: "hsl(var(--primary))",
  orange: "hsl(var(--secondary))",
  amber: "hsl(var(--accent))",
};

const GLOW_MAP = {
  blue: "hsl(var(--primary) / 0.6)",
  orange: "hsl(var(--secondary) / 0.6)",
  amber: "hsl(var(--accent) / 0.6)",
};

const generateFireflies = (count: number): Firefly[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 3 + Math.random() * 4,
    color: (["blue", "orange", "amber"] as const)[Math.floor(Math.random() * 3)],
    animationDuration: 24 + Math.random() * 36,
    glowDelay: Math.random() * 12,
    driftX: -120 + Math.random() * 240,
    driftY: -120 + Math.random() * 240,
  }));

interface FirefliesProps {
  count?: number;
}

const Fireflies = ({ count = 18 }: FirefliesProps) => {
  const [fireflies] = useState(() => generateFireflies(count));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {fireflies.map((fly) => (
        <div
          key={fly.id}
          className="absolute rounded-full"
          style={{
            left: `${fly.x}%`,
            top: `${fly.y}%`,
            width: fly.size,
            height: fly.size,
            backgroundColor: COLOR_MAP[fly.color],
            boxShadow: `0 0 ${fly.size * 2}px ${fly.size}px ${GLOW_MAP[fly.color]}`,
            animation: `firefly-drift ${fly.animationDuration}s ease-in-out infinite, firefly-glow ${6 + Math.random() * 8}s ease-in-out ${fly.glowDelay}s infinite`,
            ["--drift-x" as string]: `${fly.driftX}px`,
            ["--drift-y" as string]: `${fly.driftY}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;
