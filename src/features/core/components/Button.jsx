import React from "react";

import { cn } from "../../../../utils/lib/cn";

const Button = ({
    children,
    className,
    ...props
}) => {
    return (
        <a
            {...props}
            className={cn("mb-0 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", className)}
        >
            {children}
        </a>
    );
};

export default Button;
