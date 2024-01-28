import { Link } from "react-router-dom";
import style from "./header.module.scss";
import burgerIcon from "../../assets/images/burger.png";

export const Header = () => {
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

                    <div className={style.burger}>
                        <img src={burgerIcon} alt="" />
                    </div>

                </div>
            </div>
        </header>
    )
}