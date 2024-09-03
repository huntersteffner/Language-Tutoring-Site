import Navbar from "./Navbar"
import { User } from "@/types"
import { PropsWithChildren } from "react"
import Footer from "./Footer"

export default function Layout({user, children}: PropsWithChildren<{user: User}>) {
    return (
        <>
            <div className="w-full max-w-7xl mx-auto">
                <Navbar user={user} />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}