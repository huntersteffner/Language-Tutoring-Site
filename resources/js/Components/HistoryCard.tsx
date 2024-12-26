import { BookedSession } from "@/types"
import { useForm } from "@inertiajs/react"

export default function HistoryCard({bookedSession}: {bookedSession: BookedSession}) {

    const { post, reset } = useForm({
        tutor_id: bookedSession.tutor.id
    })

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        post(route('tutors.book'), {
            onSuccess() {
                reset()
            }
        })
    }
    return (
        <div>
            <div className="">
                <img className="h-[10rem] w-[10rem] rounded-full overflow-hidden object-cover" src={bookedSession.tutor.image} alt={bookedSession.tutor.name} />
                <p>You booked a session with {bookedSession.tutor.name} on {bookedSession.created_at} for {bookedSession.credits} credit{bookedSession.credits > 1 ? 's' : ''}.</p>
                <form onSubmit={submit}>
                    <button className="focus:outline-none text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 me-2 mb-2">
                        Book Again!
                    </button>
                </form>
            </div>
        </div>
    )
}