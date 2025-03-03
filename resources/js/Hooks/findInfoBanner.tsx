import { BannerData, InfoBanner } from "@/types"

export function findInfoBanner(infoBanners: BannerData, location: string) {
    let infoBanner: InfoBanner = {
        header: 'No banner information found',
        text: 'Please check data',
        location: 'any',
        imageUrl: 'https://mediablob.electrolux.com/media/Frigidaire_Media/Images/Induction%20range%20HP%20Banner%20desktop.png',
        altText: 'No data found',
        backgroundColor: 'bg-black',
        cta: {
           ctaText: 'Home',
           ctaUrl: '/',
           location: 'any'
        }
    }

    infoBanners.data.forEach((banner) => {
        if(banner.location === location) {
            infoBanner = banner
        }
    })
    return infoBanner
}