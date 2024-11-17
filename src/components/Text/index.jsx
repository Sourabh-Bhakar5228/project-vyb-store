import React from "react";

const sizes = {
    textxs: "text-[5px] font-normal not-italic",
    textlg: "text-[11px] font-normal not-italic",
    text2xl: "text-[29px] font-normal not-italic md:text-[27px] sm:text-[25px]",
    text3xl: "text-[34px] font-normal not-italic md:text-[32px] sm:text-[30px]",
};

const Text = ({ children, className = "", size = "text2xl", as = "p", ...restProps }) => {
    const Component = as;
    return (
        <Component className={`text-gray-500 font-caveatbrush ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };
