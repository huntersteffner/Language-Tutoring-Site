import AboutParagraph from "@/Components/AboutParagraph"
import HeroBanner from "@/Components/Banners/HeroBanner"
import ParagraphBanner from "@/Components/Banners/ParagraphBanner"
import SideBanner from "@/Components/Banners/SideBanner"
import { findInfoBanner } from "@/Hooks/findInfoBanner"
import Layout from "@/Layouts/Layout"
import { BannerData, InfoBanner, PageProps } from "@/types"
import { Head } from "@inertiajs/react"
import MediaQuery from "react-responsive"

export default function About({auth, paragraphs, infoBanners, heroBanner}: PageProps<{paragraphs: string[], infoBanners: BannerData}>) {

    const aboutSideBanner: InfoBanner = findInfoBanner(infoBanners, 'aboutSideBanner')

    return (
        <Layout user={auth.user}>
            <Head title='About'/>
            <HeroBanner 
                imageUrl={heroBanner.data.imageUrl}
                altText={heroBanner.data.altText}
            />
            <h3 className="text-3xl">About</h3>
            <div className="flex">
                <div className="md:w-2/3">
                    {paragraphs.map((paragraph: string, i: number) => (
                        paragraph === 'banner'
                            ?
                            <MediaQuery key={i} maxWidth={768}>
                                <ParagraphBanner
                                    imageUrl={aboutSideBanner.imageUrl}
                                    altText={aboutSideBanner.altText}
                                    text={aboutSideBanner.text}
                                    header={aboutSideBanner.header}
                                    backgroundColor={aboutSideBanner.backgroundColor}
                                    textWhite={aboutSideBanner.textWhite}
                                    cta={aboutSideBanner.cta}
                                    location={aboutSideBanner.location}
                                />
                            </MediaQuery>
                            :
                            <AboutParagraph key={i} paragraphBody={paragraph} />
                    ))}
                </div>
                <MediaQuery minWidth={768}>
                    <SideBanner
                        imageUrl={aboutSideBanner.imageUrl}
                        altText={aboutSideBanner.altText}
                        text={aboutSideBanner.text}
                        header={aboutSideBanner.header}
                        backgroundColor={aboutSideBanner.backgroundColor}
                        textWhite={aboutSideBanner.textWhite}
                        cta={aboutSideBanner.cta}
                        location={aboutSideBanner.location}
                    />
                </MediaQuery>
            </div>
        </Layout>
    )
}