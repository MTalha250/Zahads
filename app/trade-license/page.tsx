"use client"
import ServiceHero from '@/components/Services/ServiceHero'
import { startBusiness } from '@/data'
import { MapPin } from 'lucide-react'
import Markdown from 'react-markdown'
import React from 'react'
import rehypeRaw from 'rehype-raw'
import ContactForm from '@/components/ContactForm/ContactForm'
import hero from '@/assets/mainlandOverview.webp'

const page = () => {
    return (
        <div>
            <ServiceHero
                backgroundColor='#102448'
                image={hero.src}
                title='TRADE LICENSE DUBAI: A COMPLETE GUIDE'
                buttonText='Get started today'
                costCalculator
                description='Anyone thinking of opening a business in Dubai will need to get a Dubai trade license. This is one of the most important steps new businesses take when starting a company in the area.'
                showButton
                subtitle='START TRADING IN DUBAI TODAY'
            />
            <div className='flex flex-col items-center pt-10 justify-center my-20'>
                <div className="flex items-center justify-center w-16 h-14 bg-primary/10 rounded-xl">
                    <MapPin size={35} className='text-primary' />
                </div>
                <h2 className="md:text-3xl text-xl font-semibold text-center max-w-[700px] mt-5">
                    Your Business Journey Starts With a Trade License
                </h2>
            </div>

            <div className='md:w-7/12 w-full flex md:flex-row flex-col mx-auto justify-center gap-10 md:px-0 px-8'>
                <div className='md:w-1/3 md:sticky top-40 flex flex-col gap-2 text-sm h-fit text-primary w-full bg-primary/5 rounded-xl p-5'>
                    <p className='text-xl font-semibold'>Table of contents</p>
                    <a href="#start-a-business">Why start a business in Dubai?</a>
                    <a href='#choose-an-industry'>- Choose an industry</a>
                    <a href='#choose-a-location'>- Choose a location</a>
                    <a href='#choose-an-industry'>- Choose a company name</a>
                    <a href='#complete-paperwork'>- Complete paperwork</a>
                    <a href='#apply-for-a-license'>- Apply For a License</a>
                    <a href='#open-a-bank-account'>- Open a bank account</a>
                    <a href='#apply-for-visa'>- Apply for a visa</a>
                    <a href='#etiquette-in-the-uae'>- Etiquette in the UAE</a>
                    <a href="#conclusion">Conclusion</a>
                </div>
                <div className='md:w-2/3 w-full'>
                    <Markdown className={"markdown"} rehypePlugins={[rehypeRaw]}>{startBusiness}</Markdown>
                </div>
            </div>

            <div className='md:w-7/12 w-full mx-auto my-20 md:px-0 px-8'>
                <ContactForm backgroundColor='#10244810' buttonColor='#102448' title='Contact Us' />
            </div>

        </div>
    )
}

export default page
