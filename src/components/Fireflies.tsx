import { useState, useMemo } from "react";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  color: "blue" | "orange" | "amber";
  animationDuration: number;
  glowDuration: number;
  glowDelay: number;
  waypoints: { x: number; y: number }[];
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

// Weighted: blue appears 3x more often than orange or amber
const pickColor = (): "blue" | "orange" | "amber" => {
  const r = Math.random();
  if (r < 0.6) return "blue";       // 60% blue
  if (r < 0.8) return "orange";     // 20% orange
  return "amber";                    // 20% amber
};

// Generate 5-8 waypoints with minimum 25vw total path length
const generateWaypoints = (): { x: number; y: number }[] => {
  const count = 5 + Math.floor(Math.random() * 4); // 5-8 waypoints
  const points: { x: number; y: number }[] = [];

  // First waypoint: moderate distance from origin
  points.push({
    x: -15 + Math.random() * 30,
    y: -15 + Math.random() * 30,
  });

  for (let i = 1; i < count; i++) {
    const prev = points[i - 1];
    // Each step moves at least 8vw in some direction, with randomness
    const angle = Math.random() * Math.PI * 2;
    const dist = 8 + Math.random() * 18; // 8-26vw per segment
    points.push({
      x: prev.x + Math.cos(angle) * dist,
      y: prev.y + Math.sin(angle) * dist,
    });
  }

  return points;
};

const generateFireflies = (count: number): Firefly[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 4.2 + Math.random() * 5.6,
    color: pickColor(),
    animationDuration: 48 + Math.random() * 72,
    glowDuration: 6 + Math.random() * 8,
    glowDelay: Math.random() * 12,
    waypoints: generateWaypoints(),
  }));

// Build a unique @keyframes rule for each firefly
const buildKeyframes = (id: number, waypoints: { x: number; y: number }[]) => {
  const name = `firefly-path-${id}`;
  const totalSteps = waypoints.length + 1; // +1 for return to origin
  const lines = [`@keyframes ${name} {`];
  lines.push(`  0%, 100% { transform: translate(0, 0); }`);

  waypoints.forEach((wp, i) => {
    const pct = Math.round(((i + 1) / totalSteps) * 100);
    lines.push(`  ${pct}% { transform: translate(${wp.x.toFixed(1)}vw, ${wp.y.toFixed(1)}vh); }`);
  });

  lines.push(`}`);
  return { name, css: lines.join("\n") };
};

interface FirefliesProps {
  count?: number;
}

const Fireflies = ({ count = 18 }: FirefliesProps) => {
  const [fireflies] = useState(() => generateFireflies(count));

  const styleSheet = useMemo(() => {
    return fireflies
      .map((fly) => buildKeyframes(fly.id, fly.waypoints).css)
      .join("\n");
  }, [fireflies]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      <style>{styleSheet}</style>
      {fireflies.map((fly) => (
        <div
          key={fly.id}
          className="absolute"
          style={{
            left: `${fly.x}%`,
            top: `${fly.y}%`,
            width: fly.size * 3,
            height: fly.size * 3,
            animation: `firefly-path-${fly.id} ${fly.animationDuration}s ease-in-out infinite, firefly-glow ${fly.glowDuration}s ease-in-out ${fly.glowDelay}s infinite`,
          }}
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            {/* Outer glow starburst - same shape, 2x bigger, blurred & transparent */}
            <polygon
              points="50,0 53,40 80,6 56,42 100,50 56,58 80,94 53,60 50,100 47,60 20,94 44,58 0,50 44,42 20,6 47,40"
              fill={COLOR_MAP[fly.color]}
              opacity={0.3}
              transform="scale(2) translate(-25, -25)"
              filter="url(#glow-blur)"
            />
            {/* Core starburst */}
            <polygon
              points="50,0 53,40 80,6 56,42 100,50 56,58 80,94 53,60 50,100 47,60 20,94 44,58 0,50 44,42 20,6 47,40"
              fill={COLOR_MAP[fly.color]}
            />
            <defs>
              <filter id="glow-blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Fireflies;
