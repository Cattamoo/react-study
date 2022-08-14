import styles from "./link.module.css";

const Link = ({ label }) => {
  return (
    <a
      className={styles.link}
      href={
        label === "Home" ? "#" : `#${label.toLowerCase().replaceAll(" ", "-")}`
      }
    >
      {label}
    </a>
  );
};

export default Link;
