import styles from "./Menu.module.scss";
import { useState } from "react";
import MenuItem from "../MenuItem";
import HeaderMenuLangue from "../HeaderMenuLangue";
import Tippy from "@tippyjs/react/headless";
import { LogoutIcon } from "../../icons";
import { Link } from "react-router-dom";

function Menu({ menus, children, user }) {
  const [menu, setMenu] = useState([{ data: menus }]);
  const [isLanguage, setIsLanguage] = useState(false);
  const [timeDelay, settimeDelay] = useState(0);
  const currentMenu = menu[menu.length - 1];
  const renderMenuItem = () => {
    return currentMenu.data.map((menuItem, index) => {
      if (menuItem.children) {
        return (
          <div key={index}>
            <MenuItem

              data={menuItem}
              onclick={() => {
                setIsLanguage(true);
                setMenu([...menu, { data: menuItem.children }]);
              }}
            />
          </div>
        );
      } else {
        return <MenuItem key={index} data={menuItem} />;
      }
    });
  };

  const checkHeader = () => {
    if (isLanguage) {
      return (
        <>
          <HeaderMenuLangue
            onback={() => {
              setIsLanguage(false);
              setMenu(menu.splice(0, menu.length - 1));
            }}
          />
          {renderMenuItem()}
        </>
      );
    } else if (!isLanguage && user !== null) {
      return (
        <>
          <div className={styles['font-menu-parent']}>
            {renderMenuItem()}
            <Link onClick={() => { alert("ádas") }} className={styles['footer-menu']}>
              <LogoutIcon />
              <p className={styles['text-logout']}>Logout</p>
            </Link>
          </div>
        </>
      )
    }
    else {
      return (
        <>
          <div className={styles['font-menu-parent']}>
            {renderMenuItem()}
          </div>
        </>
      )
    }
  };
  return (
    <Tippy
      hideOnClick={false}
      delay={timeDelay}
      interactive
      placement="right-end"
      render={attrs => (
        <div className={styles["see-more-popup"]} tabIndex="-1" {...attrs}>
          <div className={styles["wrapper-menu"]}>{checkHeader()}</div>
        </div>
      )}
      onShow={() => {
        settimeDelay(2000)
      }}
      onHidden={() => {
        settimeDelay(0)
        setIsLanguage(false);
        setMenu(menu.splice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
