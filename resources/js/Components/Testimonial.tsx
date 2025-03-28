import { TestimonialProps } from '@/types'

export default function Testimonial({imageUrl, altText, name, message}: TestimonialProps) {
    return (
        <div className='flex my-5'>
            <img
                className='h-[10rem] w-[10rem] my-auto object-cover rounded-full'
                src={imageUrl}
                alt={altText}
            />
            <div className='my-auto ml-5'>
                <p>{name}</p>
                <p>{message}</p>
            </div>
        </div>
    )
}