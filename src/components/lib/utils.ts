import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  delay: number = 300
): (...args: Parameters<T>) => void {
  let shouldRun = true;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (!shouldRun) return;

    func.apply(this, args);
    shouldRun = false;

    setTimeout(() => {
      shouldRun = true;
    }, delay);
  };
}
