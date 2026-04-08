interface BlobProps {
  color: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
}

export default function Blob({
  color,
  size = 200,
  top,
  left,
  right,
  bottom,
  opacity = 0.12,
}: BlobProps) {
  return (
    <div
      className="absolute rounded-full blur-[40px] pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        opacity,
        top,
        left,
        right,
        bottom,
      }}
    />
  );
}
