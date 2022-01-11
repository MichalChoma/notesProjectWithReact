import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import Button from "../Button/Button"
import styles from './Header.module.scss'
import { Link } from "react-router-dom";


const Header = ({openModalFunction}) => (
    <header className={styles.wrapper}>
        <Link to="/"><p className={styles.logo}>FavNote.</p></Link>
        <HeaderNavigation />
        <Button onClick={openModalFunction} secondary className={styles.btn}>new item</Button>
    </header>
)

export default Header;