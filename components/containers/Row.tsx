import React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const RowContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "bg-white dark:bg-gray-900 min-h-screen flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};

const Row: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "min-h-screen flex items-center justify-center",
        className
      )}
    >
      <div className="sticky top-0 w-full h-fit">{children}</div>
    </div>
  );
};

export { Row, RowContainer };
