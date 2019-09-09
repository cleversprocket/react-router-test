import Footer from "./footer";
import Header from "./header";
import React from "react";
import styles from "./app.css";
import {Route} from "react-router-dom";
import Home from "./home";
import Animals from "./animals";

const testRoutes = Array.apply(null, new Array(100)).map((val, index) => {
    const Component = () => <h1>I'm at path /test-{index}</h1>;

    return <Route path={`/test-${index}`} component={Component} key={`/test-${index}`} />;
});

class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <Header />
                <div className={styles.content}>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/animals/:animalName" strict={false} component={Animals} />
                    {testRoutes}
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
