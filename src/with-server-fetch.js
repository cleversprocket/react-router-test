import {frontloadConnect} from "react-frontload";

const frontload = props => {
    const data = props.serverFetch()

    return data;
};
const withServerFetch = frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
});

export default withServerFetch;
