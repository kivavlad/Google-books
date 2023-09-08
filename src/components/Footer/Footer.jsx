import React from "react";
import style from "./footer.module.scss";
import { Link } from "react-router-dom";

import facebookIcon from "../../assets/images/icon-facebook.svg";
import instIcon from "../../assets/images/icon-instagram.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";



const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.footer_content}>

                    <div className={style.footer_logo}>
                        <h2>Books</h2>
                    </div>

                    <div className={style.footer_nav}>
                        <div className={style.icons}>
                            <img src={facebookIcon} alt=""/>
                            <img src={twitterIcon} alt=""/>
                            <img src={pinterestIcon} alt=""/>
                            <img src={instIcon} alt=""/>
                        </div>

                        <div className={style.nav_info}>
                            <p>Created by:</p>
                            <Link to="https://github.com/KivaVlad" target='_blank'>@kivavlad</Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer