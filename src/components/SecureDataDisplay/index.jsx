import { Img, Heading } from "./..";
import React from "react";

export default function SecureDataDisplay({
    headerText = "Secured Data",
    descriptionText = "Advanced security measures to protect your valuable data",
    groupImage = "img_group_1220.svg",
    ...props
}) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center gap-6 p-6 sm:p-5 bg-black-900 flex-1 rounded-[24px]`}
        >
            <div className="flex flex-col items-center gap-2 self-stretch">
                <Heading
                    size="header_header_web_h2_34px_bold"
                    as="h2"
                    className="text-[34px] font-bold text-white-a700"
                >
                    {headerText}
                </Heading>
                <Heading
                    size="body_body_web_b1_18px_medium"
                    as="p"
                    className="self-stretch text-center text-[18px] font-medium leading-[21px] text-white-a700"
                >
                    {descriptionText}
                </Heading>
            </div>
            <Img
                src={groupImage}
                width={190}
                height={160}
                alt="Profile image"
                className="mx-[58px] h-[160px] w-full"
            />
        </div>
    );
}
