import React from "react";
import clsx from "clsx";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

interface RowProps {
  center?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const RowContainer: React.FC<ContainerProps> = ({ className, children }) => {
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

const Row: React.FC<RowProps> = ({ className, children, center = true }) => {
  return (
    <div
      className={clsx(
        "min-h-screen flex",
        { "items-center": center },
        className
      )}
    >
      <div className="sticky top-0 w-full h-fit">{children}</div>
    </div>
  );
};

export { Row, RowContainer };
