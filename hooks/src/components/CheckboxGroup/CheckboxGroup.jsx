import React from "react";

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedList: ["Football"],
            hobbies: ["Football", "Swinming", "Walking"],
        };
    }

    handleChangeHobby = (e) => {
        let newSelectList = [...this.state.selectedList];
        if (newSelectList.includes(e.target.value)) {
            newSelectList = newSelectList.filter((item) => item != e.target.value);
        } else {
            newSelectList = [...newSelectList, e.target.value];
        }
        this.setState({
            ...this.state,
            selectedList: newSelectList,
        });
    };

    componentDidUpdate() {
        console.log(this.state.selectedList);
    }
    render() {
        return (
            <>
                <h3>Please choice hobby</h3>
                {this.state.hobbies.map((hobby) => (
                    <div key={hobby}>
                        <label>
                            <input
                                type="checkbox"
                                name="hobby"
                                value={hobby}
                                checked={this.state.selectedList.includes(hobby)}
                                onChange={this.handleChangeHobby}
                            />
                            {hobby}
                        </label>
                    </div>
                ))}
            </>
        );
    }
}
export default CheckboxGroup;
