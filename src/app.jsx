import Footer from "./footer";
import Header from "./header";
import React from "react";
import styles from "./app.css";
import { renderRoutes } from "react-router-config";

class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <Header />
                <div className={styles.content}>
                    {renderRoutes(this.props.route.routes)}
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
