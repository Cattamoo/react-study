import Tooltip from "../tooltip/tooltip";
import styles from "./header.module.css";

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <Tooltip msg={`Login`}>
        <span role="img" aria-label={`123`}>
          👤
        </span>
      </Tooltip>
      <Tooltip msg={`Title`}>
        <span className={styles.title}>{title}</span>
      </Tooltip>
      <Tooltip msg={`Menu`}>
        <span role="img" aria-label={`456`}>
          📔
        </span>
      </Tooltip>
    </header>
  );
};

export default Header;
