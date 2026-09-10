import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const yearsOfExperience = () => {
  const startDate = new Date("2022-09-18");
  const today = new Date();

  const diffInMs = today.getTime() - startDate.getTime();
  const exactYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

  return exactYears.toFixed(1).replace(/\.0$/, "");
};
