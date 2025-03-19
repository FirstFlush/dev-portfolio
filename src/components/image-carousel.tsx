'use client'
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect, useState, useCallback } from "react";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = useCallback(() => {
    if (!embla) return;
    setCurrentIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", updateIndex);
  }, [embla, updateIndex]);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div ref={emblaRef} className="overflow-hidden rounded-lg">
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="min-w-full">
              <img src={image.src} alt={image.alt} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 cursor-pointer rounded-full transition-colors ${
              index === currentIndex ? "bg-teal-300 hover:bg-teal-400" : "bg-gray-700 hover:bg-teal-700"
            }`}
            onClick={() => embla?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
