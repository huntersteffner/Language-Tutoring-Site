import HeroBanner from "@/Components/Banners/HeroBanner"
import ParagraphBanner from "@/Components/Banners/ParagraphBanner"
import SideBanner from "@/Components/Banners/SideBanner"
import SuccessMessage from "@/Components/SuccessMessage"
import TutorCard from "@/Components/TutorCard"
import { findInfoBanner } from "@/Hooks/findInfoBanner"
import Layout from "@/Layouts/Layout"
import { InfoBanner, PageProps, Tutor } from "@/types"
import { Head } from "@inertiajs/react"

export default function Tutors({auth, tutors, message, infoBanners, heroBanner}: PageProps<{message: string}>) {
    console.log(infoBanners)
    const tutorsListMessage: InfoBanner = findInfoBanner(infoBanners ,'tutorsListMessage')

    return (
        <Layout user={auth.user}>
            <Head title='Tutors'/>
            <HeroBanner
                imageUrl={heroBanner.data.imageUrl}
                altText={heroBanner.data.altText}
            />
            <div className="w-full max-w-2xl mx-auto">
                {message !== null && 
                    <SuccessMessage message={message} />
                }
                <h2 className="text-3xl">List of Tutors</h2>
                <div>
                    {tutors.data.map((tutor: Tutor, index: number) => (
                        index !== 2
                        ?
                        <TutorCard key={tutor.id} user={auth.user} tutor={tutor} />
                        :
                        <div key={tutor.id}>       
                            <ParagraphBanner 
                                imageUrl={tutorsListMessage.imageUrl}
                                altText={tutorsListMessage.altText}
                                text={tutorsListMessage.text}
                                header={tutorsListMessage.header}
                                cta={tutorsListMessage.cta}
                                location={tutorsListMessage.location}
                                backgroundColor={tutorsListMessage.backgroundColor}
                                textWhite={tutorsListMessage.textWhite}
                            />
                            <TutorCard user={auth.user} tutor={tutor} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}