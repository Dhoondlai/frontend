import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Format price in Pakistani Rupees
export const formatPrice = (price: number) => {
  return `Rs. ${price.toLocaleString()}`;
};

// Format date
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-PK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Calculate time since last update
export const getTimeSinceUpdate = (dateString: string) => {
  const updateDate = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor(
    (now.getTime() - updateDate.getTime()) / (1000 * 60 * 60)
  );

  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  }
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
