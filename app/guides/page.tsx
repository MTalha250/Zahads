"use client"
import ServiceHero from '@/components/Services/ServiceHero'
import { setupGuides } from '@/data'
import { GlobeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import setupGuidesHero from '@/assets/setupGuides.webp'

const page = () => {
    return (
        <div>
            <ServiceHero
                image={setupGuidesHero.src}
                title='THE RESOURCES FOR YOUR SUCCESS'
                subtitle='UAE BUSINESS SETUP GUIDES'
                description='Your success is our success. That is why we have prepared these resources to help you get your business on the right track, from the start.'
                showButton
                buttonText='Get started today'
                costCalculator
                backgroundColor='#102448'
            />
            <div className='flex flex-col items-center pt-10 justify-center'>
                <div className="flex items-center justify-center w-16 h-14 bg-primary/10 rounded-xl">
                    <GlobeIcon size={35} className='text-primary' />
                </div>
                <h2 className="md:text-3xl text-xl font-semibold text-center max-w-[700px] mt-5">
                    Business Setup Guides
                </h2>
            </div>

            <div className='grid grid-cols-1 md:w-7/12 w-full md:px-0 px-8 mx-auto my-20 gap-10'>
                {
                    setupGuides.map((guide, index) => (
                        <div className='flex md:flex-row flex-col justify-between items-center md:gap-16 gap-10'>
                            <div className='flex flex-col gap-1 md:w-2/3 w-full'>
                                <p className='text-2xl font-semibold'>{guide.title}</p>
                                <p>{guide.description}</p>
                                <Link href={`/guides/${guide.id}`}>
                                    <button className='bg-primary w-fit rounded text-white font-medium px-4 py-2 mt-5'>Download FREE</button>
                                </Link>
                            </div>
                            <Link href={`/guides/${guide.id}`} className='md:w-1/3 w-2/3 mx-auto'>
                                <Image src={guide.image} alt='image' width={500} height={500} className='w-full' />
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default page