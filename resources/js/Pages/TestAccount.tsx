import HeroBanner from '@/Components/Banners/HeroBanner'
import SideBanner from '@/Components/Banners/SideBanner'
import { findInfoBanner } from '@/Hooks/findInfoBanner'
import Layout from '@/Layouts/Layout'
import { PageProps } from '@/types'
import { Head } from '@inertiajs/react'

export default function TestAccount({auth, heroBanner, infoBanners}: PageProps) {
    console.log(infoBanners)

    const testAccountToLogin = findInfoBanner(infoBanners, 'testAccountToLogin')

    console.log(testAccountToLogin)

    return (
        <Layout user={auth.user}>
            <Head title='Test Account'/>
            <HeroBanner
                imageUrl={heroBanner?.data?.imageUrl}
                altText={heroBanner?.data?.altText}
            />
            <div className='px-4'>
                <h1 className='text-center text-3xl mt-2'>Test Account</h1>
                <p className='text-lg md:text-center'>You can use these test credentials to log in and test out the website without having to create an account.</p>
            </div>
            <div className='flex flex-col justify-center items-center my-5 md:flex-row md:gap-[4rem] md:min-h-[28rem]'>
                <div>
                    <div className='p-[4rem] border rounded-2xl'>
                        <h2 className='text-2xl text-center font-bold mb-2'>Credentials</h2>
                        <p className='text-lg'>Username: test@example.com</p>
                        <p className='text-lg'>Password: welcome-test</p>
                    </div>
                </div>
                <div className='mt-3 px-2 md:w-1/3 md:mt-0'>
                    <SideBanner 
                        imageUrl={testAccountToLogin?.imageUrl}
                        altText={testAccountToLogin?.imageUrl}
                        text={testAccountToLogin?.text}
                        header={testAccountToLogin?.header}
                        cta={testAccountToLogin?.cta}
                        location={testAccountToLogin?.location}
                        backgroundColor={testAccountToLogin?.backgroundColor}
                        textWhite={testAccountToLogin?.textWhite}
                    />
                </div>
            </div>
        </Layout>
    )
}