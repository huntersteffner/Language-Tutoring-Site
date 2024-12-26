import { Twirl as Hamburger } from "hamburger-react"
import { useState } from "react"
import NavLink from "./NavLink"

export default function NavbarLinksMobile({pageLinks}: {pageLinks: string[]}) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="flex flex-col pb-4 z-30">
                <Hamburger toggled={isOpen} toggle={setOpen} duration={0.3} label='Open Menu' rounded/>
                <div className={`${isOpen ? '' : 'mobile-links-closed'} flex flex-col items-center text-2xl absolute mobile-links bg-blue-800 w-full z-20 pb-5 px-4`}>
                    {pageLinks.map((pageLink: string, i: number) => (
                        <NavLink className="pt-3 pb-1" key={i} href={route(pageLink)} active={route().current(pageLink)}>{pageLink.charAt(0).toUpperCase() + pageLink.slice(1)}</NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}