import { Img } from "./..";
import React from "react";

export default function UserProfileImage({
    userImage = "img_2_1.png",
    ...props
}) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center w-[24%] md:w-full`}
        >
            <Img
                src={userImage}
                width={268}
                height={268}
                alt="Column Image"
                className="h-[268px] w-full rounded-[134px] object-cover"
            />
        </div>
    );
}
