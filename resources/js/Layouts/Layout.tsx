import Navbar from "./Navbar"
import { User } from "@/types"
import { PropsWithChildren } from "react"
import Footer from "./Footer"

export default function Layout({user, children}: PropsWithChildren<{user: User}>) {
    return (
        <>
            <Navbar user={user} />
            <div className="flex flex-col justify-center w-full min-h-[50rem] max-w-7xl mx-auto">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}