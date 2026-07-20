interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PhoneMockup({ src, alt, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative aspect-[1080/2340] rounded-[2.2rem] bg-em-dark p-2.5 shadow-[0_30px_60px_-25px_rgba(26,39,68,0.55)] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-[1.6rem]"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
