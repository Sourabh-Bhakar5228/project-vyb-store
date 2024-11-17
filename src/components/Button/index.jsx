import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[12px]",
};

const variants = {
    outline: {
        red_A200_blue_A200_01: "border border-solid red_A200_blue_A200_01_border",
        blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-white-a700",
    },
    fill: {
        green_A400: "bg-green-a400 text-black-900",
        white_A700: "bg-white-a700 text-black-900",
    },
};

const sizes = {
    sm: "h-[38px] px-6 text-[12px]",
    md: "h-[42px] px-[34px] text-[14px]",
    lg: "h-[46px] px-[34px] text-[18px]",
    xl: "h-[54px] px-6 text-[18px]",
    "2xl": "h-[96px] px-2.5 text-[64px]",
    xs: "h-[30px] pl-[26px] pr-2 text-[18px]",
};

const Button = ({
    children,
    className,
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "white_A700",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "xs"]),
    variant: PropTypes.oneOf(["outline", "fill"]),
    color: PropTypes.oneOf(["red_A200_blue_A200_01", "blue_gray_100_01", "green_A400", "white_A700"]),
};

export { Button };
