import React from "react";
import styles from "./header.css";
import { Link } from "react-router-dom";

class Header extends React.PureComponent {
    render() {
        return (
            <div className={styles.header}>
                <div>I am the Header</div>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/animals/tiger">Tiger</Link></div>
                <div><Link to="/animals/mouse">Mouse</Link></div>
            </div>
        );
    }
}

export default Header;
