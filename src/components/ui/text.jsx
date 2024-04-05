import * as React from 'react';



const Text = React.forwardRef(({ className, children, ...props }, ref) => (

    <p className="text-black text-left p-4 items-center pl-10 dark:text-shite">
        {children}
    </p>

));

Text.displayName = 'Text';
