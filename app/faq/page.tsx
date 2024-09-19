"use client"
import { faq } from '@/data'
import React, { useState } from 'react'
import Markdown from 'react-markdown'
import { GlobeIcon } from 'lucide-react'
import ContactForm from '@/components/ContactForm/ContactForm'
import ServiceHero from '@/components/Services/ServiceHero'
import faqs from '@/assets/faq.webp'

const page = () => {
    const [section, setSection] = useState(faq.find((section: any) => section.title === 'about'))

    return (
        // <>
        //     <ServiceHero
        //         title='Frequently Asked Questions'
        //         subtitle=''
        //         image={faqs.src}
        //         backgroundColor='#102448'
        //         showButton
        //         costCalculator
        //         buttonText='Get started today'
        //         description='Do you have questions about Zahads, entrepreneurship or anything about doing business in the UAE? Check our FAQ below to find the answers you need.'
        //     />
        //     <div className=' md:w-7/12 w-full md:px-0 px-6 mx-auto '>
        //         <div className='flex flex-col items-center pt-10 justify-center'>
        //             <div className="flex items-center justify-center w-16 h-14 bg-primary/10 rounded-xl">
        //                 <GlobeIcon size={35} className='text-primary' />
        //             </div>
        //             <h2 className="md:text-3xl text-xl font-semibold text-center max-w-[700px] mt-5">
        //                 Our Partners
        //             </h2>
        //         </div>
        //         <div className='rounded-full md:w-2/3 my-10  bg-primary/10 font-medium md:text-base text-xs flex flex-row justify-evenly items-center mx-auto '>
        //             <p onClick={() => setSection(faq.find((section: any) => section.title === 'about'))} className={`rounded-s-full flex-1 md:py-1 py-2 text-center hover:cursor-pointer hover:bg-primary transition-all hover:text-white ${section?.title == 'about' ? "bg-primary text-white" : ""}`}>About Zahads</p>
        //             <p onClick={() => setSection(faq.find((section: any) => section.title === 'processes'))} className={`flex-1 md:py-1 py-2 text-center hover:cursor-pointer hover:bg-primary transition-all hover:text-white ${section?.title == 'processes' ? "bg-primary text-white" : ""}`}>Processes</p>
        //             <p onClick={() => setSection(faq.find((section: any) => section.title === 'free-zones'))} className={`flex-1 md:py-1 py-2 text-center hover:cursor-pointer hover:bg-primary transition-all hover:text-white ${section?.title == 'free-zones' ? "bg-primary text-white" : ""}`}>Free Zones</p>
        //             <p onClick={() => setSection(faq.find((section: any) => section.title === 'mainland'))} className={`rounded-e-full flex-1  px-1 md:py-1 py-2 text-center hover:cursor-pointer transition-all hover:bg-primary hover:text-white ${section?.title == 'mainland' ? "bg-primary text-white" : ""}`}>Mainland</p>
        //         </div>

        //         <Markdown className={"markdown"}>{section?.content}</Markdown>


        //     </div >
        //     <div className='md:w-7/12 w-full mx-auto my-20 md:px-0 px-6'>
        //         <ContactForm backgroundColor='#10244810' buttonColor='#102448' title='Contact Us' />
        //     </div>
        // </>
        <></>
    )
}

export default page