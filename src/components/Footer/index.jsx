"use client";
import { Img, Heading, Button } from "./..";
import Link from "next/link";
import React from "react";
import {
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemState,
    AccordionItemPanel,
    Accordion,
    AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
    { faqQuestion: "How much does it cost to set up a store?" },
    { faqQuestion: "What kind of digital products can I sell?" },
    { faqQuestion: "Do I need technical skills to use the platform?" },
    {},
    { faqQuestion: "Is there a limit to the number of products I can list?" },
    { faqQuestion: "How do I receive payments for my sales?" },
    { faqQuestion: "Can I sell internationally on this marketplace?" },
    { faqQuestion: "What support and resources are available for sellers?" },
    { faqQuestion: "Is there a review process for uploaded products?" },
];

export default function Footer(props) {
    return (
        <footer
            {...props}
            className={`${props.className} flex flex-col justify-center items-center px-14 md:px-5`}
        >
            <div className="container-xs relative h-[1756px] content-center md:h-auto">
                <div className="mx-auto flex w-full flex-col items-center gap-9 px-14 md:px-5">
                    <Heading
                        size="header_header_web_h2_34px_bold"
                        as="h2"
                        className="text-[34px] font-bold text-green-a400 md:text-[32px] sm:text-[30px]"
                    >
                        How to get started?
                    </Heading>

                    <div className="mx-1 flex w-[78%] justify-center rounded-[24px] bg-red-888 p-9 shadow-sm md:mx-0 md:w-full sm:p-5">
                        <div className="flex w-[80%] items-center justify-between gap-5 md:w-full sm:flex-col">
                            <div className="flex w-[54%] flex-col gap-[22px] sm:w-full">
                                <Heading
                                    as="h4"
                                    className="text-[27px] font-bold leading-8 text-white-a700 md:text-[25px] sm:text-[23px]"
                                >
                                    Sign Up and create your own store hassle-free.
                                </Heading>
                                <Heading
                                    size="body_body_web_b2_16_medium"
                                    as="p"
                                    className="text-[16px] font-medium leading-[19px] text-white-a700"
                                >
                                    <span>
                                        Join us via Google sign-in and verify your influencer status by entering your social media ID and
                                        unlock your store&nbsp;
                                    </span>
                                    <span>@</span>
                                </Heading>
                            </div>

                            <div className="flex w-[34%] flex-col items-center gap-4 rounded-[16px] bg-gray-900 px-1 py-4 sm:w-full">
                                <div className="mx-2.5 flex items-center justify-center gap-1 self-stretch rounded-lg border border-solid border-blue_gray-1">
                                    <Img
                                        src="img_image_25.png"
                                        width={14}
                                        height={14}
                                        alt="Google Image"
                                        className="h-[14px] w-[14px] object-cover"
                                    />
                                    <Heading
                                        size="header_header_mobile_h5_mobile_14px_bold"
                                        as="p"
                                        className="text-[14px] font-bold text-white-a700"
                                    >
                                        Login with Google
                                    </Heading>
                                </div>
                                <Link href="#">
                                    <Heading size="textxl" as="p" className="font-inter text-[12px] font-medium text-gray-500">
                                        OR{" "}
                                    </Heading>
                                </Link>

                                <div className="mx-2.5 self-stretch border-b border-solid border-gray-500 px-2 py-3 md:mx-0">
                                    <div className="flex justify-center px-14 md:px-5">
                                        <Heading
                                            size="header_header_mobile_h3_mobile_18px_bold"
                                            as="h6"
                                            className="text-[18px] font-bold text-white-a700"
                                        >
                                            Email
                                        </Heading>
                                    </div>
                                </div>

                                <div className="mx-2.5 self-stretch border-b border-solid border-gray-500 px-2 py-3 md:mx-8">
                                    <div className="flex justify-center px-[42px] md:px-5">
                                        <Heading
                                            size="header_header_mobile_h3_mobile_18px_bold"
                                            as="h6"
                                            className="text-[18px] font-bold text-white-a700"
                                        >
                                            Password
                                        </Heading>
                                    </div>
                                </div>

                                <Button
                                    className="loginbutton_border min-w-[88px] rounded-[12px] bg-gradient bg-clip-text px-[23px] font-semibold text-transparent sm:px-5"
                                    size="sm"
                                    shape="round"
                                    variant={null}
                                >
                                    Login
                                </Button>

                                <div className="flex flex-wrap justify-center gap-1 self-stretch">
                                    <Link href="#">
                                        <Heading size="textxl" as="p" className="font-inter text-[12px] font-medium text-gray-500">
                                            Don't have an account?
                                        </Heading>
                                    </Link>
                                    <Heading size="cta_mobile_12px_semibold" as="p" className="text-[12px] font-semibold text-green-a400">
                                        Get Started
                                    </Heading>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-1 flex w-[84%] items-center justify-between gap-5 md:w-full md:flex-col">
                        <div className="flex flex-col items-center gap-[18px]">
                            <Heading as="h4" className="text-[27px] font-bold text-white-a700 md:text-[25px] sm:text-[23px]">
                                " Monetize your influencer status: Earn money adding real value to your true followers!"
                            </Heading>
                            <Heading size="body_body_web_b2_16_medium" as="p" className="text-[16px] font-medium text-white-a700">
                                Let VYB the money now! It’s here and withdraw it periodically.
                            </Heading>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-8 top-0 m-auto flex h-max w-full items-center gap-9 px-3.5 md:relative md:flex-col">
                        <div className="flex w-[44%] flex-col gap-4 md:w-full">
                            <Heading
                                size="header header web h2 34px bold"
                                as="h2"
                                className="text-[34px] font-bold leading-10 text-green-a400 md:text-[32px] sm:text-[30px]"
                            >
                                FREQUENTLY ASKED QUESTIONS
                            </Heading>
                            <Heading
                                size="body_body_web b1 18px_medium"
                                as="p"
                                className="text-[18px] font-bold leading-[21px] text-white-a700"
                            >
                                <span>
                                    <>
                                        Quick answers to questions you may have. Can't find what you’re looking for?
                                        <br />
                                    </>
                                </span>
                                <span>Check out our full documentation</span>
                            </Heading>
                        </div>

                        <Accordion preExpanded={[0]} className="flex flex-1 flex-col gap-4 md:w-full md:self-stretch">
                            {accordionData.map((d, i) => (
                                <AccordionItem uuid={i} key={`FAQ_List_${i}`}>
                                    <div className="flex flex-1 flex-col gap-3 rounded-[16px] bg-white-a700 p-3">
                                        <AccordionItemHeading className="w-full">
                                            <AccordionItemButton>
                                                <AccordionItemState>
                                                    {(props) => (
                                                        <>
                                                            <div className="flex flex-wrap items-center justify-between gap-5 sm:flex-col">
                                                                <Heading
                                                                    size="header_header_mobile_h5_16px_semi_bold"
                                                                    as="h6"
                                                                    className="text-[16px] font-bold text-black-900"
                                                                >
                                                                    {d.faqQuestion}
                                                                </Heading>
                                                                {props?.expanded ? (
                                                                    <Img
                                                                        src="img_icon_black_900.svg"
                                                                        width={20}
                                                                        height={20}
                                                                        alt="Faq Icon"
                                                                        className="mr-[34px] h-[20px] w-[20px] sm:mr-0 sm:w-full"
                                                                    />
                                                                ) : (
                                                                    <Img
                                                                        src="img_icon.svg"
                                                                        width={20}
                                                                        height={20}
                                                                        alt="Faq Icon"
                                                                        className="h-[20px] w-[20px] sm:w-full"
                                                                    />
                                                                )}
                                                            </div>
                                                        </>
                                                    )}
                                                </AccordionItemState>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="text-[16px] font-medium leading-[19px] text-black-900">
                                                No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate
                                                and operate the platform without any prior technical knowledge.
                                            </div>
                                        </AccordionItemPanel>
                                    </div>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </footer>
    );
}
