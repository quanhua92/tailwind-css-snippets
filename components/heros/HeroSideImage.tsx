import clsx from "clsx";
import Image from "next/image";

interface ButtonData {
  name: string;
  href: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  button01?: ButtonData;
  button02?: ButtonData;
  imageSrc?: string;
  imageAlt?: string;
  imageOnLeft?: boolean;
}

const HeroSideImage = ({
  title = "",
  subtitle = "",
  button01,
  button02,
  imageSrc,
  imageAlt = "",
  imageOnLeft = false,
}: Props) => {
  return (
    <>
      <section className="max-w-7xl mx-auto text-center ">
        <div className="flex flex-col md:flex-row w-full">
          <div
            className={clsx("relative w-full md:w-1/2", {
              "order-last": !imageOnLeft,
            })}
          >
            <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full">
              {imageSrc && (
                <Image alt={imageAlt} src={imageSrc} layout="fill" />
              )}
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 pt-6 pb-16 sm:pb-24 ">
            <h1 className="text-gray-900 dark:text-gray-100">{title}</h1>
            <p className="mt-3 md:mt-5 max-w-md md:max-w-3xl mx-auto text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
            <div className="px-4 mt-5 w-full md:max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              {button01 && <p>{button01?.name}</p>}
              {button02 && (
                <p className="mt-3 sm:mt-0 sm:ml-3">{button02?.name}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSideImage;
