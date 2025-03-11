import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import { User } from '@/types'
import Layout from '@/Layouts/Layout'
import HeroBanner from '@/Components/Banners/HeroBanner'
import ParagraphBanner from '@/Components/Banners/ParagraphBanner'
import { findInfoBanner } from '@/Hooks/findInfoBanner'

export default function Welcome({ auth, heroBanner, infoBanners }: PageProps<{user: User }>) {

    const homeSideBanner1 = findInfoBanner(infoBanners, 'homeSideBanner1')
    return (
        <>
            <Layout user={auth.user}>
                <HeroBanner 
                    imageUrl={heroBanner?.data?.imageUrl}
                    altText={heroBanner?.data?.altText}
                />
                <Head title="Home" />
                <div className="bg-gray-50 text-black/50">
                    <div className="relative flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                        <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                            <main className="mt-6">
                                <div className='text-3xl'>
                                    <h2>Get Started Language Learning Today</h2>
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
                                    <a
                                        href="https://laravel-news.com"
                                        className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10"
                                    >
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                            <svg className="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z"/><path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z"/><path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z"/></g></svg>
                                        </div>

                                        <div className="pt-3 sm:pt-5">
                                            <h2 className="text-xl font-semibold text-black">Laravel News</h2>

                                            <p className="mt-4 text-sm/relaxed">
                                                Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials.
                                            </p>
                                        </div>

                                        <svg className="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/></svg>
                                    </a>


                                </div>
                            </main>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
