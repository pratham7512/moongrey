"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type TravelImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/** Keeps content cards whole if a remote editorial image is unavailable. */
export function TravelImage({ src, alt, ...props }: TravelImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      src={hasError ? "/images/moongrey-story-hero.png" : src}
      alt={alt}
      onError={() => setHasError(true)}
    />
  );
}
