import React from "react";

const sizes = {
    header_header_web_h3_27px_bold: "text-[27px] font-bold md:text-[25px] sm:text-[23px]",
    header_header_web_h1_40px_bold: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
    header_header_web_h2_34px_bold: "text-[34px] font-bold md:text-[32px] sm:text-[30px]",
    body_body_web_b1_18px_medium: "text-[18px] font-medium",
    body_body_web_b2_16_medium: "text-[16px] font-medium",
    header_header_mobile_h5_mobile_14px_bold: "text-[14px] font-bold",
    header_header_mobile_h3_mobile_18px_bold: "text-[18px] font-bold",
    cta_cta_web_18px_semibold: "text-[18px] font-semibold",
    header_header_mobile_h5_16px_semi_bold: "text-[16px] font-bold",
    header_header_mobile_h4_mobile_16px_bold: "text-[16px] font-bold",
    body_body_mobile_b2_mobile_14px_medium: "text-[14px] font-medium",
    cta_mobile_12px_semibold: "text-[12px] font-semibold",
    texts: "text-[7px] font-medium",
    textmd: "text-[8px] font-medium",
    textxl: "text-[12px] font-medium",
    headingxs: "text-[8px] font-bold",
    headings: "text-[10px] font-bold",
    headingmd: "text-[11px] font-bold",
    headinglg: "text-[12px] font-bold",
    headingxl: "text-[13px] font-extrabold",
    heading2x1: "text-[22px] font-bold",
    heading3x1: "text-[180px] font-bold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "header_header_web_h3_27px_bold", as, ...restProps }) => {
    const Component = as || "h6";
    return (
        <Component className={`text-white-a700 font-urbanist ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Heading };
