import HeroBanner from '@/Components/Banners/HeroBanner'
import Layout from '@/Layouts/Layout'
import { PageProps } from '@/types'
import { Head } from '@inertiajs/react'

export default function TestAccount({auth, heroBanner, infoBanners}: PageProps) {
    return (
        <Layout user={auth.user}>
            <Head title='Test Account'/>
            <HeroBanner
                imageUrl={heroBanner?.data?.imageUrl}
                altText={heroBanner?.data?.altText}
            />
            <h2>Test Account</h2>
        </Layout>
    )
}