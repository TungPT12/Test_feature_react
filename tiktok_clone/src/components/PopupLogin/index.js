import './Popup.module.scss'
import './popup.css'

function Popup( {onclose, classnames}) {
    return ( 
        <div className={classnames}>
            <button onClick={onclose}>CLick</button>
            <h2>Hello</h2>
        </div>
     );
}

export default Popup;