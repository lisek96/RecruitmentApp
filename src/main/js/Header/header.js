const React = require('react');
const ReactDOM = require('react-dom');

import './header.css';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="header">
                <div className="contentContainer">
                    <div className="portalName">Portal Rekrutacyjny</div>
                    <div className="clickableContentStyle links">O firmie</div>
                    <div className="clickableContentStyle links">Projekty</div>
                    <div className="clickableContentStyle links">Kontakt</div>
                    <div></div>
                    <div className="clickableContentStyle loginAndRegistration">logowanie</div>
                    <div className="clickableContentStyle loginAndRegistration">rejestracja</div>
                </div>
            </div>
        )
    }
}