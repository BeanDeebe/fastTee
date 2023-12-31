import React from "react";
export default function Welcome() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900 sm:text-6xl">
                            Discover the future of golf course management.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We empower courses to effortlessly manage reservations.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-green-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Sign Up
                            </a>
                            <a
                                href="#"
                                className="rounded-md bg-white px-3.5 py-2.5 text-md font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Log In
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}