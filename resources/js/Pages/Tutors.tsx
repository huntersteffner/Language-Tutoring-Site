import { PageProps, Tutor } from "@/types"

type TutorProps = {
    tutors: React.ReactNode
}

export default function Tutors({tutors}: PageProps) {

    console.log(tutors)
    return (
        <>
            <div className="container">
                <h2>List of Tutors</h2>
                <div>
                    {tutors.data.map((tutor: Tutor) => (
                        <div key={tutor.id}>
                            <div>
                                <img src={tutor.image} alt="" />
                                <p>{tutor.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}