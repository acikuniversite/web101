import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

type NavbarProps = {
    logo?: string,
    title: string,
    hasSearchBar?: boolean,
    searchText?: (e: string) => string | void,
    darkMode?: boolean
}

const Navbar = ({ title, logo, hasSearchBar = false, searchText = () => { }, darkMode = true }: NavbarProps) => {
    const { totalPrice } = useAppSelector((state) => state.checkout);

    useEffect(() => {
        const theme = localStorage.getItem("au-theme");
        !!theme && document.documentElement.setAttribute('data-theme', theme)
    }, [])

    const themeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // document.querySelectorAll("#root *").forEach(el => el.classList.toggle("dark-theme"));
        (e.target.checked) ? localStorage.setItem("au-theme", "dark")
            : localStorage.setItem("au-theme", "light");

        (e.target.checked) ? document.documentElement.setAttribute('data-theme', 'dark')
            : document.documentElement.setAttribute('data-theme', 'light');
    }

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <div className={styles.navbarHeader}>
                    <NavLink to="/">
                        {logo && <img alt="" src={logo} />}
                        {title}
                    </NavLink>
                </div>
                <div className={styles.navbarList}>
                    {hasSearchBar && <div className={`${styles.navbarListItem} ${styles.searchBar}`}>
                        <label>
                            <input type="search" onChange={(e) => searchText(e.target.value)} placeholder="Search.." />
                        </label>

                    </div>}
                    {darkMode && <div className={styles.navbarListItem}>
                        <label className={styles.navbarDarkModeContainer}>
                            <input type="checkbox" onChange={themeChange} />
                            <div className={styles.navbarDarkModeBtn}></div>
                        </label>
                    </div>}
                    <div className={styles.cartPrice}>
                        {totalPrice} ₺
                    </div>
                    <div className={styles.navbarProfile}>
                        <img src="https://api.iconify.design/bi:person-circle.svg" alt="" height="30" width="30" />
                    </div>
                    <span>Adem Enes</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;