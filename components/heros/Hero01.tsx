interface ButtonData {
  name: string;
  href: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  button01?: ButtonData;
  button02?: ButtonData;
}

const Hero01 = ({ title = "", subtitle = "", button01, button02 }: Props) => {
  return (
    <>
      <section className="max-w-7xl mx-auto pt-6 pb-16 sm:pb-24 text-center ">
        <div className="flex flex-col w-full">
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
      </section>
    </>
  );
};

export default Hero01;
