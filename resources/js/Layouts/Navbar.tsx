import NavLink from "@/Components/NavLink"
import { User } from "@/types"
import { Link } from "@inertiajs/react"

export default function Navbar({user}: {user: User}) {
    return (
        <header className="bg-blue-800 text-white py-1">
            <nav className="flex justify-between max-w-7xl items-center h-[4rem] gap-6 mx-auto">
                
                <div className="flex py-2">
                    <div className="p-3 hover:font-bold">
                        <NavLink href={route('welcome')} active={route().current('welcome')}>Home</NavLink>
                    </div>
                    <div className="p-3 hover:font-bold">
                        <NavLink href={route('tutors')} active={route().current('tutors')}>Tutors</NavLink>
                    </div>
                    <div className="p-3 hover:font-bold">
                        <NavLink href={route('about')} active={route().current('about')}>About</NavLink>
                    </div>
                    <div className="p-3 hover:font-bold">
                        <NavLink href={route('history')} active={route().current('history')}>Session History</NavLink>
                    </div>
                </div>
                <div className="flex justify-end border border-white border-solid rounded px-4 py-2 text-center">
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