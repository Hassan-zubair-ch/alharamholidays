"use client";

import { useState } from "react";
import Image from "next/image";

const PLACEHOLDER = "/images/placeholder.svg";

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function PackageImage({ src, alt, fill = true, className = "", sizes, priority }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={fill ? "absolute inset-0 bg-slate-200 relative" : "relative bg-slate-200 min-h-[200px]"}>
        <Image
          src={PLACEHOLDER}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes ?? "800px"}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
