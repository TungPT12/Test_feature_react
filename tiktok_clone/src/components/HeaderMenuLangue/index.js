import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './HeaderMenuLanguage.module.scss'
function HeaderMenuLangue({onback}) {
    return ( 
       <div className={styles['wrapper']}>
        <button onClick={onback} className={styles['back-language']}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
        <p>Language</p>
       </div>
     );
}

export default HeaderMenuLangue;