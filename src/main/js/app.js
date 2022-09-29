const React = require('react');
const ReactDOM = require('react-dom');
import Header from "./Header/header";
import Menu from "./Menu/menu";

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
        return (
            <div>
                <Header/>
                <Menu/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
)