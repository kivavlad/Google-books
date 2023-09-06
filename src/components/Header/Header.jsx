import React from "react";
import style from "./header.module.scss";


const Header = () => {

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header_content}>

                    <div className={style.header_logo}>
                        <h2>Books</h2>
                    </div>

                    <div className={style.header_nav}>
                        <div className={style.header_links}>
                            <a href="#!" className={style.header_link}>Features</a>
                            <a href="#!" className={style.header_link}>Pricing</a>
                            <a href="#!" className={style.header_link}>Resources</a>
                        </div>
                    </div>

                    <div className={style.header_buttons}>
                        <a href="#!" className={style.header_link}>Login</a>
                        <button className={style.button}>Sign Up</button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header