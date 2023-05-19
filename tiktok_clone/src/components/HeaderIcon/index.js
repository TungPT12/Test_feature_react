import styles from './HeaderIcon.module.scss'
import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessagesIcon } from '../../icons';
function HeaderIcon({ tooltip }) {

    const checkIcon = (tooltip) => {
        if(tooltip === 'Messages') {
            return <MessagesIcon className='messages-icon'/>
        } else {
            return <InboxIcon className='inbox-icon'/>
        }
    }

    return (
        <Tippy
            content={tooltip}
            placement="bottom"
            inertia
        >
            <div className={styles['icon']}>
               {checkIcon(tooltip)}
            </div>
        </Tippy>
    );
}

export default HeaderIcon;