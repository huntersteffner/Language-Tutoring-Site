import { BannerProps } from "@/types"

export default function HeroBanner({imageUrl, altText}: BannerProps) {
    return (
        <div className="h-full overflow-hidden md:h-[30rem]">
            <img
                src={
                    imageUrl ? imageUrl : 'https://mediablob.electrolux.com/media/ElectroluxMedia/Electrolux%20Laundry%20Tower%20Lifestyle%20Wide%20Crop.jpg'
                } 
                alt={
                    altText ? altText : 'Hero Banner Missing'
                }
            />
        </div>
    )
}