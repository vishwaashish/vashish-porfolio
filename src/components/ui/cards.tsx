import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../lib/utils";

interface SectionWithHeaderProps extends ComponentPropsWithoutRef<"section"> {
  title: string;
  description?: string;
  name?: string;
  children?: ReactNode;
  hasContainer?: boolean;
}
export const SectionWithHeader = ({
  title,
  description,
  name,
  className,
  hasContainer = true,
  children,
  ...rest
}: SectionWithHeaderProps) => {
  return (
    <section
      className={cn(
        "flex flex-col gap-10",
        hasContainer && "container",
        className
      )}
      {...rest}
    >
      <div className=" flex flex-col gap-3 text-center max-w-4xl mx-auto">
        {name && <h4 className="text-primary">{name}</h4>}
        <h3 className="text-heading-md font-semibold">{title}</h3>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
};
