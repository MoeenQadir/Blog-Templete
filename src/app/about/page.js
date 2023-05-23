import React from "react";

const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 text-justify">
                        Welcome to TECH STORM!

                        At TECH STORM, we are passionate about all things tech. Our goal is to bring you the latest tech news, trends, and insights to help you stay up-to-date and informed on the world of technology.

                        Our team of expert writers and tech enthusiasts are dedicated to providing you with high-quality content that is both informative and engaging. We pride ourselves on staying ahead of the curve and bringing you the latest and greatest that technology has to offer.

                        Our content covers a wide range of topics, including gadgets, software, cybersecurity, emerging technologies, and more. We also provide hands-on reviews and guides to help you make the most out of your tech purchases.

                        Whether you're a tech enthusiast, IT professional, or just someone who wants to stay informed about the latest trends, TECH STORM has something for you.

                        Why Choose TECH STORM?

                        Expertise - Our team of writers and contributors have a deep understanding of the tech world and are dedicated to bringing you accurate and up-to-date information.

                        Variety - We cover a wide range of tech topics, from software and cybersecurity to emerging technologies and the latest gadgets.

                        Engagement - We strive to create engaging content that keeps you coming back for more. We love to hear from our readers and encourage discussion and feedback.

                        Trust - You can count on us to deliver honest and unbiased content. We value our readers' trust and work hard to maintain it.

                        Innovation - As technology continues to evolve, so do we. We're always on the lookout for new and exciting tech trends to bring to our readers.

                        Thank you for choosing TECH STORM as your go-to source for all things tech. We're committed to providing you with the best content possible and look forward to helping you stay informed and engaged in the world of technology.
                    </p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full rounded" src="/img/about.png" />
                </div>
            </div>
        </div>
    );
};

export default About1;