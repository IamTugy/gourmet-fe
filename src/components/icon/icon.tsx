import { twMerge } from 'tailwind-merge';


type FontVariationSettings = {
  FILL?: number;
  wght?: number;
  GRAD?: number;
  opsz?: number;
};


export const Icon = ({
  className,
  iconName,
  FILL = 0,
  wght = 400,
  GRAD = 0,
  opsz = 20,
  ...props
}: {
  iconName: string;
  className?: string;
} & FontVariationSettings & React.ComponentProps<"span">) => (
  <span
    style={{
      fontVariationSettings: `'FILL' ${FILL}, 'wght' ${wght}, 'GRAD' ${GRAD}, 'opsz' ${opsz}`,
    }}
    className={twMerge("material-symbols-rounded", className)}
    {...props}
  >
    {iconName}
  </span>
);
