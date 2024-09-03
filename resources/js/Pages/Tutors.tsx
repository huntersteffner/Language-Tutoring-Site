import LanguageBox from "@/Components/LanguageBox"
import TutorCard from "@/Components/TutorCard"
import Layout from "@/Layouts/Layout"
import { PageProps, Tutor, TutorsProps } from "@/types"

export default function Tutors({auth, tutors}: PageProps) {

    console.log(tutors)
    return (
        <Layout user={auth.user}>
            <div className="w-full max-w-2xl mx-auto">
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