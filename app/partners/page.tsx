"use client"
import PartnerCard from '@/components/Cards/PartnerCard'
import ServiceHero from '@/components/Services/ServiceHero'
import { partners } from '@/data'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import partnersHero from '@/assets/partners.webp' 

const page = () => {
    return (
        <div>
            <ServiceHero
                backgroundColor='#102448'
                title='ENJOY EXCLUSIVE BENEFITS'
                image={partnersHero.src}
                description='Our extensive partner programme gives our clients access to a range of exclusive benefits and services that build the foundation of their success.'
                buttonText='Get started today'
                costCalculator
                showButton
                subtitle='OUR PARTNERS'
            />
            <div className='flex flex-col items-center pt-10 justify-center'>
                <div className="flex items-center justify-center w-16 h-14 bg-primary/10 rounded-xl">
                    <MapPin size={35} className='text-primary' />
                </div>
                <h2 className="md:text-3xl text-xl font-semibold text-center max-w-[700px] mt-5">
                    Our Partners
                </h2>
            </div>
            <div className='flex md:flex-row flex-col md:gap-20 gap-5 items-center mx-auto w-full md:w-7/12 mt-20'>
                <Image src={"https://cdn-dhfkh.nitrocdn.com/thFNVEIVwFotvcnmaRVLYEpWIcytEzuw/assets/images/optimized/rev-42052c8/virtuzone.com/wp-content/uploads/2021/09/freezone_overview.png"} width={500} height={500} alt='image' className='w-1/2' />
                <p className=''>In line with our commitment to quality customer service, we have developed a partner program to provide our clients access to a range of exclusive services that will help them build the foundation of a great business.

                    We understand that it takes more than just a trade license to build a successful company and with access to a range of reliable partners our clients can excel in all areas.</p>

            </div>

            <div className='mx-auto  py-10 bg-primary/5 w-full px-8'>
                <div className='w-2/3 mx-auto grid md:grid-cols-3 grid-cols-1 gap-5'>
                    {
                        partners.map((partner: any, index: any) => (
                            <PartnerCard
                                title={partner.title}
                                id={partner.id}
                                image={partner.image}
                                description={partner.description}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page
