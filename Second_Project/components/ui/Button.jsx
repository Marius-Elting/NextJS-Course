import Link from 'next/link'
import classes from "./Button.module.css"
const Button = ({ children, link, clickHandler }) => {

    if (link) {
        return (
            <Link href={link}>
                <a className={classes.btn}> {children}</a>
            </Link>
        )
    }

    return <button className={classes.btn} onClick={clickHandler}>{children}</button>
}

export default Button
