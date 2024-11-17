import { Img, Switch, Heading } from "../../components";
import SecureDataDisplay from "../../components/SecureDataDisplay";
import React from "react";

export default function InfluencerMonetizationSection() {
    return (
        <>
            {/* influencer monetization section */}
            <div className="flex justify-center self-stretch">
                <div className="container-xs flex items-center justify-center gap-9 md:flex-col md:px-5">
                    <Heading
                        size="header header web h1_40px_bold"
                        as="h1"
                        className="w-[38%] text-center text-[40px] font-bold leading-[48px] text-green-a400 md:w-full md:text-[38px] sm:text-[36px]"
                    >
                        From Creation to Monetization: Vyb Store Has It All
                    </Heading>
                    <div className="flex flex-1 items-center gap-4 md:flex-col md:self-stretch">
                        <div className="flex w-full flex-col gap-4">
                            <div className="flex flex-col gap-6 rounded-[24px] bg-black-900 p-6 sm:p-5">
                                <div className="flex flex-col gap-2">
                                    <Heading
                                        size="header_header_web_h2_34px_bold"
                                        as="h2"
                                        className="text-center text-[34px] font-bold leading-10 text-white-a700 md:text-[32px] sm:text-[30px]"
                                    >
                                        Trusted By Influencers
                                    </Heading>
                                    <Heading
                                        size="body_body_web_b1_18px_medium"
                                        as="p"
                                        className="text-center text-[18px] font-medium leading-[21px] text-white-a700"
                                    >
                                        A trusted platform for influencers to grow and earn.
                                    </Heading>
                                </div>
                                <div className="relative mx-[58px] h-[160px] md:mx-0">
                                    <Img
                                        src="img_image_53.png"
                                        width={86}
                                        height={80}
                                        alt="Image Fiftythree"
                                        className="absolute bottom-[0.92px] right-[0.86px] m-auto h-[80px] w-[46%] rounded-[40px] object-contain"
                                    />
                                    <Img
                                        src="img_pin.png"
                                        width={86}
                                        height={80}
                                        alt="Pin Image"
                                        className="absolute bottom-[2.29px] left-[23.27px] m-auto h-[80px] w-[52%] rounded-[40px] object-contain"
                                    />
                                    <Img
                                        src="img_minka_kelly_x_live.png"
                                        width={86}
                                        height={80}
                                        alt="Minka Kelly Image"
                                        className="absolute right-[28.72px] top-0 m-auto h-[80px] w-[54%] rounded-[40px] object-contain"
                                    />
                                    <Img
                                        src="img_c2890f37_c8d6_4.png"
                                        width={86}
                                        height={80}
                                        alt="C2890f37 Image"
                                        className="absolute left-8 top-[6.43px] m-auto h-[80px] w-[46%] rounded-[40px] object-contain"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-6 rounded-[24px] bg-black-900 p-6 sm:p-5">
                                <div className="flex flex-col gap-2 self-stretch">
                                    <Heading
                                        size="header_header_web_h2_34px_bold"
                                        as="h2"
                                        className="text-center text-[34px] font-bold leading-10 text-white-a700 md:text-[32px] sm:text-[30px]"
                                    >
                                        Authentic Payment Partner
                                    </Heading>
                                    <Heading
                                        size="body_body_web_b1_18px_medium"
                                        as="p"
                                        className="text-center text-[18px] font-medium leading-[21px] text-white-a700"
                                    >
                                        Reliable, fast, and secure payments you can trust
                                    </Heading>
                                </div>
                                <div className="relative h-[160px] w-[48%] content-center md:h-auto">
                                    <div className="mx-auto flex flex-1 flex-col items-end">
                                        <div className="relative flex flex-col items-start self-stretch">
                                            <div className="flex items-start self-stretch">
                                                <div className="relative z-[8] mt-4 flex h-[14px] items-center justify-center bg-[url(/images/img_group_8.svg)] bg-cover bg-no -repeat md:h-auto">
                                                    <Heading
                                                        size="headinglg"
                                                        as="p"
                                                        className="w-[68%] font-inter text-[12px] font-bold leading-[14px] tracking-[1.88px] text-black-900"
                                                    />
                                                </div>
                                                <div className="relative ml-[-10px] flex flex-1 items-center">
                                                    <div className="relative z-[7] flex flex-1 flex-col items-end gap-4 rounded-md border-[1.815px] border-solid border-teal-900 bg-white-a700">
                                                        <div className="flex h-[20px] flex-col items-center self-stretch bg-[url(/images/img_group_10.svg)] bg-cover bg-no-repeat px-6 md:h-auto sm:px-5">
                                                            <Img
                                                                src="img_vector_teal_900.svg"
                                                                width={26}
                                                                height={4}
                                                                alt="Vector Image"
                                                                className="mb-3.5 h-[4px]"
                                                            />
                                                        </div>
                                                        <div className="mr-2.5 h-[52px] w-[74%] bg-[url(/images/img_group_9.svg)] bg-cover bg-no-repeat md:mr-e md:h-auto md:w-full md:px-5">
                                                            <div className="h-[43px] bg-[url(/images/img_group_11.svg)] bg-cover bg-no-repeat px-2 py-2.5 md:h-auto">
                                                                <div className="flex h-[26px] items-center justify-center bg-[url(/images/img_group_12.5vg)] bg-cover bg-no-repeat p-1 md:h-auto">
                                                                    <Img
                                                                        src="img_checkmark.svg"
                                                                        width={16}
                                                                        height={12}
                                                                        alt="Checkmark Image"
                                                                        className="h-[12px]"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Heading
                                                            size="headings"
                                                            as="p"
                                                            className="mb-[26px] mr-3.5 rounded bg-green-a400 px-2 font-inter text-[10px] font-bold text-teal-900 md:mr-8"
                                                        >
                                                            PAY
                                                        </Heading>
                                                    </div>
                                                    <div className="relative ml-[-6px] h-[74px] w-[36%] content-center self-end rounded border-[1.5px] border-solid border-teal-900 bg-blue-gray-600 md:h-auto">
                                                        <div className="mx-auto flex flex-1 flex-col items-end">
                                                            <Img
                                                                src="img_user.svg"
                                                                width={42}
                                                                height={36}
                                                                alt="User  Image"
                                                                className="relative z-[6] h-[36px] w-full md:h-auto"
                                                            />
                                                            <Img
                                                                src="img_group.svg"
                                                                width={8}
                                                                height={46}
                                                                alt="Chart Image"
                                                                className="relative mr-1.5 mt-[-12px] h-[46px] md:mr-8"
                                                            />
                                                        </div>
                                                        <div className="absolute bottom-[3.27px] left-[12.23px] m-auto h-[18px] w-[10px] rounded bg-yellow-208" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex h-[8px] flex-col items-end bg-[url(/images/img_group_183.svg)] bg-cover bg-no-repeat md:h-auto">
                                                <Img
                                                    src="img_vector_white_a700.svg"
                                                    width={2}
                                                    height={3}
                                                    alt="Vector Seven Image"
                                                    className="mb-1 h-[3px] w-[2px]"
                                                />
                                            </div>
                                            <div className="relative ml-[-4px] flex h-[28px] flex-1 flex-col items-end self-center bg-[url(/images/img_vector.svg)] bg-cover bg-no-repeat px-1 py-2 md:h-auto">
                                                <Img
                                                    src="img_settings_amber_a100.svg"
                                                    width={6}
                                                    height={10}
                                                    alt="Settings Three Image"
                                                    className="h-[10px]"
                                                />
                                            </div>
                                            <Img
                                                src="img_group_183.svg"
                                                width={4}
                                                height={6}
                                                alt="Group Vector Image"
                                                className="relative ml-[-2px] h-[6px] self-end"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-4 flex w-full flex-col gap-4 md:ml-0">
                                    <SecureDataDisplay />
                                    <SecureDataDisplay
                                        headerText="Monetize Your Influence"
                                        descriptionText="Seamlessly turn your influence into consistent revenue"
                                        groupImage="img_group_1215.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4 md:w-full">
                            <div className="flex flex-col items-center gap-4 rounded-[20px] bg-black-900 p-6">
                                <Heading
                                    size="heading2"
                                    as="h3"
                                    className="w-full text-[18px] font-bold leading-5 text-white"
                                >
                                    Discover the Freedom of Creative Monetization
                                </Heading>
                                <Switch
                                    title="Earn a Sustainable Income From Content Creation"
                                    className="text-[16px] font-medium leading-[21px] text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}