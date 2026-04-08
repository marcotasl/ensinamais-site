interface WaveProps {
  color: string;
  flip?: boolean;
  height?: number;
}

export default function Wave({ color, flip = false, height = 60 }: WaveProps) {
  return (
    <div
      className="leading-none overflow-hidden"
      style={{
        marginTop: flip ? 0 : -1,
        marginBottom: flip ? -1 : 0,
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        className="w-full block"
        style={{ height }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,100 480,0 720,50 C960,100 1200,10 1440,60 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
