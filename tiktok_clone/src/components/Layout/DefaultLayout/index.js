import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss'
// import classNames from "classnames";
function DefaultLayout(props, { prop, children }) {
    return (
        <div className={styles['wrapper']}>
            <Header />
            <div className={styles['container']}>
                <Sidebar />
                <div className={styles['content']}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;