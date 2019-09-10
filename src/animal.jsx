import React from "react";
import { renderRoutes } from "react-router-config";

class Animal extends React.PureComponent {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <p>Animal Root Home Page</p>
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

export default Animal;
