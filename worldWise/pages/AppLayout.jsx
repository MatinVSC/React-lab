import Map from '../src/components/Map'
import Sidebar from '../src/components/SideBar'
import styles from './AppLayout.module.css'

export default function AppLayout () {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
        </div>
    )
};
