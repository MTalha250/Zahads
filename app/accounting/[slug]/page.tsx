import ContactForm from '@/components/ContactForm/ContactForm'
import { accountingServices } from '@/data/accounting';
import React from 'react'
import Markdown from 'react-markdown';

interface AccountingProps {
    params: {
        slug: string;
    };
}

const page = ({ params }: AccountingProps) => {

    const service = accountingServices.find((service) => service.link === params.slug);


    return (
        <div className='flex flex-row gap-7 px-32 md:my-44 my-28'>
            <div className='w-4/5 '>
                <Markdown className='markdown'>{service?.content}</Markdown>
            </div>
            <div className='md:w-2/5 w-full mx-auto my-20 md:px-0 px-8'>
                <ContactForm backgroundColor='#10244810' buttonColor='#102448' title={service ? service.title : "Contact Us"} />
            </div>
        </div>
    )
}

export default page