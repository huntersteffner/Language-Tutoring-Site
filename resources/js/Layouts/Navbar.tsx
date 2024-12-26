import NavbarLinksDesktop from "@/Components/NavbarLinksDesktop"
import NavbarLinksMobile from "@/Components/NavbarLinksMobile"
import NavLink from "@/Components/NavLink"
import { User } from "@/types"
import { Link } from "@inertiajs/react"
import { useMediaQuery } from "react-responsive"

export default function Navbar({user}: {user: User}) {

    const pageLinks: string[] = [
        'welcome',
        'tutors',
        'about',
        'history'
    ]

    const isMobile: boolean = useMediaQuery({query: '(min-width: 720px)'})
    return (
        <header className="bg-blue-800 text-white py-1 z-30">
            <nav className="flex justify-between max-w-7xl items-center min-h-[4rem] gap-6 mx-auto bg-blue-800 z-30">
                
                {isMobile ?    
                    <NavbarLinksDesktop pageLinks={pageLinks} />
                    :
                    <NavbarLinksMobile pageLinks={pageLinks} />
                }
                <div className="flex justify-end border border-white border-solid rounded px-4 py-2 text-center z-30 bg-blue-800">
                    {user ? 
                        (
                            <div className="w-20 hover:font-bold">
                                <p>{user.credits_available} Credits</p>
                                <Link method="post" href={route('logout')} as="button">Log Out</Link>
                            </div>
                        ) : 
                        (
                            <>                
                                <div className="w-20 hover:font-bold">
                                    <Link href={route('login')}>Log In</Link>
                                </div>
                                <div className="w-20 hover:font-bold">
                                    <Link href={route('register')}>Register</Link>
                                </div>
                            </>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}