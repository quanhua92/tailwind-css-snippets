import React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
  icon?: JSX.Element;
}

const Card = ({ className, title, subtitle, icon }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "group lg:grid lg:grid-cols-12 lg:grid-rows-1 items-center justify-between p-5",
        "text-gray-900 dark:text-gray-100"
      )}
    >
      <div className="lg:col-start-12 lg:col-span-1 lg:row-start-1 flex items-center justify-center">
        <div className="w-16 xl:w-24 rounded-full">{icon}</div>
      </div>
      <div className="lg:col-start-1 lg:col-span-10 lg:row-start-1">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
