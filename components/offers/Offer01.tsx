import React from "react";
import clsx from "clsx";

type Item = {
  title: string;
  subtitle: string;
  href: string;
};

interface Props {
  className?: string;
  items: Item[];
}

const Offer01 = ({ className, items }: Props) => {
  const numItems = items.length;
  return (
    <ul
      className={clsx(
        className,
        `grid`,
        {
          "grid-cols-3": numItems === 3,
          "grid-cols-4": numItems === 4,
          "grid-cols-5": numItems === 5,
        },
        "divide-y divide-gray-200 dark:divide-gray-700 md:divide-y-0 md:divide-x",
        "text-gray-900 dark:text-gray-100"
      )}
    >
      {items.map((item, i) => {
        const { title, subtitle, href } = item;
        return (
          <li key={i}>
            <a
              href={href}
              className="flex flex-col justify-center text-center py-6 px-4 focus:z-10"
            >
              <p>{title}</p>
              <p className="font-semibold">{subtitle}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Offer01;
