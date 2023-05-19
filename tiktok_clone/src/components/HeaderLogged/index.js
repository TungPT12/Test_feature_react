import Menu from "../Menu";
import UploadButton from "../UploadButton";
import styles from "./HeaderLogged.module.scss";
import HeaderIcon from "../HeaderIcon";
import { CameraIcon, CoinsIcon, FeedbackIcon, KeyboardIcon, LanguageIcon, SettingIcon, UserIcon } from "../../icons";

const MENUS = [
  {
    title: "View profile",
    iconSeeMore: <UserIcon />,
  },
  {
    title: "Get Coins",
    iconSeeMore: <CoinsIcon />,
  },
  {
    title: "LIVE Studio",
    iconSeeMore: <CameraIcon />,
  },
  {
    title: "Settings",
    iconSeeMore: <SettingIcon />,
  },
  {
    title: "English",
    iconSeeMore: <LanguageIcon />,
    children: [
      { title: "English", code: "en" },
      { title: "Việt Nam", code: "vi" },
      { title: "日本", code: "ja" },
    ],
  },
  {
    title: "Feedback and help",
    iconSeeMore: <FeedbackIcon />
  },
  {
    title: "Keyboard shortcuts",
    iconSeeMore: <KeyboardIcon />,
  },
];

function HeaderLogged() {
  return (
    <>
      <UploadButton to="/upload" stylesupload="wrapper">
        Upload
      </UploadButton>
      <HeaderIcon tooltip="Messages" />
      <HeaderIcon tooltip="Inbox" />
      <Menu menus={MENUS}>
        <img
          user={MENUS}
          className={styles["user-avatar"]}
          src="https://lh3.googleusercontent.com/ogw/AOh-ky2jwK5MDQbhI69csOsbEKP6KtnY7Cp5luRsa730=s32-c-mo"
          alt="avatar"
        />
      </Menu>
    </>
  );
}

export default HeaderLogged;
