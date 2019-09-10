import React from "react";
import styles from "./header.css";
import { connect } from "react-redux";
import { push } from "connected-react-router";

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleLinkClick(e) {
        e.preventDefault();
        this.props.dispatch(push(e.target.getAttribute("href")));
    }
    
    render() {

        return (
            <div className={styles.header}>
                <div>I am the Header</div>
                <div><a onClick={this.handleLinkClick} href="/">Root</a></div>
                <div><a onClick={this.handleLinkClick} href="/home">Home</a></div>
                <div><a onClick={this.handleLinkClick} href="/animals">Animal</a></div>
                <div><a onClick={this.handleLinkClick} href="/animals/tiger">Tiger</a></div>
                <div><a onClick={this.handleLinkClick} href="/animals/mouse">Mouse</a></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        router: state.router
    };
};

export default connect(mapStateToProps)(Header);

