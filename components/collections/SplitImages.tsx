import Image from "next/image";

interface Data {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface Props {
  leftPanel: Data;
  rightPanel: Data;
}

const Panel = ({
  title,
  subtitle,
  buttonText,
  href,
  imageAlt,
  imageSrc,
}: Data) => {
  return (
    <div className="relative h-72 md:h-96">
      <div className="absolute inset-0 w-full h-full">
        <Image src={imageSrc!} alt={imageAlt!} layout="fill" />
      </div>
      <div className="relative w-full h-full flex flex-col items-start justify-end bg-black bg-opacity-40 p-6 md:p-8">
        <p className="text-lg font-medium text-white text-opacity-75">
          {subtitle}
        </p>
        <p className="mt-1 font-medium text-2xl text-white">{title}</p>
        <a href={href} className="mt-4 text-sm">
          <p>{buttonText}</p>
        </a>
      </div>
    </div>
  );
};

const SplitImages = ({ leftPanel, rightPanel }: Props) => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
      <Panel {...leftPanel} />
      <Panel {...rightPanel} />
    </div>
  );
};

export default SplitImages;
