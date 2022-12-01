import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
                        রেজিস্ট্রেশন
                    </h2>

                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="mb-6 rounded-md shadow-sm">

                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Full Name
                            </label>
                            <input
                                id="facebook-address"
                                name="name"
                                type="text"
                                required
                                className="relative block w-full mb-6 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="আপনার পুর্ন নাম"
                            />
                        </div>


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
                            <label htmlFor="email-address" className="sr-only">
                                Facebook Url
                            </label>
                            <input
                                id="facebook-address"
                                name="faceboook"
                                type="url"
                                required
                                className="relative block w-full mb-6 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="https://www.facebook.com/username"
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
                                className="relative block mb-6 w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="পাসওয়ার্ড"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                পুনরায় পাসওয়ার্ড লিখুন
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full  appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="পুনরায় পাসওয়ার্ড লিখুন"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <a href="#!" className="font-medium">
                                একাউন্ট আছে  ? <Link to="/login" className='text-blue-900 hover:text-blue-800'>লগিন করুন</Link>
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >

                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;