import { Heading } from "../../components";
import UserProfileImage from "../../components/UserProfilelmage";
import React, { Suspense } from "react";

const imageGallery = [
    { userImage: "img_2_1.png" },
    { userImage: "img_pin_268x268.png" },
    { userImage: "img_minka_kelly_x_live_268x268.png" },
    { userImage: "img_c2890f37_c8d6_4_268x268.png" },
];

export default function InfluencersSection() {
    return (
        <>
            {/* Influencers Section */}
            <div className="flex flex-col items-center self-stretch">
                <div className="container-xs flex flex-col items-center gap-9 md:px-5">
                    <Heading
                        size="header_header_web_h2_34px_bold"
                        as="h2"
                        className="text-[34px] font-bold text-green-a400 md:text-[32px] sm:text-[30px]"
                    >
                        Our Influencers
                    </Heading>
                    <div className="mr-5 flex gap-9 self-stretch md:mr-0 md:flex-col">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {imageGallery.map((d, index) => (
                                <UserProfileImage {...d} key={"influencersList" + index} />
                            ))}
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}
