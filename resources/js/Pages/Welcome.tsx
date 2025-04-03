import { Head } from '@inertiajs/react'
import { PageProps, Testimony, Tutor } from '@/types'
import { User } from '@/types'
import Layout from '@/Layouts/Layout'
import HeroBanner from '@/Components/Banners/HeroBanner'
import ParagraphBanner from '@/Components/Banners/ParagraphBanner'
import { findInfoBanner } from '@/Hooks/findInfoBanner'
import Testimonial from '@/Components/Testimonial'
import TutorCard from '@/Components/TutorCard'
import SideBanner from '@/Components/Banners/SideBanner'
import { getIsMobile } from '@/Hooks/getIsMobile'

export default function Welcome({ auth, heroBanner, infoBanners, tutors, testimonies }: PageProps<{ testimonies: {data: Testimony[]} }>) {

    console.log(testimonies)

    console.log(infoBanners)

    const homeSideBanner1 = findInfoBanner(infoBanners, 'homeSideBanner1')
    const homeSideBanner2 = findInfoBanner(infoBanners, auth?.user ? 'homeSideBanner2Alt' : 'homeSideBanner2')
    const homeSideBanner3 = findInfoBanner(infoBanners, 'homeSideBanner3')

    const isMobile: boolean = getIsMobile()
    console.log(isMobile)
    return (
        <>
            <Layout user={auth.user}>
                <HeroBanner 
                    imageUrl={heroBanner?.data?.imageUrl}
                    altText={heroBanner?.data?.altText}
                />
                <Head title="Home" />
                <div className="bg-gray-50 text-black">
                    <div className="relative flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                        <div className="relative w-full max-w-2xl px-1 lg:px-6 lg:max-w-7xl">

                            <main className="mt-4">
                                <div className='text-3xl my-3 text-center'>
                                    <h1>Get Started Language Learning Today</h1>
                                </div>
                                <div className='flex flex-col mb-3 lg:flex-row'>
                                    <div className='lg:w-1/2'>
                                        <img src="https://www17.wellsfargomedia.com/assets/images/contextual/responsive/smlpromo/wfi_ph_a_380700712-investingmoney_616x353.jpg" alt="" />
                                    </div>
                                    <div className='my-auto px-9 text-center py-3 md:w-1/2 md:px-7'>                                
                                        <p className='text-xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea non quas maxime nesciunt enim fugiat, voluptate natus earum reprehenderit, in autem rerum ad dignissimos voluptas distinctio incidunt. Harum, quo.</p>
                                    </div>
                                </div>
                                <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

                                    <ParagraphBanner
                                        imageUrl={homeSideBanner1?.imageUrl}
                                        altText={homeSideBanner1?.imageUrl}
                                        text={homeSideBanner1?.text}
                                        header={homeSideBanner1?.header}
                                        cta={homeSideBanner1?.cta}
                                        location={homeSideBanner1?.location}
                                        backgroundColor={homeSideBanner1?.backgroundColor}
                                        textWhite={homeSideBanner1?.textWhite}
                                    />
                                    <ParagraphBanner
                                        imageUrl={homeSideBanner2?.imageUrl}
                                        altText={homeSideBanner2?.imageUrl}
                                        text={homeSideBanner2?.text}
                                        header={homeSideBanner2?.header}
                                        cta={homeSideBanner2?.cta}
                                        location={homeSideBanner2?.location}
                                        backgroundColor={homeSideBanner2?.backgroundColor}
                                        textWhite={homeSideBanner2?.textWhite}
                                    />


                                </div>
                                <div>
                                    <h2 className='text-3xl text-center mt-2'>Featured Tutors</h2>
                                    <div className='grid gap-6 lg:grid-cols-2 lg:gap-8'>
                                        <div>
                                        </div>
                                        {tutors.data.map((tutor: Tutor, index: number) => (
                                            index > 0 || isMobile
                                            ?
                                            <div
                                                key={tutor.id}
                                                style={{gridColumn: isMobile ? '1 / span 2' : ''}}
                                            >
                                                <TutorCard
                                                    user={auth.user}
                                                    tutor={tutor}
                                                />
                                            </div>
                                            :
                                            <div
                                                style={{gridColumn: '1 / span 2'}}
                                                className='grid gap-6 lg:grid-cols-2 lg:gap-8'
                                                key={tutor.id}
                                            >
                                                <TutorCard
                                                    user={auth.user}
                                                    tutor={tutor}
                                                />
                                                <div className='my-auto'>
                                                    <SideBanner 
                                                        imageUrl={homeSideBanner3?.imageUrl}
                                                        altText={homeSideBanner3?.imageUrl}
                                                        text={homeSideBanner3?.text}
                                                        header={homeSideBanner3?.header}
                                                        cta={homeSideBanner3?.cta}
                                                        location={homeSideBanner3?.location}
                                                        backgroundColor={homeSideBanner3?.backgroundColor}
                                                        textWhite={homeSideBanner3?.textWhite}  
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        {isMobile && (
                                            <div style={{gridColumn: '1 / span 2'}}>
                                                <SideBanner 
                                                    imageUrl={homeSideBanner3?.imageUrl}
                                                    altText={homeSideBanner3?.imageUrl}
                                                    text={homeSideBanner3?.text}
                                                    header={homeSideBanner3?.header}
                                                    cta={homeSideBanner3?.cta}
                                                    location={homeSideBanner3?.location}
                                                    backgroundColor={homeSideBanner3?.backgroundColor}
                                                    textWhite={homeSideBanner3?.textWhite}  
                                                /> 
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-3xl text-center'>What others are saying</h2>
                                    <div className='flex flex-col items-center mx-3 py-10 md:flex-row'>
                                        {testimonies.data.map((testimony) => (
                                            <Testimonial
                                                imageUrl={testimony.imageUrl}
                                                altText={testimony.altText}
                                                name={testimony.name}
                                                message={testimony.message}
                                            />
                                        ))}
                                        {/* <Testimonial 
                                            imageUrl='img/tutors/Spanish1.jpg'
                                            altText='dude'
                                            name='Bob'
                                            message='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus obcaecati, aut delectus earum aliquid autem sint blanditiis odio sit praesentium hic deserunt soluta accusantium culpa?'
                                        />
                                        <Testimonial 
                                            imageUrl='img/tutors/Spanish1.jpg'
                                            altText='dude'
                                            name='Bob'
                                            message='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus obcaecati, aut delectus earum aliquid autem sint blanditiis odio sit praesentium hic deserunt soluta accusantium culpa?'
                                        />
                                        <Testimonial 
                                            imageUrl='img/tutors/Spanish1.jpg'
                                            altText='dude'
                                            name='Bob'
                                            message='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus obcaecati, aut delectus earum aliquid autem sint blanditiis odio sit praesentium hic deserunt soluta accusantium culpa?'
                                        /> */}
                                    </div>
                                </div>
                            </main>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
