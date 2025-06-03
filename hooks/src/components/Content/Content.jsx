import React from "react";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
    }
    componentDidMount() {
        console.log("Content component did mount");
    }
    componentDidUpdate() {
        console.log(`content component đi update ${this.state.number}`);
    }
    componentWillUnmount() {
        console.log("content component will unmount");
    }
    handleIncreamnt = () => {
        this.setState({
            ...this.state,
            number: this.state.number + 1,
        });
    };

    render() {
        return (
            <>
                <h1>Content - {this.state.number}</h1>
                <button type="button" onClick={this.handleIncreamnt}>
                    Increament
                </button>
            </>
        );
    }
}

export default Content;
