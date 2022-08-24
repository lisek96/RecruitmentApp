const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>Hello react</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)