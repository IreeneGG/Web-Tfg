import * as React from 'react';

import { cn } from "@/lib/utils";

const Title = React.forwardRef(({ className, children, ...props }, ref) => (
    <div className='flex justify-center items-center w-full z-10 pt-7 pb-2 text-[#003629]'>
        <h1 ref={ref} className={cn(className, "text-5xl font-bold text-center w-full")} {...props}>
            {children}
        </h1>
    </div>
));

Title.displayName = 'Title';

const SectionT = React.forwardRef(({ className, children, title, ...props }, ref) => (
    <section className='max-w-[90%]'>
        <h2 className="text-3xl font-extrabold pb-2 flex justify-center pt-2 w-full">{title}</h2>
        <div ref={ref} className={cn(className, 'flex justify-center items-center w-full z-0 mb-20')} {...props}>
            {children}
        </div>
    </section>
));

SectionT.displayName = 'SectionT';

const Section = React.forwardRef(({ className, children, title, ...props }, ref) => (
    <section className='max-w-[90%]'>
        <div ref={ref} className={cn(className, 'flex justify-center items-center text-center w-full z-0 mb-20')} {...props}>
            {children}
        </div>
    </section>
));
Section.displayName = 'Section';

export { Title, Section,SectionT };