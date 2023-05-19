import styles from './MenuItem.module.scss'

function MenuItem({data, onclick}) {

    return (
        <div className={styles['wrapper-menu-item']} onClick={onclick}>
            <div  className={styles['left-icon']}>{data.iconSeeMore}</div>
            <p className={styles['title']}>{data.title}</p>            
        </div>
     );
}

export default MenuItem;