const React = require('react');
const ReactDOM = require('react-dom');
import Header from "./Header/header";
import Menu from "./Menu/menu";
import "./app.css";

import {
    BrowserRouter as Router,
    Routes,
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
                <div className="appContent">
                <Router>
                    <Routes>
                        <Route exact path="/about" element={<div>55!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>}>
                        </Route>
                        <Route path="/users">
                            2
                        </Route>
                        <Route path="/">
                            3
                        </Route>
                    </Routes>
                </Router>
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
)