import { PageProps, Tutor, User } from "@/types"
import LanguageBox from "./LanguageBox"
import React from "react"
import { useForm} from "@inertiajs/react"


export default function TutorCard({user,tutor}: {user: User,tutor: Tutor}) {
    interface TestInterface {
        tutor_id: number
    }
    const {data, setData, post, reset, errors, processing} = useForm({
        tutor_id: tutor.id
    })

    // const testForm = useForm<TestInterface>([
    //     tutor_id: tutor.id
    // ])
    
    // const userId = user.id

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
            <div className="flex justify-around items-center my-2 py-3 border rounded-xl">
                <img className="h-[10rem] w-[10rem] rounded-full overflow-hidden object-cover" src={tutor.image} alt={`${tutor.name}`} />
                <div>
                    <p className="text-2xl font-bold">{tutor.name}</p>
                    <p>From {tutor.location}</p>
                    <p>{tutor.description}</p>
                    <div>
                        {tutor.languages && (
                            JSON.parse(tutor.languages).map((language: string, i: number) => (
                                <LanguageBox key={i} language={language}/>
                            ))
                        )}
                    </div>
                    <p>{tutor.credits_required} Credit{tutor.credits_required > 1 ? 's' : ''} Per Session</p>
                    {user ?
                        (
                            <form onSubmit={submit}>
                                
                                <button className="w-full bg-slate-500 text-white">
                                    Book Session
                                </button>
                            </form>
                        ) :
                        (
                            <button className="w-full bg-slate-500 text-white">
                                Log In To Book Session
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}