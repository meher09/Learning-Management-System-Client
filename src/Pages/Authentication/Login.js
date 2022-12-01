import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-blue-900">
                        লগিন করুন
                    </h2>

                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="mb-6 rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full mb-6 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="ইমেইল এড্রেস"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="পাসওয়ার্ড"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <a href="#!" className="font-medium">
                                একাউন্ট না থাকলে ? <Link to="/register" className='text-blue-900 hover:text-blue-800'>রেজিস্ট্রেশন করুন</Link>
                            </a>
                        </div>

                        <div className="text-sm">
                            <a href="#!" className="font-medium text-blue-900 hover:text-indigo-800">
                                পাসওয়ার্ড ভুলে গেছি
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white hover:bg-blu-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                            </span>
                            লগিন করুন
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;