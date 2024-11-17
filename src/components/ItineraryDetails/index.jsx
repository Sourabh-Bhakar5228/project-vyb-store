import { Button, Img, Heading } from "../";
import React from "react";

export default function ItineraryDetails({
    itineraryTitle = "Darjeeling Itinerary",
    location = "West Bengal",
    buttonText = "Samira Hadid",
    ...props
}) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center justify-end h-[480px] w-[16%] md:w-full md:h-auto px-2 py-3 bg-cover bg-no-repeat rounded-[16px]`}
        >
            <div className="mt-[366px] flex flex-col items-center self-stretch p-1">
                <Heading size="heading2x1" as="h5" className="text-[22px] font-bold text-white-a700">
                    {itineraryTitle}
                </Heading>
                <Heading size="body_body_web_b1_18px_medium" as="p" className="text-[18px] font-medium text-white-a700">
                    {location}
                </Heading>
            </div>
            <Button
                shape="round"
                rightIcon={
                    <Img
                        src="img_1_22x22.png"
                        width={22}
                        height={22}
                        alt="1"
                        className="h-[22px] w-[22px] rounded-[18px] object-cover"
                    />
                }
                className="mx-[30px] gap-[18px] self-stretch rounded-[14px] font-medium"
            >
                {buttonText}
            </Button>
        </div>
    );
}
