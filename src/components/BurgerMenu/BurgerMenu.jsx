import { Link } from "react-router-dom";
import style from "./burger.module.scss";

export const BurgerMenu = () => {

    return (
        <div className={style.burger_form}>
            <div className={style.burger_links}>
                <Link to="/" className={style.burger_link}>Home</Link>
                <Link to="/" className={style.burger_link}>Pricing</Link>
                <Link to="/" className={style.burger_link}>Resources</Link>
            </div>
            <div className={style.burger_buttons}>
                <Link to="/" className={style.burger_link}>Login</Link>
                <button className={style.burger_button}>Sign Up</button>
            </div>
        </div>
    )
} 