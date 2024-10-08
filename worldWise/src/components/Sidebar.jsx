import Logo from './Logo'
import styles from './SideBar.module.css'
import AppNav from './AppNav'
import { Outlet } from 'react-router-dom'

export default function Sidebar () {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <Outlet />

            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; copyRight {new Date().getFullYear()} by MatinVSC
                </p>
            </footer>
        </div>
    )
};