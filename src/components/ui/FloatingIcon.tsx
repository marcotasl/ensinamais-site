/*
 * FloatingIcon — ícone 3D claymation posicionado entre sections.
 * Z-index alto, animação float, deslocamento lateral.
 * Posiciona-se absolute em relação a um wrapper relative que sirva de gap.
 *
 * Uso:
 *   <div className="relative h-0">
 *     <FloatingIcon src="/images/3d/rocket.webp" side="right" offsetY={-40} size={140} delay={0.5} />
 *   </div>
 */

interface FloatingIconProps {
  src: string;
  alt?: string;
  side?: "left" | "right";
  /** offset lateral relativo à borda (negativo "sai" pra fora do viewport, positivo "puxa pra dentro") */
  offsetX?: number;
  /** offset vertical em relação ao top do wrapper */
  offsetY?: number;
  size?: number;
  delay?: number;
  /** rotação base aplicada (animação adiciona ±3°) */
  rotate?: number;
}

export default function FloatingIcon({
  src,
  alt = "",
  side = "right",
  offsetX = -20,
  offsetY = 0,
  size = 130,
  delay = 0,
  rotate = 0,
}: FloatingIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={!alt}
      className="hidden md:block absolute pointer-events-none select-none animate-float drop-shadow-[0_18px_22px_rgba(26,39,68,0.18)]"
      style={{
        [side]: offsetX,
        top: offsetY,
        width: size,
        zIndex: 30,
        animationDelay: `${delay}s`,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}
