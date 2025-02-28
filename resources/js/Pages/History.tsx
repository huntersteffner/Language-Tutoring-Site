import BannerImage from "@/Components/BannerImage"
import HistoryCard from "@/Components/HistoryCard"
import PrimaryButton from "@/Components/PrimaryButton"
import Layout from "@/Layouts/Layout"
import { BookedSession, PageProps } from "@/types"
import { Head, Link } from "@inertiajs/react"

export default function History({auth, bookedSessions}: PageProps) {
    console.log(bookedSessions)
    console.log(auth)
    return (
        <Layout user={auth.user} >
            <Head title='Session History'/>
            <BannerImage 
                imageUrl="https://mediablob.electrolux.com/media/ElectroluxMedia/Electrolux%20Laundry%20Tower%20Lifestyle%20Wide%20Crop.jpg"
                altText="About that"
            />
            <div className="w-full max-w-2xl mx-auto min-h-[35rem]">
                {bookedSessions.data.length > 0 ? (
                    <h2 className="text-3xl">{auth.user.name}'s Tutoring Session History</h2>
                ) : (
                    <>  
                        <h2 className="text-3xl">You haven't booked any tutoring sessions yet.</h2>
                        <p>Check out our list of tutors so that you can book your first session <Link href={route('tutors')}><PrimaryButton>View Tutors Page</PrimaryButton></Link></p>
                    </>
                )}
                <div>
                    {bookedSessions.data.map((bookedSession: BookedSession) => (
                        <HistoryCard key={bookedSession.id} bookedSession={bookedSession} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}