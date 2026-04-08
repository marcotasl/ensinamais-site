interface DotGridProps {
  color?: string;
  size?: number;
  top?: string;
  right?: string;
}

export default function DotGrid({
  color = "rgba(255,255,255,0.08)",
  size = 300,
  top,
  right,
}: DotGridProps) {
  const dots = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      dots.push(
        <circle key={`${r}-${c}`} cx={c * 18 + 9} cy={r * 18 + 9} r="2" fill={color} />
      );
    }
  }

  return (
    <svg
      width={size * 0.5}
      height={size * 0.5}
      viewBox="0 0 144 144"
      className="absolute pointer-events-none opacity-60"
      style={{ top, right }}
    >
      {dots}
    </svg>
  );
}
