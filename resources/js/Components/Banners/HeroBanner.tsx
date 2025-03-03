import { BannerProps } from "@/types"

export default function HeroBanner({imageUrl, altText}: BannerProps) {
    return (
        <div className="h-full overflow-hidden md:h-[30rem]">
            <img src={imageUrl} alt={altText} />
        </div>
    )
}