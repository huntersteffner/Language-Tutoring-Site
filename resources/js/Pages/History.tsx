import HistoryCard from "@/Components/HistoryCard"
import Layout from "@/Layouts/Layout"
import { BookedSession, PageProps } from "@/types"

export default function History({auth, bookedSessions}: PageProps) {
    console.log(bookedSessions)
    return (
        <Layout user={auth.user} >
            <div className="w-full max-w-2xl mx-auto">
                <h2 className="text-3xl">Your Tutoring Session History</h2>
                <div>
                    {bookedSessions.data.map((bookedSession: BookedSession) => (
                        <HistoryCard key={bookedSession.id} bookedSession={bookedSession} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}