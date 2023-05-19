import styles from "./Header.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import images from "../../../../assets/img";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import SearchRender from "../../SearchRender";
import searchUserLessApi from  '../../../../services/searchUserLessApi'
import HeaderLogin from "../../../HeaderLogin";
import HeaderLogged from "../../../HeaderLogged";
import Popup from "../../../PopupLogin";
import { Link } from "react-router-dom";

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [clearSpinner, setClearSpinner] = useState('');
  const [listData, setListData] = useState([]);
  const [displayPopLogin, setDisplayPopLogin] = useState('display-none');
  const [timeDelay, settimeDelay] = useState(0);
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const searchApi = async (searchValue) => {
    await searchUserLessApi(searchValue).then(response => {
      setClearSpinner(faSpinner)
      setListData(response.data.data)
      show()
    }
    ).catch(() => {
      setListData([])
    })
  }

  useEffect(() => {
    if (searchValue !== '') {
      setClearSpinner(faCircleXmark)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listData])

  useEffect(() => {
    if (searchValue === '') {
      setListData([])
      setClearSpinner('')
    } else if (searchValue !== '') {
      const handle = setTimeout(async () => {
        await searchApi(searchValue);
      }, 3000)
      return () => {
        clearTimeout(handle);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const clearInput = (e) => {
    e.preventDefault();
    setListData([])
    setClearSpinner(faCircleXmark)
    setSearchValue('')
  }

  const checkClearSpinner = () => {
    if (clearSpinner !== '') {
      return <FontAwesomeIcon icon={clearSpinner} />
    }
    return
  }

  return (
    <header className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <Link to='/' onClick={() => {
          setSearchValue('')
        }} className={styles["logo"]}>
          <img src={images.logo} alt="Tiktok" />
        </Link>
        <div className={styles['search']}>
          <Tippy
            onClickOutside={hide}
            visible={visible}
            delay={timeDelay}
            interactive
            placement="left"
            render={attrs => (
              <div className={styles["wrapper-list"]} tabIndex="-1" {...attrs} >
                <SearchRender onclick={ () => {
                  setSearchValue("")
                  setListData([])
                }} list={listData} searchValue={searchValue} />
              </div>
            )}
            onShow={() => {
              settimeDelay(2000)
            }}
            onHidden={() => {
              settimeDelay(0)
            }}
          >
            <form className={styles['search-form']}>
              <input
                onClick={show}
                id="search-input"
                name="txt-search"
                type="text"
                className={styles['search-input']}
                placeholder="Search accounts and videos"
                spellCheck={false}
                onChange={(e) => {
                  const value = e.target.value
                  if (value.startsWith(' ') || !value.trim()) {
                    setSearchValue('')
                  } else {
                    setSearchValue(value)
                  }
                }}
                value={searchValue} />
              <button className={styles['search-clear']} onClick={(e) => {
                clearInput(e)
              }}>
                {checkClearSpinner()}
              </button>
              <span className={styles['span-splitter']}></span>
              <button className={styles['btn-search']} type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </Tippy>
        </div>
        <div className={styles['action']}>
          {/* <HeaderLogged /> */}
          <HeaderLogin/>
        </div>
      </div>
      <Popup onclose={() => {
        setDisplayPopLogin('display-none')
      }} classnames={displayPopLogin} />
    </header>
  );
}

export default Header;
{/* <HeaderLogin onclick={() => {
            setDisplayPopLogin('display-block')
          }} /> */}