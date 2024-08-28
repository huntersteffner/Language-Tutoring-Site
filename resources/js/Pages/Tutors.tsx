import LanguageBox from "@/Components/LanguageBox"
import { PageProps, Tutor } from "@/types"

export default function Tutors({tutors}: PageProps) {

    console.log(tutors)
    return (
        <>
            <div className="w-full max-w-2xl mx-auto bg-slate-400">
                <h2 className="text-3xl">List of Tutors</h2>
                <div>
                    {tutors.data.map((tutor: Tutor) => (
                        <div key={tutor.id}>
                            <div className="flex justify-around items-center">
                                <img className="h-[10rem] w-[10rem] rounded-full overflow-hidden object-cover" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-gyAZrxVx_HgOPs39bD7M-XbYNtWsdU_DQ&s'} alt={`${tutor.name}`} />
                                <div>
                                    <p className="text-2xl font-bold">{tutor.name}</p>
                                    <p>From {tutor.location}</p>
                                    <p>{tutor.description}</p>
                                    <div>
                                        {tutor.ranges && (
                                            JSON.parse(tutor.ranges).map((language: string, i: number) => (
                                                <LanguageBox key={i} language={language}/>
                                            ))
                                        )}
                                    </div>
                                    <p>{tutor.credits_required} Credit{tutor.credits_required > 1 ? 's' : ''} Per Session</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}