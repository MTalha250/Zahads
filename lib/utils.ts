import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isFullName(name: string): boolean {
  const words = name.trim().split(/\s+/); // Split by one or more spaces and trim any leading/trailing spaces
  return words.length === 2;
}
