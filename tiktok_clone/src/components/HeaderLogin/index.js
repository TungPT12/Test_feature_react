import styles from "./HeaderLogin.module.scss";
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginButton from "../LoginButton";
import UploadButton from "../UploadButton";
import Menu from "../Menu";
import classNames  from "classnames/bind";
import { FeedbackIcon, KeyboardIcon, LanguageIcon } from "../../icons";
let cx = classNames.bind(styles); 
const MENUS = [
  {
    title: "English",
    iconSeeMore: <LanguageIcon />,
    children: [
      { title: "English", code: 'en' },
      { title: "Việt Nam", code: 'vi' },
      { title: "日本", code: 'ja' },
    ],
  },
  { title: "Feedback and help", iconSeeMore: <FeedbackIcon /> },
  { title: "Keyboard shortcuts", iconSeeMore: <KeyboardIcon /> },
]
function HeaderLogin({ onclick }) {

  const _props = {
    onclick,
  };

  return (
    <>
      <UploadButton to="/upload" stylesupload='wrapper'>Upload</UploadButton>
      <LoginButton {..._props}>Login</LoginButton>
      <Menu user={null} menus={MENUS}>
        <div className={cx("see-more-icon", '')}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </Menu>
    </>
  );
}

export default HeaderLogin;