import React from "react";
import Content from "../Content/Content";

class AppCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 10,
            showContent: false,
        };
    }
    handleIncreamnt = () => {
        this.setState({
            ...this.state,
            number: this.state.number + 1,
        });
    };
    handleDecreament = () => {
        if (this.state.number == 0) {
            this.setState({
                ...this.state,
            });
        } else {
            this.setState({
                ...this.state,
                number: this.state.number - 1,
            });
        }
    };
    handleToggleContent = () => {
        this.setState({
            ...this.state,
            showContent: !this.state.showContent,
        });
    };
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button type="button" onClick={this.handleIncreamnt}>
                    Increament
                </button>
                <button type="button" onClick={this.handleDecreament}>
                    Decreament
                </button>
                <br />
                <button onClick={this.handleToggleContent}>Toggle Content Component</button>
                {this.state.showContent && <Content />}
            </div>
        );
    }
}
export default AppCount;
