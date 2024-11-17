"use client";
import { CloseSVG } from "../Input/close.jsx";
import { SelectBox, Img, Heading, Input } from "./..";
import Link from "next/link";
import React from "react";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
    const [searchBarValue, setSearchBarValue] = React.useState("");

    return (
        <header
            {...props}
            className={`${props.className} flex sm:flex-col justify-center items-center`}
        >
            <Img
                src="img_logo_1_2.svg"
                width={104}
                height={62}
                alt="Logo"
                className="h-[62px] w-[10%] object-contain md:w-full"
            />
            <Input
                size="md"
                shape="round"
                name="Search Field"
                placeholder="Search Creator/Product"
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e.target.value)}
                prefix={
                    <Img
                        src="img_search.svg"
                        width={20}
                        height={20}
                        alt="Search"
                        className="h-[20px] w-[20px]"
                    />
                }
                suffix={
                    searchBarValue?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue("")} fillcolor="#3f3f3fff" />
                    ) : null
                }
                className="ml-[22px] w-[26%] gap-2.5 rounded-[24px] border border-solid border-white-a788 px-3.5 font-medium text-secondary_text_alt md:ml-0 md:w-full"
            />

            <ul className="ml-[54px] flex flex-wrap gap-9 md:ml-8">
                <li>
                    <Link href="#">
                        <Heading as="h4" className="text-[27px] font-bold text-white-a700">
                            Fav Creators
                        </Heading>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Heading as="h4" className="text-[27px] font-bold text-white-a700">
                            Merchandise
                        </Heading>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Heading as="h4" className="text-[27px] font-bold text-white-a700">
                            Brand
                        </Heading>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Heading as="h4" className="text-[27px] font-bold text-white-a700">
                            Digital
                        </Heading>
                    </Link>
                </li>
            </ul>

            <SelectBox
                shape="round"
                indicator={
                    <Img
                        src="img_arrowdown_black_900.svg"
                        width={12}
                        height={16}
                        alt="Arrow Down"
                        className="h-[16px] w-[12px]"
                    />
                }
                getOptionLabel={(e) => (
                    <div className="flex items-center">
                        <Img src="img_lock.svg" width={24} height={16} alt="Lock" className="h-[16px] w-[24px]" />
                        <span>{e.label}</span>
                    </div>
                )}
                name="Account Dropdown"
                options={dropDownOptions}
                className="ml-[54px] w-[8%] gap-4 rounded-[16px] px-[18px] md:ml-0 md:w-full"
            />
        </header>
    );
}
