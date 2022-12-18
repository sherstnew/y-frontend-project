import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { useState } from 'react';


export const Header = () => {
    const [isOpened, setOpened] = useState(false);
    const toogleMenu = () => {
        setOpened(!isOpened);
    };
    return (
        <header className={styles.header}>
            <div className={isOpened ? styles.header__burger_open : styles.header__burger} onClick={toogleMenu}>
                <div className={styles.burger__layer}></div>
                <div className={styles.burger__layer}></div>
                <div className={styles.burger__layer}></div>
                <div className={styles.burger__layer}></div>
            </div>
            {
                isOpened ? <NavLink to="/" className={
                    ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active:
                        styles.header__button
                }
                >Первая страница</NavLink> : <NavLink to="/" className={
                    ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active + " " + styles.hidden :
                        styles.header__button + " " + styles.hidden
                }
                >Первая страница</NavLink>
            }

            {
                isOpened ? <NavLink to="/2" className={
                    ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active:
                        styles.header__button
                }
                >Вторая страница</NavLink> : <NavLink to="/2" className={
                    ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active + " " + styles.hidden :
                        styles.header__button + " " + styles.hidden
                }
                >Вторая страница</NavLink>
            }
        </header>
    )
}

