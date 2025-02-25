import AboutParagraph from "@/Components/AboutParagraph"
import BannerImage from "@/Components/BannerImage"
import SideBanner from "@/Components/SideBanner"
import Layout from "@/Layouts/Layout"
import { CTA, PageProps } from "@/types"
import { Link } from "@inertiajs/react"

export default function About({auth, paragraphs}: PageProps<{paragraphs: string[]}>) {
    const cta: CTA = {
        ctaText: 'Go to Tutors Page',
        ctaUrl: '/tutors'
    }
    return (
        <Layout user={auth.user}>
            <BannerImage 
                imageUrl="https://mediablob.electrolux.com/media/ElectroluxMedia/Electrolux%20Laundry%20Tower%20Lifestyle%20Wide%20Crop.jpg"
                altText="About that"
                text={'whats up'}
                backgroundColor="bg-black"
                cta={cta}
            />
            <h3 className="text-3xl">About</h3>
            <div className="flex">
                <div className="w-2/3">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et aperiam consequuntur necessitatibus aliquam dolor laboriosam perferendis exercitationem dicta delectus a! Laboriosam sit cum culpa tenetur?</p>
                    {paragraphs.map((paragraph: string, i: number) => (
                        <AboutParagraph key={i} paragraphBody={paragraph} />
                    ))}
                </div>
                <SideBanner
                    imageUrl="https://img.buzzfeed.com/buzzfeed-static/static/2024-11/14/3/asset/333bd242d09b/sub-buzz-1021-1731555737-1.jpg?downsize=900:*&output-format=auto&output-quality=auto"
                    altText="Patrick Star"
                    cta={cta}
                    backgroundColor="bg-red-400"
                />
            </div>
        </Layout>
    )
}