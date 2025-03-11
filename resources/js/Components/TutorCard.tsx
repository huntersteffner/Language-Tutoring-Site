import { Tutor, User } from "@/types"
import LanguageBox from "./LanguageBox"
import React from "react"
import { Link, useForm} from "@inertiajs/react"


export default function TutorCard({user, tutor, siblingIsBanner}: {user: User,tutor: Tutor, siblingIsBanner?: boolean}) {

    const { post, reset } = useForm({
        tutor_id: tutor.id
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
        <div className={`${siblingIsBanner ? 'md:w-1/2' : ''}`}>
            <div className={`flex flex-col justify-center items-center my-2 py-3 border rounded-xl shadow-lg md:flex-row md:justify-around ${siblingIsBanner ? 'md:ml-2' : ''}`}>
                <img className="h-[9rem] w-[9rem] rounded-full overflow-hidden object-cover" src={tutor.image} alt={`${tutor.name}`} />
                <div className="w-full text-center md:w-1/2">
                    <p className="text-4xl font-bold md:text-2xl">{tutor.name}</p>
                    <p className="text-lg">From {tutor.location}</p>
                    <div className="flex items-center border rounded-lg p-2 md:h-[17.25rem]">
                        <p className="text-lg">{tutor.description}</p>
                    </div>
                    <div className="h-[6rem] mt-2">
                        {tutor.languages && (
                            JSON.parse(tutor.languages).map((language: string, i: number) => (
                                <LanguageBox key={i} language={language}/>
                            ))
                        )}
                    </div>
                    <p>{tutor.credits_required} Credit{tutor.credits_required > 1 ? 's' : ''} Per Session</p>
                    <div className="w-full px-5">
                        {user ?
                            (
                                <form onSubmit={submit}>
                                    <button className="focus:outline-none text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 me-2 mb-2">
                                        Book Session
                                    </button>
                                </form>
                            ) :
                            (
                                <Link href={route('login')}>     
                                    <button className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 me-2 mb-2">
                                        Log In To Book Session
                                    </button>
                                </Link>
                            )     
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}