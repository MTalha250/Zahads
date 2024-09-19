import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const PartnerCard = ({ image, title, description, id }: { id: string; image: string; title: string; description: string }) => {
    return (
        <div className='flex flex-col shadow-md gap-4 rounded-xl bg-white px-5 py-3'>
            <div className='w-full overflow-hidden'>
                <Image src={image} width={500} height={500} alt='image' className='object-contain w-[150px] mx-auto' />
            </div>
            <p className='text-lg font-semibold'>{title}</p>
            <p className='text-sm'>{description}</p>
            <Link href={`/partners/${id}`} className='text-primary'>Read more</Link>
        </div>
    )
}

export default PartnerCard