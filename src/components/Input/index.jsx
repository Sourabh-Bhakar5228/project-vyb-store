"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[24px]",
};

const variants = {
    fill: {
        background: "bg-background",
    },
};

const sizes = {
    xs: "h-[20px] px-2 pr-6 text-[14px]",
    sm: "h-[50px] px-2 text-[22px]",
    md: "h-[50px] px-3.5 text-[16px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name,
            placeholder = "",
            type = "text",
            label,
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "sm",
            color = "background",
            ...restProps
        },
        ref
    ) => {
        return (
            <label
                className={`flex items-center justify-center cursor-text ${className} ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
            >
                {!!label && <span>{label}</span>}
                {!!prefix && prefix}
                <input
                    ref={ref}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...restProps}
                />
                {!!suffix && suffix}
            </label>
        );
    }
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["xs", "sm", "md"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["background"]),
};

export { Input };
