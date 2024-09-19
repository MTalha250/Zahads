"use client"
import ContactForm from '@/components/ContactForm/ContactForm'
import { partners } from '@/data'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { id } = useParams();
    const partner = partners.find((partner: any) => partner.id === id);

    if (!partner) return (
        <div>
            <h1>Partner not found</h1>
        </div>
    )
    

    return (
        <div className='md:px-0 px-8'>
            <div className='md:w-7/12 w-full mx-auto mt-40 text-center'>
                <Image src={partner.image} width={500} height={500} alt='image' className='md:w-1/3  w-full mx-auto' />
                <p className='text-2xl font-semibold  mt-10'>{partner.title}</p>
                <p className=''>{partner.description}</p>
            </div>
            <div className='md:w-7/12 w-full mx-auto my-20'>
                <ContactForm backgroundColor='#10244810' buttonColor='#102448' title='Contact Us' />
            </div>


        </div>
    )
}

export default page