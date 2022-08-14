import Link from "../link/link";
import styles from "./menu.module.css";

import menus from "../../data/menu.json";

const Menu = () => {
  return (
    <div className={styles.menu}>
      {menus.map((v, i) => (
        <Link key={i} label={v.title} />
      ))}
    </div>
  );
};

export default Menu;
