import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

const DetailOverlay = ({
  title,
  subtitle,
  buttonText,
  href,
  imageAlt,
  imageSrc,
}: Props) => {
  return (
    <div className="relative h-72 md:h-96 flex justify-end">
      <div className="absolute inset-0 w-full h-full">
        <Image src={imageSrc!} alt={imageAlt!} layout="fill" />
      </div>
      <div className="absolute inset-x-0 bottom-0 md:inset-y-0 md:w-1/3 flex flex-row items-center md:items-start justify-between md:flex-col bg-black bg-opacity-75 backdrop-blur-sm p-4 md:p-6">
        <div>
          <p className="mb-1 font-medium text-xl text-white">{title}</p>
          <p className="text-base text-white text-opacity-80">{subtitle}</p>
        </div>
        <a
          href={href}
          className="text-sm items-center justify-center md:w-full"
        >
          <p>{buttonText}</p>
        </a>
      </div>
    </div>
  );
};

export default DetailOverlay;
