import { NavLink } from "react-router-dom";

export default function Nav() {

    const links = [
        {
            name: "About",
            route: "/"
        },
        {
            name: "Portfolio",
            route: "/portfolio"
        },
        {
            name: "Resume",
            route: "/resume"
        },
        {
            name: "Contact",
            route: "/contact"
        }
    ]

    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.route} activeClassName="active" end>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}