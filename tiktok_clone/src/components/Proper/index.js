import styles from './Proper.module.scss';
import { Link } from 'react-router-dom';
function Proper({data, onclick}) {

    return ( 
        <Link to={`/@${data.nickname}`} onClick={onclick} className={styles['row-menu']}>
            <img src={data.avatar} alt="" className={styles['avatar']}/>
            <div>
                <p className={styles['name']}>{data.full_name}</p>
                <h5 className={styles['nick-name']}>{data.nickname}</h5>
            </div>
        </Link>
     );
}

export default Proper;