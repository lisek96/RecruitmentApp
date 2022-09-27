const React = require('react');
const ReactDOM = require('react-dom');
import Header from "./header";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return ( <Header/>

    )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)