import NavLink from "../NavLink"

export default function NavbarLinksDesktop({ pageLinks }: {pageLinks: string[]}) {
    return (
        <div className="flex py-2">
            {pageLinks.map((pageLink: string, i: number) => (
                <div key={i} className='p-3 hover:font-bold'>
                    <NavLink href={route(pageLink)} active={route().current(pageLink)}>
                        {
                            pageLink
                                .split(' ')
                                .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
                                .join(' ')
                        }
                    </NavLink>
                </div>
            ))}
        </div>
    )
}