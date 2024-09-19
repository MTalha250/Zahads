import { GlobeIcon } from 'lucide-react'
import Image from 'next/image';
import React from 'react'

const Characteristics = ({ title, points, image }: { title: string; points: any[]; image?: string }) => {
    return (
        <div className='bg-primary/5 pb-16'>

            <div className='flex flex-col items-center pt-10 justify-center'>
                <div className="flex items-center justify-center w-16 h-14 bg-primary/10 rounded-xl">
                    <GlobeIcon size={35} className='text-primary' />
                </div>
                <h2 className="md:text-3xl text-xl font-semibold text-center max-w-[700px] mt-5">
                    {title}
                </h2>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-5 md:w-7/12 w-full md:px-0 px-8 mx-auto md:my-20 my-5 mb-10'>
                {
                    points.map((point, index) =>
                        <div key={index + 1} className='flex flex-col gap-2 items-start mt-5'>
                            <p className='font-semibold text-xl'>{index + 1}. {point.title}</p>
                            <p>{point.description}</p>
                        </div>
                    )
                }
            </div>
            {image && <Image src={image} alt='image' width={500} height={500} className='rounded-xl md:w-1/2 w-full mx-auto' />}
            
        </div>
    )
}

export default Characteristics