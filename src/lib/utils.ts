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
  console.log("original dateString:", dateString);
  const updateDate = new Date(dateString);
  console.log("updateDate:", updateDate);

  const now = new Date();
  // subtract 5 hours from the update date
  const pktTimeOffset = 5 * 60 * 60 * 1000; // 5 hours in milliseconds

  const diffInHours = Math.floor(
    (now.getTime() - (updateDate.getTime() - pktTimeOffset)) / (1000 * 60 * 60)
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
