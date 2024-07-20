import { twMerge } from 'tailwind-merge';

import { Icon } from "@/icon/icon"

export const Search = ({
    className,
    ...props
} : {
    className?: string;
} & React.ComponentProps<"input">
) => {
    return (
        <div className="relative h-8 w-full flex items-center">
            <Icon iconName="search" className="absolute left-2"/>
            <input className={twMerge("rounded-full flex flex-row bg-gray-200 h-full pl-9 pr-2 w-full", className)} {...props}/>
        </div>
    )
}