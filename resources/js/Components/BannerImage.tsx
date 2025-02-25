import { BannerProps } from "@/types"

export default function BannerImage({imageUrl, altText, cta}: BannerProps) {
    console.log(cta)
    return (
        <div className="h-full overflow-hidden md:h-[30rem]">
            <img src={imageUrl} alt={altText} />
        </div>
    )
}