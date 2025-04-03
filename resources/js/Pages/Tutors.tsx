import HeroBanner from "@/Components/Banners/HeroBanner"
import ParagraphBanner from "@/Components/Banners/ParagraphBanner"
import SideBanner from "@/Components/Banners/SideBanner"
import SuccessMessage from "@/Components/SuccessMessage"
import TutorCard from "@/Components/TutorCard"
import { findInfoBanner } from "@/Hooks/findInfoBanner"
import Layout from "@/Layouts/Layout"
import { InfoBanner, PageProps, Tutor } from "@/types"
import { Head } from "@inertiajs/react"
import MediaQuery from "react-responsive"

export default function Tutors({auth, tutors, message, infoBanners, heroBanner}: PageProps<{message: string}>) {
    console.log(infoBanners)
    const tutorsListMessage: InfoBanner = findInfoBanner(infoBanners ,'tutorsListMessage')

    return (
        <Layout user={auth.user}>
            <Head title='Tutors'/>
            <HeroBanner
                imageUrl={heroBanner?.data?.imageUrl}
                altText={heroBanner?.data?.altText}
            />
            <div  className="w-full mx-auto grid-cols-2">
                {message !== null && 
                    <SuccessMessage message={message} />
                }
                <h1 className="text-3xl text-center">List of Tutors</h1>
                <div className="md:grid grid-cols-2 gap-5">
                    {tutors.data.map((tutor: Tutor, index: number) => (
                        index !== 2
                        ?
                        <TutorCard key={tutor?.id} user={auth?.user} tutor={tutor} />
                        :
                        <div className="md:flex justify-end" style={{gridColumn: '1 / span 2'}} key={tutor?.id}>
                            <MediaQuery maxWidth={768}>
                                <ParagraphBanner 
                                    imageUrl={tutorsListMessage?.imageUrl}
                                    altText={tutorsListMessage?.altText}
                                    text={tutorsListMessage?.text}
                                    header={tutorsListMessage?.header}
                                    cta={tutorsListMessage?.cta}
                                    location={tutorsListMessage?.location}
                                    backgroundColor={tutorsListMessage?.backgroundColor}
                                    textWhite={tutorsListMessage?.textWhite}
                                />
                            </MediaQuery>
                            <MediaQuery minWidth={768}>
                                <div className="flex justify-center w-[28rem] mx-auto my-4">
                                    <SideBanner 
                                        imageUrl={tutorsListMessage?.imageUrl}
                                        altText={tutorsListMessage?.altText}
                                        text={tutorsListMessage?.text}
                                        header={tutorsListMessage?.header}
                                        cta={tutorsListMessage?.cta}
                                        location={tutorsListMessage?.location}
                                        backgroundColor={tutorsListMessage?.backgroundColor}
                                        textWhite={tutorsListMessage?.textWhite}
                                    />
                                </div>
                            </MediaQuery>
                            <TutorCard user={auth?.user} tutor={tutor} siblingIsBanner={true}/>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}