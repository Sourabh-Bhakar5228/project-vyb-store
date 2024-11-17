"use client";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ItineraryDetails from "../../components/ItineraryDetails";
import HomePageMainSection from "./HomePageMainSection";
import InfluencerMonetizationSection from "./InfluencerMonetizationSection";
import InfluencersSection from "./InfluencersSection";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const itineraryList = [
    { itineraryTitle: "Darjeeling Itinerary", location: "West Bengal", buttonText: "Samira Hadid" },
    { itineraryTitle: "Munnar Itinerary", location: "Kerala", buttonText: "Samira Hadid" },
    { itineraryTitle: "Delhi Itinerary", location: "Delhi", buttonText: "Samira Hadid" },
    { itineraryTitle: "Delhi Itinerary", location: "Delhi", buttonText: "Samira Hadid" },
    { itineraryTitle: "Delhi Itinerary", location: "Delhi", buttonText: "Samira Hadid" },
    { itineraryTitle: "Delhi Itinerary", location: "Delhi", buttonText: "Samira Hadid" },
];

export default function NewHomepageWebPage() {
    return (
        <div className="flex w-full flex-col items-center gap-12 bg-gray-900">
            <div className="container-xs mt-9 md:px-5">
                <Header />
            </div>
            <div className="flex flex-col gap-12 self-stretch">
                <div className="flex flex-col items-center gap-12">
                    {/* Home page main section */}
                    <HomePageMainSection />
                    <div className="container-xs md:px-5">
                        <Tabs
                            className="flex flex-col gap-9"
                            selectedTabClassName="text-white-a700"
                            selectedTabPanelClassName="!relative tab-panel--selected"
                        >
                            <div>
                                <TabList className="flex flex-wrap items-center justify-between gap-[252px] px-6 py-[26px] md:gap-5 sm:p-5">
                                    <Tab className="mb-4 ml-2 self-start text-[34px] font-bold text-white-a700 md:ml-0 md:text-[32px] sm:text-[30px]">
                                        Travel
                                    </Tab>
                                    <Tab className="text-[34px] font-bold text-white-a788 md:text-[32px] sm:text-[30px]">
                                        Digital
                                    </Tab>
                                    <Tab className="text-[34px] font-bold text-white-a700 md:text-[32px] sm:text-[30px]">
                                        Brand
                                    </Tab>
                                    <Tab className="text-[34px] font-bold text-white-a788 md:text-[32px] sm:text-[30px]">
                                        Merch
                                    </Tab>
                                </TabList>
                            </div>
                            <div className="flex flex-col gap-16 rounded-[24px] bg-black-900 sm:gap-8">
                                {[...Array(4)].map((_, index) => (
                                    <TabPanel key={`tab-panel-${index}`} className="absolute items-center">
                                        <div className="w-full">
                                            <div className="flex flex-col gap-16 sm:gap-8">
                                                <div>
                                                    <div className="flex h-[548px] flex-col items-center justify-center gap-6 bg-[url(/images/img_frame_1574.png)] bg-cover bg-no-repeat px-14 py-[78px] md:p-5">
                                                        <Heading
                                                            size="heading3x1"
                                                            as="h2"
                                                            className="text-[180px] font-bold text-white-a700 md:text-[48px]"
                                                        >
                                                            TRAVEL
                                                        </Heading>
                                                        <Heading
                                                            size="header header web h2 34px bold"
                                                            as="h3"
                                                            className="mb-1.5 w-[64%] text-center text-[34px] font-bold leading-18 text-white-a788 md:w-full md:text-[32px] sm:text-[30px]"
                                                        >
                                                            Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.
                                                        </Heading>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-start gap-14 sm:gap-7">
                                                    <Heading
                                                        size="header header web 12 34px bold"
                                                        as="h4"
                                                        className="self-center text-[34px ] font-bold text-white-a780 md:text-[32px] sm:text-[38px]"
                                                    >
                                                        Explore Our Curated Travel Itineraries
                                                    </Heading>
                                                    <div className="w-full overflow-auto overflow-x-scroll">
                                                        <div className="flex w-[1740px] gap-6 md:flex-col">
                                                            <Suspense fallback={<div>Loading feed...</div>}>
                                                                {itineraryList.map((d, index) => (
                                                                    <ItineraryDetails
                                                                        {...d}
                                                                        key={`ItineraryList-${index}`}
                                                                        className="bg-[url(/images/img_frame_1182.png)]"
                                                                    />
                                                                ))}
                                                            </Suspense>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                ))}
                                <div>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex justify-center px-14 md:px-5">
                                            <Heading
                                                size="header_header_web_h2_34px_bold"
                                                as="h5"
                                                className="text-[34px] font-bold text-white-a780 md:text-[32px] sm:text-[30px]"
                                            >
                                                How to list?
                                            </Heading>
                                        </div>
                                        <div className="relative h-[578px] content-center ad:h-auto">
                                            <Img
                                                src="img_ellipse_113.png"
                                                width={186}
                                                height={264}
                                                alt="Main Image"
                                                className="h-[264px] w-[16%] object-contain"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 top-6 m-auto h-[578px] flex-1">
                                                <div className="absolute bottom-8 left-8 right-8 m-auto flex h-[496px] flex-1 items-end justify-center bg-[url(/images/img_group_812.png)] bg-cover bg-no-repeat p-3.5 md:h-auto">
                                                    <Text
                                                        size="text3x1"
                                                        as="p"
                                                        className="text-[34px] font-normal text-white-a700 md:text-[32px] sm:text-[38px]"
                                                    >
                                                        You Curate Experience. We Make It Happen
                                                    </Text>
                                                </div>
                                                <div className="absolute left-0 right-0 top-0 m-auto h-[414px] flex-1 content-center md:h-auto">
                                                    <div className="mx-auto flex-1">
                                                        <Img
                                                            src="img_vector_1.svg"
                                                            width={1200}
                                                            height={222}
                                                            alt="Vector Image"
                                                            className="h-[222px] w-full md:h-auto"
                                                        />
                                                        <div className="relative mx-[86px] mt-[-154px] flex items-start md:mx-0 md:flex-col">
                                                            <div className="mb-[74px] flex w-[30%] flex-col gap-6 md:w-full">
                                                                <Img
                                                                    src="img_frame.svg"
                                                                    width={126}
                                                                    height={126}
                                                                    alt="Step One Image"
                                                                    className="ml-[50px] h-[126px] w-[126px] md:ml-0"
                                                                />
                                                                <div className="flex flex-col items-start gap-4">
                                                                    <Heading
                                                                        as="h6"
                                                                        className="ml-[100px] text-[27px] font-bold text-white-a700 md:ml-0 md:text-[25px] sm:text-[23px]"
                                                                    >
                                                                        01
                                                                    </Heading>
                                                                    <Heading
                                                                        as="h4"
                                                                        className="text-center text-[27px] font-bold leading-8 text-white-a700 md:text-[25px] sm:text-[23px]"
                                                                    >
                                                                        <>
                                                                            Create <br />
                                                                            Itinerary
                                                                        </>
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-1 flex-col items-center gap-6 self-end px-14 md:self-stretch md:px-5 sm:self-auto">
                                                                <Img
                                                                    src="img_frame_white_a700.svg"
                                                                    width={96}
                                                                    height={96}
                                                                    alt="Step Two Image"
                                                                    className="h-[96px] w-[96px]"
                                                                />
                                                                <div className="flex w-[78%] flex-col items-center gap-4 md:w-full">
                                                                    <Heading
                                                                        as="h4"
                                                                        className="text-[27px] font-bold text-white-a700 md:text-[25px] sm:text-[23px]"
                                                                    >
                                                                        02
                                                                    </Heading>
                                                                    <Heading
                                                                        as="h4"
                                                                        className="self-stretch text center text-[27px] font-bold leading-8 text-white-a700 md:text-[25px] sm:text-[23px]"
                                                                    >
                                                                        Convert into Travel Package
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-[30%] flex-col items-end gap-2 md:w-full">
                                                                <Img
                                                                    src="img_frame_white_a700_126x126.svg"
                                                                    width={126}
                                                                    height={126}
                                                                    alt="Step Three Image"
                                                                    className="mr-[50px] h-[126px] w-[126px] md:mr-0"
                                                                />
                                                                <div className="flex flex-col items-end gap-4 self-stretch">
                                                                    <Heading
                                                                        as="h4"
                                                                        className="mr-24 text-[27px] font-bold text-white-a700 md:mr-0 md:text-[25px] sm:text-[23px]"
                                                                    >
                                                                        03
                                                                    </Heading>
                                                                    <Heading
                                                                        as="h4"
                                                                        className="text-center text-[27px] font-bold leading-8 text-white-a700 md:text-[25px] sm:text-[23px]"
                                                                    >
                                                                        <>
                                                                            Earn by <br />
                                                                            sharing
                                                                        </>
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Img
                                                        src="img_ellipse_114.png"
                                                        width={132}
                                                        height={264}
                                                        alt="Secondary Image"
                                                        className="absolute right-0 top-[22px] m-auto h-[264px] w-[10%] object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                    {/* Influencer monetization section */}
                    <InfluencerMonetizationSection />
                    {/* Influencers section */}
                    <InfluencersSection />
                </div>
                <Footer />
            </div>
        </div>
    );
}