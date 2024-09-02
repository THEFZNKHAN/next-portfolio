import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Contact = () => {
    return (
        <div
            id="contact"
            className="min-h-screen w-11/12 flex flex-col justify-center items-center py-16 bg-dark_gray text-white"
        >
            <h1 className="text-5xl max-md:text-4xl font-extrabold mb-12 text-purple-500">
                Contact <span className="text-white">Me</span>
            </h1>

            <div className="flex flex-col lg:flex-row items-center w-full max-w-5xl gap-10">
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl max-md:text-xl font-bold mb-4">
                        Let&apos;s chat. Tell me about your projects.
                    </h2>
                    <p className="text-lg max-md:text-base mb-8">
                        Let&apos;s create something amazing together 🤘
                    </p>
                    <div className="bg-light_gray p-6 rounded-lg flex items-center">
                        <CiMail className="text-5xl text-text_gray mr-4" />
                        <div>
                            <h3 className="text-lg">Mail me at:</h3>
                            <Link
                                href="mailto:FKHAN20040@GMAIL.COM"
                                className="text-purple-500 text-xl max-md:text-lg font-medium font-sans"
                            >
                                FKHAN20040@GMAIL.COM
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-light_gray p-8 rounded-lg shadow-lg w-full">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Send me a message 🚀
                    </h2>
                    <form
                        action={process.env.FORMSPREE_LINK}
                        method="POST"
                        className="flex flex-col gap-6"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            autoComplete="off"
                            required
                            className="w-full h-12 rounded-lg p-4 bg-gray-700 outline-none placeholder-gray-400 focus:ring-2 focus:ring-purple-600"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                            className="w-full h-12 rounded-lg p-4 bg-gray-700 outline-none placeholder-gray-400 focus:ring-2 focus:ring-purple-600"
                        />
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={5}
                            placeholder="Enter your message"
                            className="w-full rounded-lg p-4 bg-gray-700 outline-none placeholder-gray-400 focus:ring-2 focus:ring-purple-600"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold flex justify-center items-center gap-2 transition-all duration-300"
                        >
                            SEND <FaArrowAltCircleRight className="text-2xl" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
