const React = require('react');
const ReactDOM = require('react-dom');

import './menu.css';
import ExpandArrow from '../../resources/icons/menu_expand_arrow.svg';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="menu">
                <div className="menuContentContainer">
                    <div className="menuElementContainer">
                        <div><ExpandArrow width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div><ExpandArrow width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div><ExpandArrow width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div><ExpandArrow width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div><ExpandArrow width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div><ExpandArrow width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div><ExpandArrow width="50" height="50"/></div>
                    </div>
                </div>
            </div>
        )
    }
}