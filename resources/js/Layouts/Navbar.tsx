import { PageProps, User } from "@/types"
import { Link } from "@inertiajs/react"

export default function Navbar({user}: {user: User}) {
    console.log(user)
    const test: boolean = true
    return (
        <header>
            <nav className="flex justify-between items-center h-[4rem] gap-6 mx-auto">
                <div className="flex">
                    <div>
                        <Link href="/">Home</Link>
                    </div>
                    <div>
                        <Link href="/tutors">Tutors</Link>
                    </div>
                    <div>
                        <Link href="/">About</Link>
                    </div>
                </div>
                <div className="flex">
                    {user ? 
                        (
                            <div>
                                <p>{user.credits_available} Credits</p>
                                <Link href='/'>Log Out</Link>
                            </div>
                        ) : 
                        (
                            <>                
                                <div>
                                    <Link href={route('login')}>Log In</Link>
                                </div>
                                <div>
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