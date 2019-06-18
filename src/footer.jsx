import React from "react";
import styles from "./footer.css";

class Footer extends React.PureComponent {
    render() {
        return (
            <div className={styles.footer}>
                I am the Footer
            </div>
        );
    }
}

export default Footer;
