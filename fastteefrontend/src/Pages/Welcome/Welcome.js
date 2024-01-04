import React from "react";
import {Link} from 'react-router-dom';
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
                            <Link
                                to="/signup"
                                className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-xl text-white shadow-sm hover:bg-emerald-900"
                            >
                                Sign Up
                            </Link>
                            <Link to="/login"
                                className="rounded-md text-xl bg-white px-3.5 py-2.5 text-gray-900 hover:text-emerald-900"
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}