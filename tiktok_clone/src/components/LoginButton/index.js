import styles from './LoginButton.module.scss'
import classNames  from "classnames/bind";
let cx = classNames.bind(styles); 

function LoginButton( {onclick, children}) {

    return ( 
        <div className={styles['wrapper']}>
            <button className={cx('login-button','j')} onClick= {onclick}>{children}</button>
        </div>
     );
}

export default LoginButton;