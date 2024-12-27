import { User } from "@/types"
import { Link } from "@inertiajs/react"

export default function NavbarLogin({user}: {user: User}) {

    return (
        <div className="flex items-center">  
            {user && (
                <p className="pr-3">{user.credits_available} Credits</p>
            )}
            <div className="flex justify-end border border-white border-solid rounded px-4 py-2 text-center z-30 bg-blue-800">
                {user ? 
                    (
                        <div className="hover:font-bold">
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
        </div>
    )
}