import { twMerge } from "tailwind-merge";

export const Loader = ({
  useBackground = false,
  percentage = 40,
  className,
}: {
  useBackground?: boolean;
  percentage?: number;
  className?: string;
}) => (
  <svg className={twMerge("animate-spin", className)} viewBox="0 0 24 24">
    {useBackground && (
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
    )}
    <circle
      className="opacity-75"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
      strokeDasharray={`${(percentage * Math.PI * 2 * 10) / 100} ${Math.PI * 2 * 10}`}
    />
  </svg>
);
