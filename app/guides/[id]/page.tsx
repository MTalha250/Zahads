"use client"
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ServiceHero from '@/components/Services/ServiceHero'
import { setupGuides } from '@/data';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { id } = useParams();
    const guide = setupGuides.find(guide => guide.id === id);
    if (!guide) return <div className='mx-auto w-full text-center my-20 text-5xl font-semibold'>Guide not found</div>

    return (
        <div>
            <ServiceHero
                backgroundColor='#102448'
                title={guide?.title}
                image={guide?.image}
                costCalculator
                buttonText='Get started today'
                showButton

            />
            <div className='flex md:flex-row flex-col md:w-10/12 md:gap-20 gap-5 mx-auto w-full md:px-0 px-8 md:my-20 my-5'>
                <div className='md:w-1/2 w-full flex flex-col gap-5'>
                    <Breadcrumb
                        links={["Home", "Guides", guide?.title]}
                        textColor='#102448'
                    />
                    <p>

                        {guide?.details}
                    </p>
                </div>
                <div className='md:w-1/2 w-full'>
                    <form className="mt-5 space-y-4">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <label htmlFor="firstName" className="font-semibold">
                                    First Name
                                    <span className="text-primary text-xs font-normal italic">
                                        {" "}
                                        (Required)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Type your answer here..."
                                    className="w-full rounded px-2 py-3  border"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="font-semibold">
                                    Last Name
                                    <span className="text-primary text-xs font-normal italic">
                                        {" "}
                                        (Required)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Type your answer here..."
                                    className="w-full rounded px-2 py-3  border"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <label htmlFor="email" className="font-semibold">
                                    Email
                                    <span className="text-primary text-xs font-normal italic">
                                        {" "}
                                        (Required)
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Type your answer here..."
                                    className="w-full rounded px-2 py-3  border"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="font-semibold">
                                    Phone
                                    <span className="text-primary text-xs font-normal italic">
                                        {" "}
                                        (Required)
                                    </span>
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    className="w-full rounded px-2 py-3  border"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="font-semibold">
                                Message
                                <span className="text-primary text-xs font-normal italic">
                                    {" "}
                                    (Required)
                                </span>
                            </label>
                            <textarea
                                name="message"
                                className="border px-2 py-3 resize-none"
                                placeholder="Type your answer here..."
                                rows={4}
                            />
                        </div>

                        <button
                            className="px-12 py-3 rounded-md text-white font-medium w-fit bg-primary"
                        >
                            Download
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page