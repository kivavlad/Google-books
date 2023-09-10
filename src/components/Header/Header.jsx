import React, { useState, useEffect } from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import burgerIcon from "../../assets/images/burger.png";
import closeIcon from "../../assets/images/close_icon.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


const Header = () => {
    let [burgerActive, setBurgerActive] = useState(false);

    useEffect(() => {
        if (burgerActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [burgerActive]);
    

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header_content}>

                    <div className={style.header_logo}>
                        <h2>Books</h2>
                    </div>

                    <div className={style.header_nav}>
                        <div className={style.header_links}>
                            <Link to="/" className={style.header_link}>Home</Link>
                            <Link to="/" className={style.header_link}>Pricing</Link>
                            <Link to="/" className={style.header_link}>Resources</Link>
                        </div>
                    </div>

                    <div className={style.header_buttons}>
                        <Link to="/" className={style.header_link}>Login</Link>
                        <button className={style.button}>Sign Up</button>
                    </div>

                    <div onClick={() => setBurgerActive(burgerActive = !burgerActive)} className={style.burger}>
                        <img src={burgerActive ? closeIcon : burgerIcon} alt="" />
                        <div className={burgerActive ? style.burger_container_active : style.burger_container}>
                            <BurgerMenu setBurgerActive={setBurgerActive} />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header