import { BannerProps } from "@/types"
import { Link } from "@inertiajs/react"

export default function SideBanner({imageUrl, altText, backgroundColor, cta, text}: BannerProps) {
    const bannerCardDivClasses = `w-1/3 ${backgroundColor ? backgroundColor : 'bg-black'}`
    return (
        <div className={`w-1/3 ${backgroundColor ? backgroundColor : 'bg-black'}`}>
            <img className="w-full" src={imageUrl} alt={altText} />
            <div className="px-6 py-3">
                <p className="text-white text-lg">{text}</p>
                {cta && (
                    <Link href={cta.ctaUrl}>
                        <button className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 me-2 mb-2">
                            {cta.ctaText}
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}