import Layout from "@/Layouts/Layout"
import { PageProps } from "@/types"

export default function About({auth}: PageProps) {
    return (
        <Layout user={auth.user}>
            <h3>About</h3>
        </Layout>
    )
}