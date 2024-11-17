import Header from "../../components/Header";
import LoginSection from "./LoginSection";
import React from "react";

export default function LoginPage() {
    return (
        <div className="flex w-full flex-col items-center gap-5 bg-gray-900">
            <div className="container-xs md:px-5">
                <Header />
            </div>
            {/* login section */}
            <LoginSection />
        </div>
    );
}
