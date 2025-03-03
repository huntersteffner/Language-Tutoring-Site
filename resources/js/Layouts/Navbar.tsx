import NavbarLinksDesktop from "@/Components/Navbar/NavbarLinksDesktop"
import NavbarLinksMobile from "@/Components/Navbar/NavbarLinksMobile"
import NavbarLogin from "@/Components/Navbar/NavbarLogin"
import { User } from "@/types"
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
            <nav className="flex justify-between max-w-7xl items-center min-h-[4rem] gap-6 mx-auto z-30">
                
                {isMobile ?    
                    <>
                        <NavbarLinksDesktop pageLinks={pageLinks} />
                        {user && (
                            <h2 className="text-3xl font-bold">Hello {user.name}</h2>
                        )}
                        <NavbarLogin user={user} />
                    </>
                    :
                    <NavbarLinksMobile user={user} pageLinks={pageLinks} />
                }
            </nav>
        </header>
    )
}