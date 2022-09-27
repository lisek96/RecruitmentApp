const React = require('react');
const ReactDOM = require('react-dom');

const styles = {
    header: {
        backgroundColor: "#5CDB95",
        height: "152px",
        margin: "-8px",
        display: "grid",
        alignItems: "center",
    },

    container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "end"
    },

    portalName: {
        fontSize: "36px",
        marginLeft: "2.5rem",
    },

    fontColor: {
        color: "#05386B"
    },

    hello: {
        fontSize: "20px"
    }

}


export default class Header extends React.Component {

    styles = styles;

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style={this.styles.header}>
                <div style={this.styles.container}>
                    <div style={{...this.styles.portalName, ...this.styles.fontColor}}>Portal Rekrutacyjny</div>
                    <div style={this.styles.hello}>hello</div>
                </div>
            </div>
        )
    }
}