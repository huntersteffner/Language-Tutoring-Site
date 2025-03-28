import NavbarLinksDesktop from "@/Components/Navbar/NavbarLinksDesktop"
import NavbarLinksMobile from "@/Components/Navbar/NavbarLinksMobile"
import NavbarLogin from "@/Components/Navbar/NavbarLogin"
import { getIsMobile } from "@/Hooks/getIsMobile"
import { User } from "@/types"

export default function Navbar({user}: {user: User}) {

    const pageLinks: string[] = [
        'welcome',
        'tutors',
        'about',
        'history',
        'test account'
    ]

    const isMobile: boolean = getIsMobile()
    console.log('navbar', isMobile)
    return (
        <header className="bg-blue-800 text-white py-1 z-30">
            <nav className="flex justify-between max-w-7xl items-center min-h-[4rem] gap-6 mx-auto z-30">
                
                {isMobile ?    
                    <NavbarLinksMobile user={user} pageLinks={pageLinks} />
                    :
                    <>
                        <NavbarLinksDesktop pageLinks={pageLinks} />
                        {user && (
                            <h2 className="text-3xl font-bold">Hello {user.name}</h2>
                        )}
                        <NavbarLogin user={user} />
                    </>
                }
            </nav>
        </header>
    )
}