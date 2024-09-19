import Image from 'next/image';
import React from 'react'

const TeamCard = ({ name, role, image }: { name: string; role: string; image: string }) => {
    return (
        <div className='flex flex-col'>
            <Image src={image} alt='image' width={500} height={500} className='rounded-full md:w-2/3 w-1/2 mx-auto' />
            <div className='text-center mt-5'>
                <p className='font-semibold text-xl'>{name}</p>
                <p>{role}</p>
            </div>
        </div>
    )
}

export default TeamCard