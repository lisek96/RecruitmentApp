const React = require('react');
const ReactDOM = require('react-dom');

import './menu.css';
import ExpandArrow from '../../resources/icons/menu_expand_arrow.svg';
import JobOffers from '../../resources/icons/menu_jobOffers.svg';
import JobApplications from '../../resources/icons/menu_jobApplications.svg';
import Calls from '../../resources/icons/menu_recruitmentCalls.svg';
import Settings from '../../resources/icons/menu_settings.svg';
import Tests from '../../resources/icons/menu_tests.svg';
import RecruitmentProcesses from '../../resources/icons/menu_recruitmentProcess.svg';

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
                        <div className="menuElement"><ExpandArrow width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div className="menuElement"><JobOffers width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div className="menuElement"><JobApplications /></div>
                    </div>
                    <div className="menuElementContainer">
                        <div className="menuElement"><RecruitmentProcesses width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div className="menuElement"><Calls width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div className="menuElement"><Tests width="50" height="50"/></div>
                    </div>
                    <div className="menuElementContainer">
                        <div className="menuElement"><Settings width="50" height="50"/></div>
                    </div>
                </div>
            </div>
        )
    }
}