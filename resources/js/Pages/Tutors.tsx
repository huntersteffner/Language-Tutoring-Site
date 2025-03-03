import HeroBanner from "@/Components/Banners/HeroBanner"
import SuccessMessage from "@/Components/SuccessMessage"
import TutorCard from "@/Components/TutorCard"
import Layout from "@/Layouts/Layout"
import { PageProps, Tutor, TutorsProps } from "@/types"
import { Head } from "@inertiajs/react"

export default function Tutors({auth, tutors, message}: PageProps<{message: string}>) {

    return (
        <Layout user={auth.user}>
            <Head title='Tutors'/>
            <HeroBanner
                imageUrl="https://mediablob.electrolux.com/media/ElectroluxMedia/Electrolux%20Laundry%20Tower%20Lifestyle%20Wide%20Crop.jpg"
                altText="About that"
            />
            <div className="w-full max-w-2xl mx-auto">
                {message !== null && 
                    <SuccessMessage message={message} />
                }
                <h2 className="text-3xl">List of Tutors</h2>
                <div>
                    {tutors.data.map((tutor: Tutor) => (
                        <TutorCard key={tutor.id} user={auth.user} tutor={tutor} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}