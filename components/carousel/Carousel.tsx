import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaPluginType,
} from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import clsx from "clsx";
import styles from "@styles/carousel.module.css";

interface ContextValue {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
});

interface Props {
  autoplay?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Carousel: React.FC<Props> = ({
  autoplay = true,
  className,
  children,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  let plugins: EmblaPluginType[] = [ClassNames()];
  if (autoplay) plugins.push(Autoplay());
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    plugins
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        embla: emblaApi,
        selectedIndex,
      }}
    >
      <div
        ref={emblaRef}
        className={clsx("w-full overflow-hidden", className, styles.viewport)}
      >
        <div className={clsx("flex", styles.container)}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
