import { InfoBanner } from "@/types"
import { Link } from "@inertiajs/react"

export default function SideBanner({imageUrl, altText, backgroundColor, textWhite, cta, text, header}: InfoBanner) {
    return (
        <div className={`${backgroundColor ? backgroundColor : 'bg-black'} ${textWhite ? 'text-white' : 'text-black'}`}>
            <img className="w-full" src={imageUrl} alt={altText} />
            <div className="px-6 py-3">
                <h2 className="text-white">{header}</h2>
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