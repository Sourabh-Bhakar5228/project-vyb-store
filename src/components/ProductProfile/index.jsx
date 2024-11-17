import { Heading, Img } from "./..";
import React from "react";

export default function ProductProfile({
    productImage = "img_rectangle_160441.png",
    productName = "TeeTrend",
    productDesigner = "Samira Hadid",
    productDescription,
    imageFive,
    productPrice,
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex items-center px-2`}>
            <div className="flex w-full items-center gap-1.5">
                <Img
                    src={productImage}
                    width={78}
                    height={24}
                    alt="Product Image"
                    className="h-[24px] w-[50%] self-end rounded-md object-contain"
                />
                <div className="flex flex-1 flex-col gap-5">
                    <div className="flex flex-col items-start justify-center">
                        <Heading
                            size="header_header_mobile_h4_mobile_16px_bold"
                            as="h6"
                            className="text-[16px] font-bold text-white-a700"
                        >
                            {productName}
                        </Heading>
                        <Heading
                            size="body_body_mobile_b2_mobile_14px_medium"
                            as="p"
                            className="mt-1 text-[14px] font-medium text-white-a700"
                        >
                            {productDesigner}
                        </Heading>
                        <Heading size="texts" as="p" className="text-[7.79px] font-medium text-white-a700">
                            <span>Explo</span>
                            <span className="text-[14px] font-normal">
                                This T-shirt features a captivating design with a vintage-inspired globe motif, encouraging you to step out of your comfort zone and embark on new adventures. Experience Delhi's essence with our comprehensive guidebook. Tailored itineraries cater to various lorem ipsum.
                            </span>
                        </Heading>
                    </div>
                    <div className="flex flex-col items-start gap-[30px]">
                        {!!imageFive ? (
                            <Img
                                src={imageFive}
                                width={46}
                                height={1}
                                alt="Secondary Image"
                                className="h-px object-cover"
                            />
                        ) : null}
                        {!!productPrice ? (
                            <Heading
                                size="header_header_mobile_h4_mobile_16px_bold"
                                as="h6"
                                className="text-[16px] font-bold text-white-a700"
                            >
                                {productPrice}
                            </Heading>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
