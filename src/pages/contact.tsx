import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Contact = () => {
    return (
        <div
            id="contact"
            className="h-screen pt-[86px] flex flex-col text-center pb-12 border-gray-600"
        >
            <h1 className="text-6xl font-black mt-5 mb-10 text-purple-500 font-mono">
                <span className="text-white">Contact</span> Me
            </h1>

            <div className="flex justify-center h-full items-center gap-5">
                <div className="flex flex-1 flex-col items-center">
                    <div className="flex flex-col items-start">
                        <h1 className="text-4xl font-bold font-sans">
                            Let&apos;s chat.
                        </h1>
                        <h1 className="text-4xl font-bold font-sans mt-3">
                            Tell me about your projects.
                        </h1>
                        <p className="text-md font-sans mt-4">
                            Let&apos;s create something together 🤘
                        </p>
                    </div>

                    <div className="mt-10 bg-light_gray flex justify-evenly items-center rounded-md py-2 px-5">
                        <CiMail className="bg-bg_black m-2 rounded-md p-2 text-5xl" />
                        <div className="flex flex-col items-start ml-2">
                            <h1 className="font-sans text-lg">Mail me at :</h1>
                            <Link
                                href="mailto:FKHAN20040@GMAIL.COM"
                                className="text-purple-500 font-sans font-medium"
                            >
                                FKHAN20040@GMAIL.COM
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col justify-center items-center mx-10 h-5/6 border rounded-xl bg-light_gray">
                    <h1 className="text-3xl mb-5 text-extrabold font-sans">
                        Send me a message 🚀
                    </h1>
                    <div className="w-full">
                        <form
                            action={process.env.FORMSPREE_LINK}
                            method="POST"
                            className="flex flex-col items-center gap-4 font-medium text-white font-sans"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                autoComplete="off"
                                required
                                className="w-11/12 h-10 rounded-lg p-4 bg-gray-600 outline-slate-500 placeholder-slate-300 placeholder-opacity-80"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="off"
                                required
                                className="w-11/12 h-10 rounded-lg p-4 bg-gray-600 outline-slate-500 placeholder-slate-300 placeholder-opacity-80"
                            />
                            <textarea
                                name="message"
                                id="message"
                                cols={30}
                                rows={7}
                                placeholder="Enter your message"
                                className="w-11/12 rounded-lg p-4 bg-gray-600 outline-slate-500 placeholder-slate-300 placeholder-opacity-80"
                            />
                            <button
                                type="submit"
                                className="text-lg rounded-lg border bg-purple-600 font-semibold text-text_gray py-1 px-6 flex items-center gap-2 hover:bg-purple-700"
                            >
                                SEND{" "}
                                <FaArrowAltCircleRight className="text-2xl" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
