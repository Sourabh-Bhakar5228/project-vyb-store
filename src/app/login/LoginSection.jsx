"use client";
import { Heading, Button, Input, Img, Text } from "../../components";
import { CloseSVG } from "../../components/Input/close.jsx";
import ProductProfile from "../../components/ProductProfile";
import Link from "next/link";
import React from "react";

export default function LoginSection() {
    const [searchBarValue3, setSearchBarValue3] = React.useState("");

    return (
        <div className="mb-1 flex justify-center self-stretch">
            <div className="container-xs flex justify-center px-14 md:px-5">
                <div className="flex w-full items-center gap-3.5 rounded-[24px] bg-black-900 p-[38px] md:flex-col sm:p-5">
                    <div className="relative h-[530px] flex-1 md:w-full md:flex-none md:self-stretch">
                        <div className="absolute bottom-[10.05px] left-e right-e m-auto flex flex-col items-end gap-[98px] md:gap-[73px] sm:gap-[49px]">
                            <img
                                src="img_image_43.png"
                                width={50}
                                height={52}
                                alt="Image Forty Three"
                                className="h-[52px] w-[12%] rounded-[24px] object-contain"
                            />
                            <Img
                                src="img_clip_path_group.svg"
                                width={34}
                                height={34}
                                alt="Clip Path Image"
                                className="mr-[34px] h-[34px] w-[34px] md:mr-e"
                            />
                        </div>
                        <div className="absolute bottom-[8.86px] left-0 right-0 mx-3.5 my-auto flex flex-1 flex-col items-start md:mx-0">
                            <Img
                                src="img_settings_green_200_01.svg"
                                width={18}
                                height={22}
                                alt="Settings Image"
                                className="ml-3 h-[22px] md:ml-8"
                            />
                            <Img
                                src="img_group_780.svg"
                                width={46}
                                height={48}
                                alt="Moon Image"
                                className="ml-24 mt-6 h-[48px] md:ml-0"
                            />
                            <Text
                                as="p"
                                className="font-caveatbrush text-[29.48px] font-normal text-gray-500 md:text-[27px] sm:text-[25px]"
                            >
                                Sell products
                            </Text>
                        </div>
                        <Img
                            src="img_close_black_900.svg"
                            width={24}
                            height={16}
                            alt="Close Image"
                            className="absolute left-[35%] top-[11%] m-auto h-[16px]"
                        />
                        <div className="absolute bottom-0 left-0 right-e top-8 m-auto flex h-max flex-1 flex-col items-start">
                            <Text
                                as="p"
                                className="relative z-[7] ml-3.5 font-caveatbrush text-[29.48px] font-normal text-gray-500 md:ml-8 md:text-[27px] sm:text-[25px]"
                            >
                                Track earnings
                            </Text>
                            <div className="relative mt-[-6px] flex flex-col self-stretch">
                                <Img
                                    src="img_mobile.svg"
                                    width={68}
                                    height={70}
                                    alt="Mobile Image"
                                    className="relative z-[6] mx-3 h-[78px] w-[12%] object-contain md:ml-e"
                                />
                                <div className="relative mt-[-12px] flex items-start sm:flex-col">
                                    <div className="relative z-[4] mt-[138px] w-[36%] sm:w-full">
                                        <div className="relative z-[5] h-[80px]">
                                            <Text
                                                as="p"
                                                className="absolute bottom-[-0.26px] left-e m-auto font-caveatbrush text-[29.48px] font-normal text-gray-500 md:text-[27px] sm:text-[25px]"
                                            >
                                                Claim your store
                                            </Text>
                                            <Img
                                                src="img_settings_gray_500.svg"
                                                width={60}
                                                height={62}
                                                alt="Settings Image Gray"
                                                className="absolute right-[8.17px] top-8 m-auto h-[62px] w-[30%] object-contain"
                                            />
                                        </div>
                                        <Button
                                            size="d"
                                            className="relative ml-[ 18px] mr-7 mt-[-2px] self-stretch rounded-[28px] px-[34px] font-semibold md:mx-8 sm:px-5"
                                        >
                                            your_name
                                        </Button>
                                    </div>
                                    <div className="relative ml-[-6px] flex flex-1 items-start sm:ml-8 sm:self-stretch">
                                        <div className="flex flex-1 items-start">
                                            <div className="flex flex-1 flex-col items-center self-center rounded-[14px] bg-background">
                                                <div className="mx-2 mt-2 flex items-center justify-center gap-1.5 self-stretch rounded-[18px] bg-glass px-1 py-2 md:ml-0">
                                                    <Img
                                                        src="img_logo_2.png"
                                                        width={34}
                                                        height={16}
                                                        alt="Logo Image"
                                                        className="h-[16px] object-cover"
                                                    />
                                                    <Input
                                                        size="xs"
                                                        name="Search View"
                                                        placeholder="Search Creators"
                                                        value={searchBarValue3}
                                                        onChange={(e) => setSearchBarValue3(e.target.value)}
                                                        prefix={
                                                            <div className="flex h-[8px] w-[8px] items-center justify-center">
                                                                <Img
                                                                    src="img_search_white_a700.svg"
                                                                    width={8}
                                                                    height={8}
                                                                    alt="Search"
                                                                    className="my-1 h-[8px] w-[8px]"
                                                                />
                                                            </div>
                                                        }
                                                        suffix={
                                                            searchBarValue3?.length > 0 ? (
                                                                <CloseSVG onClick={() => setSearchBarValue3("")} height={8} width={8} />
                                                            ) : null
                                                        }
                                                        className="flex-grow gap-1 rounded-[10px] font-medium text-blue_gray-100"
                                                    />
                                                    <Img
                                                        src="img_frame_white_a700_10x10.svg"
                                                        width={10}
                                                        height={10}
                                                        alt="Frame Image"
                                                        className="h-[10px] w-[10px]"
                                                    />
                                                </div>
                                                <div className="flex flex-col items-start self-stretch">
                                                    <div className="relative h-[66px] content-center self-stretch bg-blue_gray-600_01 md:h-auto">
                                                        <Img
                                                            src="img_image_41.png"
                                                            width={200}
                                                            height={66}
                                                            alt="Profile Image"
                                                            className="mx-auto h-[66px] w-full flex-1 object-cover"
                                                        />
                                                        <div className="absolute left-0 right-e top-[6.12px] m-auto flex flex-1 flex-col items-center px-[30px] sm:px-5">
                                                            <Heading
                                                                size="headingxl"
                                                                as="h1"
                                                                className="font-nosifercaps text-[13.36px] font-extrabold text-white-a700"
                                                            >
                                                                Samira Hadid
                                                            </Heading>
                                                            <Text
                                                                size="textlg"
                                                                as="p"
                                                                className="ml-11 self-start font-mrbedfort text-[11.13px] font-normal text-white-a700 md:ml-0"
                                                            >
                                                                let's shop
                                                            </Text>
                                                            <div className="ml-1.5 mr-1 flex flex-wrap justify-center gap-6 self-stretch md:mx-0">
                                                                <Text
                                                                    size="textxs"
                                                                    as="p"
                                                                    className="font-inter text-[5.57px] font-normal text-white-a700"
                                                                >
                                                                    samirahadid_
                                                                </Text>
                                                                <Text
                                                                    size="textxs"
                                                                    as="p"
                                                                    className="font-inter text-[5.57px] font-normal text-white-a700"
                                                                >
                                                                    www.vyb_samira.com
                                                                </Text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Img
                                                        src="img_ellipse_21_32x32.png"
                                                        width={32}
                                                        height={32}
                                                        alt="Ellipse Image"
                                                        className="relative z-[1] ml-2 mt-[-16px] h-[32px] w-[32px] rounded-[16px] object-cover md:ml-0"
                                                    />
                                                </div>
                                                <div className="mx-2 mt-1.5 flex items-start justify-center self-stretch md:mx-0">
                                                    <div className="flex flex-1 flex-col items-start self-center">
                                                        <Heading size="headingmd" as="h2" className="text-[11.13px] font-bold text-white-a700">
                                                            Samira Hadid
                                                        </ Heading>
                                                        <Heading
                                                            size="textmd"
                                                            as="h3"
                                                            className="text-[8.91px] font-medium text-secondary_text_alt"
                                                        >
                                                            @samirahadid
                                                        </Heading>
                                                    </div>
                                                    <Img src="img_grid.svg" width={30} height={10} alt="Grid Image" className="h-[10px]" />
                                                </div>
                                                <div className="mx-2 mt-1.5 flex items-center justify-center self-stretch md:mx-0">
                                                    <div className="h-[24px] w-px bg-blue_gray-100" />
                                                    <div className="flex flex-col items-end gap-1">
                                                        <Heading
                                                            size="headingxs"
                                                            as="h4"
                                                            className="text-[8.91px] font-bold text-secondary_text_alt"
                                                        >
                                                            12
                                                        </Heading>
                                                        <Heading
                                                            size="texts"
                                                            as="h5"
                                                            className="text-[7.79px] font-medium text-secondary_text_alt"
                                                        >
                                                            Posts
                                                        </Heading>
                                                    </div>
                                                    <div className="ml-1 h-[24px] w-px bg-blue_gray-100" />
                                                    <div className="flex flex-1 flex-col items-end gap-1 px-0.5">
                                                        <Heading
                                                            size="headingxs"
                                                            as="h6"
                                                            className="mr-2 text-[8.91px] font-bold text-secondary_text_alt md:mr-0"
                                                        >
                                                            140K
                                                        </Heading>
                                                        <Heading
                                                            size="texts"
                                                            as="p"
                                                            className="text-[7.79px] font-medium text-secondary_text_alt"
                                                        >
                                                            Instagram
                                                        </Heading>
                                                    </div>
                                                    <div className="ml-1 h-[24px] w-px bg-blue_gray-100" />
                                                    <div className="flex flex-col items-end gap-1 px-0.5">
                                                        <Heading
                                                            size="headingxs"
                                                            as="p"
                                                            className="text-[8.91px] font-bold text-secondary_text_alt"
                                                        >
                                                            20.5K
                                                        </Heading>
                                                        <Heading
                                                            size="texts"
                                                            as="p"
                                                            className="text-[7.79px] font-medium text-secondary_text_alt"
                                                        >
                                                            Youtube
                                                        </Heading>
                                                    </div>
                                                    <div className="ml-1 h-[24px] w-px bg-blue_gray-100" />
                                                    <Heading
                                                        size="cta_cta_web_18px_semibold"
                                                        as="h6"
                                                        className="ml-3.5 flex items-center justify-center self-start rounded bg-green-a400 px-1.5 text-[18px] font-semibold text-black-900"
                                                    >
                                                        Follow
                                                    </Heading>
                                                </div>
                                                <Heading
                                                    size="texts"
                                                    as="p"
                                                    className="mt-1.5 w-[90%] text-[7.79px] font-medium leading-[9px] text-secondary_text_alt md:w-full md:px-5"
                                                >
                                                    Crafting digital narratives one pixel at a time, blending creativity with technology as a content creator extraordinaire.
                                                </Heading>
                                                <div className="mt-2 flex flex-wrap justify-center self-stretch">
                                                    <Heading
                                                        size="texts"
                                                        as="p"
                                                        className="flex w-[20px] items-center justify-center rounded-md bg-green-a400 text-[7.79px] font-medium text-gray-900"
                                                    >
                                                        A11
                                                    </Heading>
                                                    <Heading
                                                        size="texts"
                                                        as="p"
                                                        className="ml-1 rounded-md border-[0.56px] border-solid border-gray-900 px-1 py-0.5 text-[7.79px] font-medium text-gray-900"
                                                    >
                                                        Digital
                                                    </Heading>
                                                    <Heading
                                                        size="texts"
                                                        as="p"
                                                        className="ml-1 rounded-md border-[0.56px] border-solid border-gray-900 px-1 py-0.5 text-[7.79px] font-medium text-gray-900"
                                                    >
                                                        Itinerary
                                                    </Heading>
                                                    <Heading
                                                        size="texts"
                                                        as="p"
                                                        className="ml-1 rounded-md border-[0.56px] border-solid border-gray-900 p-0.5 text-[7.79px] font-medium text-gray-900"
                                                    >
                                                        Merchandise
                                                    </Heading>
                                                    <Heading
                                                        size="texts"
                                                        as="p"
                                                        className="ml-1 rounded border-[ 0.56px] border-solid border-gray-900 py-0.5 pl-1 text-[7.79px] font-medium text-gray-900"
                                                    >
                                                        Brand
                                                    </Heading>
                                                </div>
                                                <div className="mx-2 mt-2 flex gap-1.5 self-stretch rounded-[10px] bg-background px-2 py-1 shadow-xl md:mx-0">
                                                    <Img
                                                        src="img_search_white_a700_10x10.svg"
                                                        width={10}
                                                        height={10}
                                                        alt="Search Image"
                                                        className="h-[10px] w-[10px]"
                                                    />
                                                    <Heading size="texts" as="p" className="text-[7.79px] font-medium text-white-a700">
                                                        Search Samira's Products
                                                    </Heading>
                                                </div>
                                                <ProductProfile
                                                    imageFive="Img_frame_415.png"
                                                    productPrice="$ 100"
                                                    className="ml-2 mt-[106px] self-stretch rounded-[10px] bg-background shadow-xs md:ml-0"
                                                />
                                                <ProductProfile
                                                    productImage="img_rectangle_160441_1x78.png"
                                                    productName="Lightroom Preset"
                                                    productDescription="The 'Sunset Glow Lightroom preset adds warmth and radiance to your photos, capturing the essence of sunset."
                                                    className="ml-2 mt-14 self-stretch bg-background shadow-xs md:ml-8"
                                                />
                                            </div>
                                            <img
                                                src="img_mobile_gray_500.svg"
                                                width={80}
                                                height={62}
                                                alt="Mobile Image Gray"
                                                className="relative z-[2] ml-[-8px] mt-7 h-[62px] w-[30%] object-contain"
                                            />
                                        </div>
                                        <Text
                                            as="p"
                                            className="relative z-[3] ml-[-48px] mt-[154px] font-caveatbrush text-[29.48px] font-normal text-gray-500 md:text-[27px] sm:text-[25px]"
                                        >
                                            Connect socials
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-[8%] top-[16%] z-[8] m-auto flex w-[34%] justify-center rounded-[18px] bg-white-a700 p-1.5">
                                <div className="flex w-full flex-col items-start">
                                    <Heading size="headinglg" as="p" className="text-[12.63px] font-bold text-black-900">
                                        Earnings
                                    </Heading>
                                    <Img
                                        src="img_image_42.png"
                                        width={64}
                                        height={40}
                                        alt="Image Forty Two"
                                        className="ml-5 mt-1 h-[40px] w-[48%] object-contain md:ml-0"
                                    />
                                    <div className="mx-1.5 h-[8.26px] w-[48%] rotate-[180deg] bg-black-900 md:ml-0" />
                                    <div className="flex items-center justify-center gap-6 self-stretch">
                                        <div className="h-[5.26px] flex-1 rounded-sm bg-indigo-100" />
                                        <Heading
                                            size="cta_cta_web_18px_semibold"
                                            as="h6"
                                            className="flex items-center justify-center rounded-md bg-green-a400 px-2 text-[18px] font-semibold text-black-900"
                                        >
                                            Withdraw
                                        </Heading>
                                    </div>
                                    <div className="relative ml-2.5 mt-[-2px] h-[5.26px] w-[60%] rounded-sm bg-indigo-100 md:ml-0" />
                                </div>
                            </div>
                            <ProductProfile
                                productImage="img_rectangle_160441_98x116.png"
                                productName="Goa Trip Itinerary"
                                productDescription="Explore Delhi's essence with our comprehensive guidebook. Tailored itineraries cater to various interests."
                                productPrice="* 759"
                                className="absolute bottom-[6%] left-e right-e m-auto w-[44%] rounded-[14px] bg-gray-100 shadow-lg"
                            />
                            <Img
                                src="img_settings_gray_500_48x46.svg"
                                width={46}
                                height={48}
                                alt="Settings Image Five"
                                className="absolute right-[24%] top-[42%] z-[9] m-auto h-[48px]"
                            />
                            <Text
                                as="p"
                                className="absolute right-1 .5 top-[16%] z-[10] m-auto font-caveatbrush text-[29.48px] font-normal text-gray-500 md:text-[27px] sm:text-[25px]"
                            >
                                Customize store
                            </Text>
                        </div>
                        <div className="flex w-[42%] flex-col items-center gap-[34px] rounded-[16px] bg-black-900 p-6 md:w-full md:px-5 sm:p-5">
                            <Link href="Login" target="_blank" rel="noreferrer" className="md:text-[38px] sm:text-[36px]">
                                <Heading
                                    size="header_header_web_h1_40px_bold"
                                    as="h1"
                                    className="text-[40px] font-bold text-white-a700"
                                >
                                    Login
                                </Heading>
                            </Link>
                            <Button
                                color="blue_gray_100_01"
                                size="lg"
                                variant="outline"
                                leftIcon={
                                    <Img
                                        src="img_image_25.png"
                                        width={20}
                                        height={18}
                                        alt="Image 25"
                                        className="h-[18px] w-[20px] object-cover"
                                    />
                                }
                                className="mx-2.5 gap-3 self-stretch rounded-lg border px-[33px] font-medium md:mx-0 sm:px-5"
                            >
                                Login with Google
                            </Button>
                            <div className="flex w-[54%] items-end justify-center gap-1 md:w-full">
                                <div className="mb-2.5 h-px flex-1 bg-gray-500" />
                                <Heading
                                    size="body_body_web_b2_16_medium"
                                    as="p"
                                    className="self-center text-[16px] font-medium text-gray-500"
                                >
                                    OR{" "}
                                </Heading>
                                <div className="mb-2.5 h-px flex-1 bg-gray-500" />
                            </div>
                            <div className="flex flex-col items-center gap-9 self-stretch">
                                <Input
                                    shape="square"
                                    type="email"
                                    name="Email EditText"
                                    placeholder="Email"
                                    className="self-stretch border-b border-solid border-gray-500 px-2 font-bold text-white-a700"
                                />
                                <Input
                                    shape="square"
                                    type="password"
                                    name="Password EditText"
                                    placeholder="Password"
                                    className="self-stretch border-b border-solid border-gray-500 px-2 font-bold text-white-a700"
                                />
                                <Button
                                    className="joinwaitlistbutton_border min-w-[142px] rounded-[18px] bg-gradient bg-clip-text px-[33px] font-semibold text-transparent sm:px-5"
                                    size="xl"
                                    variant={null}
                                >
                                    Login
                                </Button>
                                <div className="mx-[38px] flex justify-between gap-5 self-stretch md:mx-0">
                                    <Link href="#">
                                        <Heading
                                            size="body_body_web_b1_18px_medium"
                                            as="p"
                                            className="text-[18px] font-medium text-gray-500"
                                        >
                                            Don't have an account?
                                        </Heading>
                                    </Link>
                                    <div className="flex">
                                        <Heading
                                            size="cta_cta_web_18px_semibold"
                                            as="h6"
                                            className="text-[18px] font-semibold text-green-a400"
                                        >
                                            Get Started
                                        </Heading>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}