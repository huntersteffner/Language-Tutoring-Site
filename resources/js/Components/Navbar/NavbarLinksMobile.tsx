import { Twirl as Hamburger } from "hamburger-react"
import { useState } from "react"
import NavLink from "../NavLink"
import NavbarLogin from "./NavbarLogin"
import { User } from "@/types"

export default function NavbarLinksMobile({user, pageLinks}: { user: User,pageLinks: string[]}) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="flex flex-col pb-4 z-30">
                {user && (
                    <h2 className={`${isOpen ? 'hidden' : ''} text-center absolute text-xl w-full top-[1.5rem]`}>Hello {user.name}</h2>
                )}
                <div className="pt-2 pl-3">
                    <Hamburger  toggled={isOpen} toggle={setOpen} duration={0.3} label='Open Menu' rounded/>
                </div>
                <div className={`${isOpen ? '' : 'mobile-links-closed'} flex flex-col items-end text-2xl absolute mobile-links bg-blue-800 w-full z-20 pb-5 px-6`}>
                    <div className="absolute top-[-3.5rem] right-0">
                        <NavbarLogin user={user} />
                    </div>
                    <div className="flex flex-col items-center w-full border border-white rounded mt-3 p-3">
                        {pageLinks.map((pageLink: string, i: number) => (
                            <>  
                                <NavLink className="pt-3 pb-1" key={i} href={route(pageLink)} active={route().current(pageLink)}>{pageLink.charAt(0).toUpperCase() + pageLink.slice(1)}</NavLink>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}