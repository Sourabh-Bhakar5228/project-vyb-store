import { Img, Button, Heading } from "../../components";
import React from "react";

export default function HomePageMainSection() {
    return (
        <>
            {/* home page main section */}
            <div className="flex justify-center self-stretch">
                <div className="container-xs flex justify-center gap-9 md:flex-col md:px-5">
                    <div className="flex w-full flex-col gap-11">
                        <div>
                            <div className="flex flex-col items-start gap-3">
                                <div className="flex gap-3 self-stretch">
                                    <Button
                                        size="2x1"
                                        shape="round"
                                        className="min-w-[140px] rounded-[12px] px-2.5 font-bold"
                                    >
                                        One
                                    </Button>
                                    <Button
                                        size="2x1"
                                        shape="round"
                                        className="min-w-[156px] rounded-[12px] px-2.5 font-bold"
                                    >
                                        Stop
                                    </Button>
                                </div>
                                <Button
                                    size="2x1"
                                    shape="round"
                                    className="min-w-[386px] rounded-[12px] px-2.5 font-bold"
                                >
                                    Marketplace
                                </Button>
                                <div className="flex gap-[13px] self-stretch">
                                    <Button
                                        size="2x1"
                                        shape="round"
                                        className="min-w-[108px] rounded-[12px] px-2.5 font-bold"
                                    >
                                        For
                                    </Button>
                                    <Button
                                        color="green_A400"
                                        size="2x1"
                                        shape="round"
                                        className="min-w-[334px] rounded-[12px] px-2.5 font-bold"
                                    >
                                        Influencers
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Heading
                            size="header_header_web_h1_40px_bold"
                            as="h1"
                            className="text-[40px] font-bold leading-[48px] text-white-a700 md:text-[38px] sm:text-[36px]"
                        >
                            &quot;Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content All in One Hub.&quot;
                        </Heading>
                        <div className="flex gap-[37px]">
                            <Button
                                color="green_A400"
                                size="x1"
                                className="min-w-[144px] rounded-[18px] px-6 font-semibold sm:px-5"
                            >
                                Demo Store
                            </Button>
                            <Button
                                className="joinwaitlistbutton_border min-w-[142px] rounded-[18px] bg-gradient bg-clip-text px-[23px] font-semibold text-transparent sm:px-5"
                                size="x1"
                            >
                                Join Waitlist
                            </Button>
                        </div>
                    </div>
                    <div className="flex w-full items-center gap-4 sm:flex-col">
                        <div className="flex w-full flex-col gap-2 sm:w-full">
                            <Img
                                src="img_bae_asf_1.png"
                                width={282}
                                height={164}
                                alt="Image Bae"
                                className="h-[164px] rounded-[18px] object-cover"
                            />
                            <Img
                                src="img_high_cost_of_low.png"
                                width={282}
                                height={346}
                                alt="Image High Cost"
                                className="h-[346px] rounded-[18px] object-cover"
                            />
                            <Img
                                src="img_dior_men_resort.png"
                                width={282}
                                height={122}
                                alt="Image Dior Men"
                                className="h-[122px] rounded-tl-[18px] rounded-tr-[18px] object-cover"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-1.5 sm:w-full">
                            <Img
                                src="img_granola_boy_outdoors.png"
                                width={282}
                                height={142}
                                alt="Image Granola Boy"
                                className="h-[142px] rounded-[18px] object-cover"
                            />
                            <Img
                                src="img_1.png"
                                width={282}
                                height={346}
                                alt="Image One"
                                className="h-[346px] rounded-[18px] object-cover"
                            />
                            <Img
                                src="img_2.png"
                                width={282}
                                height={144}
                                alt="Image Two"
                                className="h-[144px] rounded-[18px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
