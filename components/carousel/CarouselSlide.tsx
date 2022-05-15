import React, { useCallback, useContext } from "react";
import clsx from "clsx";
import { CarouselContext } from "@components/carousel/Carousel";
import styles from "@styles/carousel.module.css";

interface Props {
  index: number;
  children: JSX.Element;
}

const CarouselSlide: React.FC<Props> = ({ index, children }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext);
  const isActive = selectedIndex === index;

  const handleClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi, index]);

  return (
    <div
      className={clsx("relative", styles.slide, {
        active: isActive,
      })}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default CarouselSlide;
