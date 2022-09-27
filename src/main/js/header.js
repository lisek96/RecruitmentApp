const React = require('react');
const ReactDOM = require('react-dom');

const styles = {
    header: {
        color: "red"
    }
}

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style={styles.header}>
                Hello
            </div>
        )
    }
}