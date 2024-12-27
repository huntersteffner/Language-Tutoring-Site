import NavLink from "../NavLink"

export default function NavbarLinksDesktop({ pageLinks }: {pageLinks: string[]}) {
    return (
        <div className="flex py-2">
            {pageLinks.map((pageLink: string, i: number) => (
                <div key={i} className='p-3 hover:font-bold'>
                    <NavLink href={route(pageLink)} active={route().current(pageLink)}>{pageLink.charAt(0).toUpperCase() + pageLink.slice(1)}</NavLink>
                </div>
            ))}
        </div>
    )
}